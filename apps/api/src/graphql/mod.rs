pub mod mutation_root;
pub mod mutations;
pub mod queries;
pub mod query_root;

use self::{mutation_root::MutationRoot, query_root::QueryRoot};
use async_graphql::{
    http::{playground_source, GraphQLPlaygroundConfig},
    EmptySubscription, Schema,
};
use async_graphql_axum::{GraphQLRequest, GraphQLResponse};
use axum::{
    extract::Extension,
    response::{Html, IntoResponse},
};

type ApiSchema = Schema<QueryRoot, MutationRoot, EmptySubscription>;

pub async fn graphql_playground() -> impl IntoResponse {
    Html(playground_source(GraphQLPlaygroundConfig::new("/graphql")))
}

pub async fn graphql_handler(req: GraphQLRequest, schema: Extension<ApiSchema>) -> GraphQLResponse {
    schema.execute(req.into_inner()).await.into()
}
