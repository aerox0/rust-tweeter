use async_graphql::{InputObject, SimpleObject};
use chrono::NaiveDateTime;
use diesel::{Insertable, Queryable};
use serde::{Deserialize, Serialize};

use crate::schema::users;

#[derive(Queryable, Serialize, SimpleObject)]
#[diesel(table_name = users)]
pub struct UserModel {
    pub id: i32,
    pub image_url: Option<String>,
    pub name: String,
    pub email: Option<String>,
    #[graphql(skip)]
    #[serde(skip)]
    pub password: String,
    #[graphql(skip)]
    #[serde(skip)]
    pub verified: Option<NaiveDateTime>,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

#[derive(Insertable, InputObject, Deserialize)]
#[diesel(table_name = users)]
pub struct UserInput {
    pub image_url: Option<String>,
    pub name: String,
    pub password: String,
    pub verified: Option<NaiveDateTime>,
}
