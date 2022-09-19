use crate::{controllers::auth::AuthController, errors::AppError, modules::auth::Claims};
use axum::{response::IntoResponse, Json};

pub async fn me_handler(claims: Claims) -> Result<impl IntoResponse, AppError> {
    let result = AuthController::me(claims.sub.parse::<i32>().unwrap()).await?;
    Ok(Json(result))
}
