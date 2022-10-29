use async_graphql::Object;

use crate::{controllers::tweet::TweetController, modules::tweet::Tweet};

#[derive(Default)]
pub struct TweetQuery;

#[Object]
impl TweetQuery {
    async fn tweet_list(&self) -> Result<Vec<Tweet>, anyhow::Error> {
        TweetController::new().list()
    }
}
