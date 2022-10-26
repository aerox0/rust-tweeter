use crate::modules::common::service::{CreateService, DeleteService, ListService, UpdateService};
use crate::modules::tweet::{service::TweetService, Tweet};
use crate::modules::tweet::{TweetInput, TweetUpdateInput};
use crate::utils::database::Database;

pub struct TweetController {}

impl TweetController {
    pub fn list() -> Result<Vec<Tweet>, anyhow::Error> {
        Ok(TweetService::list(Database::new().get_conn())?)
    }

    pub fn create(input: TweetInput) -> Result<Tweet, anyhow::Error> {
        Ok(TweetService::create(input, Database::new().get_conn())?)
    }

    pub fn update(id: i32, input: TweetUpdateInput) -> Result<Tweet, anyhow::Error> {
        Ok(TweetService::update(id, input, Database::new().get_conn())?)
    }

    pub fn delete(id: i32) -> Result<usize, anyhow::Error> {
        Ok(TweetService::delete(id, Database::new().get_conn())?)
    }
}
