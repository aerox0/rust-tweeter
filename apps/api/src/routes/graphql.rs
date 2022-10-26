use async_graphql::{EmptyMutation, EmptySubscription, Schema};
use axum::{routing::get, Extension, Router};

use crate::graphql::{graphql_handler, graphql_playground, query_root::QueryRoot};

pub async fn graphql_routes() -> Router {
    let schema = Schema::new(QueryRoot::default(), EmptyMutation, EmptySubscription);

    Router::new()
        .route("/", get(graphql_playground).post(graphql_handler))
        .layer(Extension(schema))
}
