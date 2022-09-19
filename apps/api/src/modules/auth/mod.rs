use serde::{Deserialize, Serialize};

pub mod jwt;

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
