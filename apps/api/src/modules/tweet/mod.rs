pub mod service;

use super::user::User;
use async_graphql::{InputObject, SimpleObject};
use chrono::NaiveDateTime;
use diesel::{AsChangeset, Associations, Identifiable, Insertable, Queryable};
use serde::{Deserialize, Serialize};

use crate::schema::tweets;

#[derive(Queryable, Serialize, Associations, Identifiable, SimpleObject)]
#[diesel(table_name = tweets)]
#[diesel(belongs_to(User))]
pub struct Tweet {
    pub id: i32,
    pub user_id: i32,
    pub content: String,
    pub schedlue: Option<NaiveDateTime>,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

#[derive(Insertable, InputObject, Deserialize)]
#[diesel(table_name = tweets)]
pub struct TweetInput {
    pub user_id: i32,
    pub content: String,
    pub schedule: Option<NaiveDateTime>,
}

#[derive(AsChangeset, InputObject)]
#[diesel(table_name = tweets)]
pub struct TweetUpdateInput {
    pub user_id: i32,
    pub content: String,
    pub schedule: Option<NaiveDateTime>,
}
