use async_graphql::MergedObject;

use super::queries::{hello::HelloQuery, tweet::TweetQuery, user::UserQuery};

#[derive(MergedObject, Default)]
pub struct QueryRoot(HelloQuery, TweetQuery, UserQuery);
