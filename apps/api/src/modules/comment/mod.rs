use super::user::User;
use async_graphql::{InputObject, SimpleObject};
use chrono::NaiveDateTime;
use diesel::{Associations, Identifiable, Insertable, Queryable};
use serde::{Deserialize, Serialize};

use crate::schema::comments;

#[derive(Queryable, Serialize, Identifiable, Associations, SimpleObject)]
#[diesel(table_name = comments)]
#[diesel(belongs_to(User))]
pub struct Comment {
    pub id: i32,
    pub user_id: i32,
    pub content: String,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

#[derive(Insertable, InputObject, Deserialize)]
#[diesel(table_name = comments)]
pub struct CommentInput {
    pub user_id: i32,
    pub content: String,
}
