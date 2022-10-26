use axum::{
    async_trait,
    extract::{FromRequest, RequestParts},
    http::StatusCode,
};
use diesel::{pg::PgConnection, r2d2::ConnectionManager};
use r2d2::{Pool, PooledConnection};
use std::env;

pub type DbPool = Pool<ConnectionManager<PgConnection>>;
pub type PooledDb = PooledConnection<ConnectionManager<PgConnection>>;

pub struct Database {
    pub pool: DbPool,
}

impl Database {
    pub fn new() -> Self {
        let db_url = env::var("DATABASE_URL").unwrap();

        let manager = ConnectionManager::<PgConnection>::new(db_url);
        let pool = Pool::builder()
            .test_on_check_out(true)
            .build(manager)
            .expect("Could not build connection pool");

        Self { pool }
    }

    pub fn get_conn(&self) -> PooledDb {
        self.pool.get().unwrap()
    }
}

#[async_trait]
impl<B> FromRequest<B> for Database
where
    B: Send,
{
    type Rejection = (StatusCode, String);

    async fn from_request(_req: &mut RequestParts<B>) -> Result<Self, Self::Rejection> {
        Ok(Self::new())
    }
}
