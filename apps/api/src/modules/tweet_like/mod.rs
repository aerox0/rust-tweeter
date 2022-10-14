use super::tweet::Tweet;
use super::user::User;
use async_graphql::{InputObject, SimpleObject};
use chrono::NaiveDateTime;
use diesel::{Associations, Insertable, Queryable};
use serde::{Deserialize, Serialize};

use crate::schema::tweet_likes;

#[derive(Queryable, Serialize, Associations, SimpleObject)]
#[diesel(table_name = tweet_likes)]
#[diesel(belongs_to(User))]
#[diesel(belongs_to(Tweet))]
pub struct TweetLike {
    pub user_id: i32,
    pub tweet_id: i32,
    pub created_at: NaiveDateTime,
}

#[derive(Insertable, Deserialize, InputObject)]
#[diesel(table_name = tweet_likes)]
pub struct TweetLikeInput {
    pub user_id: i32,
    pub tweet_id: i32,
}
