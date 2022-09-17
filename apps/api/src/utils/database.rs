use std::env;

use axum::{
    async_trait,
    extract::{FromRequest, RequestParts},
    http::StatusCode,
};
use sea_orm::DatabaseConnection;

pub async fn get_db_conn() -> DatabaseConnection {
    sea_orm::Database::connect(env::var("DATABASE_URL").unwrap())
        .await
        .unwrap()
}

pub struct Database;

impl Database {
    pub async fn get_conn(&self) -> DatabaseConnection {
        get_db_conn().await
    }
}

#[async_trait]
impl<B> FromRequest<B> for Database
where
    B: Send,
{
    type Rejection = (StatusCode, String);

    async fn from_request(_req: &mut RequestParts<B>) -> Result<Self, Self::Rejection> {
        Ok(Self)
    }
}
