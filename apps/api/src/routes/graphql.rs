use async_graphql::{EmptySubscription, Schema};
use axum::{routing::get, Extension, Router};

use crate::graphql::{
    graphql_handler, graphql_playground, mutation_root::MutationRoot, query_root::QueryRoot,
};

pub async fn graphql_routes() -> Router {
    let schema = Schema::new(
        QueryRoot::default(),
        MutationRoot::default(),
        EmptySubscription,
    );

    Router::new()
        .route("/", get(graphql_playground).post(graphql_handler))
        .layer(Extension(schema))
}
