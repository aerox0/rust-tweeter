use async_graphql::Object;

#[derive(Default)]
pub struct HelloQuery;

#[Object]
impl HelloQuery {
    async fn hello(&self) -> String {
        "Hello".to_string()
    }
}
