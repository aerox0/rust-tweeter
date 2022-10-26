use crate::modules::common::service::{CreateService, DeleteService, ListService, UpdateService};
use crate::modules::tweet::{service::TweetService, Tweet};
use crate::modules::tweet::{TweetInput, TweetUpdateInput};
use crate::utils::database::{Database, PooledDb};

pub struct TweetController {
    conn: PooledDb,
}

impl TweetController {
    pub fn new() -> Self {
        Self {
            conn: Database::new().get_conn(),
        }
    }
}

impl TweetController {
    pub fn list(self) -> Result<Vec<Tweet>, anyhow::Error> {
        Ok(TweetService::list(self.conn)?)
    }

    pub fn create(self, input: TweetInput) -> Result<Tweet, anyhow::Error> {
        Ok(TweetService::create(input, self.conn)?)
    }

    pub fn update(self, id: i32, input: TweetUpdateInput) -> Result<Tweet, anyhow::Error> {
        Ok(TweetService::update(id, input, self.conn)?)
    }

    pub fn delete(self, id: i32) -> Result<usize, anyhow::Error> {
        Ok(TweetService::delete(id, self.conn)?)
    }
}
