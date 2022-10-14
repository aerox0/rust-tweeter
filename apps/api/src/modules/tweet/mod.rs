use async_graphql::{InputObject, SimpleObject};
use chrono::NaiveDateTime;
use diesel::{Insertable, Queryable};
use serde::{Deserialize, Serialize};

use crate::schema::tweets;

#[derive(Queryable, Serialize, SimpleObject)]
#[diesel(table_name = tweets)]
pub struct TweetModel {
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
