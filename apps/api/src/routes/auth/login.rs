use axum::{response::IntoResponse, Json};

use crate::{controllers::auth::AuthController, errors::AppError, modules::auth::AuthInput};

pub async fn login_handler(Json(input): Json<AuthInput>) -> Result<impl IntoResponse, AppError> {
    let result = AuthController::new().login(input).await?;
    Ok(Json(result))
}
