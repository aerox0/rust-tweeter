use axum::{response::IntoResponse, Json};

use crate::{controllers::auth::AuthController, errors::AppError, modules::user::UserInput};

pub async fn register_handler(Json(input): Json<UserInput>) -> Result<impl IntoResponse, AppError> {
    let result = AuthController::new().register(input).await?;
    Ok(Json(result))
}
