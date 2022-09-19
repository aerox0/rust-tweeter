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
    access_token: String,
    token_type: String,
}

#[derive(Serialize)]
pub struct AuthOutput {
    access_token: String,
    refresh_token: String,
}

#[derive(Serialize, Deserialize)]
pub struct Claims {
    sub: String,
    exp: usize,
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

        let claims = JwtService::validate(access_token.to_string(), "ACCESS")
            .ok_or((StatusCode::UNAUTHORIZED, "Wrong credentials".to_string()));

        claims
    }
}
