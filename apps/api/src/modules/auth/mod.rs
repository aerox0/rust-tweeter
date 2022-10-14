use axum::{
    async_trait,
    extract::{FromRequest, RequestParts},
    http::StatusCode,
};
use serde::{Deserialize, Serialize};

use self::jwt_service::JwtService;

pub mod jwt_service;

#[derive(Deserialize)]
pub struct AuthInput {
    pub username: String,
    pub password: String,
}

#[derive(Serialize)]
pub struct AuthOutput {
    pub access_token: String,
    pub refresh_token: String,
}

#[derive(Deserialize)]
pub struct Token {
    pub token: String,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct Claims {
    pub sub: String,
    pub exp: usize,
}

#[async_trait]
impl<S> FromRequest<S> for Claims
where
    S: Send,
{
    type Rejection = (StatusCode, String);

    async fn from_request(req: &mut RequestParts<S>) -> Result<Self, Self::Rejection> {
        let access_token = req
            .headers()
            .get("Authorization")
            .ok_or((StatusCode::UNAUTHORIZED, "Wrong credentials".to_string()))?
            .to_str()
            .unwrap();

        JwtService::validate(access_token.to_string(), "ACCESS")
            .ok_or((StatusCode::UNAUTHORIZED, "Wrong credentials".to_string()))
    }
}
