use async_graphql::{InputObject, SimpleObject};
use chrono::NaiveDateTime;
use diesel::{Insertable, Queryable};
use serde::Serialize;

use crate::schema::users;

#[derive(Queryable, Serialize, SimpleObject)]
#[diesel(table_name = users)]
pub struct UserModel {
    id: i32,
    image_url: Option<String>,
    name: String,
    email: Option<String>,
    #[graphql(skip)]
    #[serde(skip)]
    password: String,
    #[graphql(skip)]
    #[serde(skip)]
    verified: Option<NaiveDateTime>,
    created_at: NaiveDateTime,
    updated_at: NaiveDateTime,
}

#[derive(Insertable, InputObject)]
#[diesel(table_name = users)]
pub struct UserInput {
    image_url: Option<String>,
    name: String,
    password: String,
    verified: Option<NaiveDateTime>,
}
