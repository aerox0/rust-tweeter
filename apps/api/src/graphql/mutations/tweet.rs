use async_graphql::Object;

use crate::{
    controllers::tweet::TweetController,
    modules::tweet::{Tweet, TweetInput, TweetUpdateInput},
};

#[derive(Default)]
pub struct TweetMutation;

#[Object]
impl TweetMutation {
    async fn tweet_create(&self, input: TweetInput) -> Result<Tweet, anyhow::Error> {
        TweetController::new().create(input)
    }

    async fn tweet_update(&self, id: i32, input: TweetUpdateInput) -> Result<Tweet, anyhow::Error> {
        TweetController::new().update(id, input)
    }

    async fn tweet_delete(&self, id: i32) -> Result<usize, anyhow::Error> {
        TweetController::new().delete(id)
    }
}
