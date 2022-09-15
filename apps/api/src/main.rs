use std::net::SocketAddr;

use axum::{routing::get, Router};
use tracing_subscriber::{
    self, prelude::__tracing_subscriber_SubscriberExt, util::SubscriberInitExt,
};

#[tokio::main]
async fn main() {
    tracing_subscriber::registry()
        .with(tracing_subscriber::EnvFilter::new(
            std::env::var("RUST_LOG").unwrap_or_else(|_| "api=debug".into()),
        ))
        .with(tracing_subscriber::fmt::layer())
        .init();

    let app = Router::new().route("/health", get(|| async { "ok" }));

    let addr = SocketAddr::from(([127, 0, 0, 1], 4000));
    tracing::debug!("listening on http://{addr}/");

    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
