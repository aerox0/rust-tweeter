pub mod login;
pub mod me;
pub mod refresh_token;
pub mod register;

use self::{
    login::login_handler, me::me_handler, refresh_token::refresh_token_handler,
    register::register_handler,
};
use axum::{
    routing::{get, post},
    Router,
};

pub async fn auth_routes() -> Router {
    Router::new()
        .route("/me", get(me_handler))
        .route("/login", post(login_handler))
        .route("/register", post(register_handler))
        .route("/refresh_token", post(refresh_token_handler))
}
