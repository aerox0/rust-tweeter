use axum::Router;

use self::{api::api_routes, auth::auth_routes, graphql::graphql_routes};

pub mod api;
pub mod auth;
pub mod graphql;

pub async fn app_routes() -> Router {
    Router::new()
        .nest("/api", api_routes().await)
        .nest("/auth", auth_routes().await)
        .nest("/graphql", graphql_routes().await)
}
