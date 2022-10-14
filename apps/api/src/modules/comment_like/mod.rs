use super::comment::Comment;
use super::tweet::Tweet;
use async_graphql::{InputObject, SimpleObject};
use chrono::NaiveDateTime;
use diesel::{Associations, Insertable, Queryable};
use serde::{Deserialize, Serialize};

use crate::schema::comment_likes;

#[derive(Queryable, Serialize, Associations, SimpleObject)]
#[diesel(table_name = comment_likes)]
#[diesel(belongs_to(Tweet))]
#[diesel(belongs_to(Comment))]
pub struct CommentLike {
    pub tweet_id: i32,
    pub comment_id: i32,
    pub created_at: NaiveDateTime,
}

#[derive(Insertable, Deserialize, InputObject)]
#[diesel(table_name = comment_likes)]
pub struct CommentLikeInput {
    pub tweet_id: i32,
    pub comment_id: i32,
}
