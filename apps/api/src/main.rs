use std::net::SocketAddr;

pub mod controllers;
pub mod errors;
pub mod graphql;
pub mod modules;
pub mod routes;
pub mod schema;
pub mod utils;

use axum::{routing::get, Router};
use dotenvy::dotenv;
use headers::HeaderValue;
use tower_http::cors::CorsLayer;
use tracing_subscriber::{
    self, prelude::__tracing_subscriber_SubscriberExt, util::SubscriberInitExt,
};

use crate::routes::app_routes;

#[tokio::main]
async fn main() {
    dotenv().ok();

    tracing_subscriber::registry()
        .with(tracing_subscriber::EnvFilter::new(
            std::env::var("RUST_LOG").unwrap_or_else(|_| "api=debug".into()),
        ))
        .with(tracing_subscriber::fmt::layer())
        .init();

    let app = Router::new()
        .merge(app_routes().await)
        .route("/health", get(|| async { "ok" }))
        .layer(
            CorsLayer::new().allow_origin("http://localhost:3000".parse::<HeaderValue>().unwrap()),
        );

    let addr = SocketAddr::from(([127, 0, 0, 1], 4000));
    tracing::debug!("listening on http://{addr}/");

    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
