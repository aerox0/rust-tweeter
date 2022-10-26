use axum::{response::IntoResponse, Json};

use crate::{controllers::auth::AuthController, errors::AppError, modules::auth::Token};

pub async fn refresh_token_handler(
    Json(input): Json<Token>,
) -> Result<impl IntoResponse, AppError> {
    let result = AuthController::new().refresh_token(input.token).await?;
    Ok(Json(result))
}
