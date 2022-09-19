use axum::{response::IntoResponse, Json};

use crate::{controllers::auth::AuthController, errors::AppError, modules::auth::TokenModel};

pub async fn refresh_token_handler(
    Json(input): Json<TokenModel>,
) -> Result<impl IntoResponse, AppError> {
    let result = AuthController::refresh_token(input.token).await?;
    Ok(Json(result))
}
