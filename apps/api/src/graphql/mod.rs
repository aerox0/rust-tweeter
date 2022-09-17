pub mod query_root;

use self::query_root::QueryRoot;
use async_graphql::{
    http::{playground_source, GraphQLPlaygroundConfig},
    EmptyMutation, EmptySubscription, Schema,
};
use async_graphql_axum::{GraphQLRequest, GraphQLResponse};
use axum::{
    extract::Extension,
    response::{Html, IntoResponse},
    routing::get,
    Router,
};

type ApiSchema = Schema<QueryRoot, EmptyMutation, EmptySubscription>;

async fn graphql_playground() -> impl IntoResponse {
    Html(playground_source(GraphQLPlaygroundConfig::new("/graphql")))
}

async fn graphql_handler(req: GraphQLRequest, schema: Extension<ApiSchema>) -> GraphQLResponse {
    schema.execute(req.into_inner()).await.into()
}

pub async fn graphql_routes() -> Router {
    let schema = Schema::new(QueryRoot, EmptyMutation, EmptySubscription);

    Router::new()
        .route("/graphql", get(graphql_playground).post(graphql_handler))
        .layer(Extension(schema))
}
