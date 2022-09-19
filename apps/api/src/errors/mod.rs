use axum::{
    http::StatusCode,
    response::{IntoResponse, Response},
    Json,
};
use serde_json::json;

pub enum AppError {
    InternalServerError(anyhow::Error),
    ValidationError,
}

impl From<anyhow::Error> for AppError {
    fn from(inner: anyhow::Error) -> Self {
        AppError::InternalServerError(inner)
    }
}

impl IntoResponse for AppError {
    fn into_response(self) -> Response {
        let (status, error_message) = match self {
            AppError::InternalServerError(inner) => (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error: {:?}", inner),
            ),
            AppError::ValidationError => (
                StatusCode::UNPROCESSABLE_ENTITY,
                format!("Validation errors"),
            ),
        };

        let body = Json(json!({ "error": error_message }));

        (status, body).into_response()
    }
}
