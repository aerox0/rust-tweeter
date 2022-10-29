use async_graphql::MergedObject;

use super::mutations::tweet::TweetMutation;

#[derive(MergedObject, Default)]
pub struct MutationRoot(TweetMutation);
