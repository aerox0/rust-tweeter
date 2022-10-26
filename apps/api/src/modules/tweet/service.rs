use crate::modules::common::service::CreateService;
use crate::modules::common::service::DeleteService;
use crate::modules::common::service::ListService;
use crate::modules::common::service::UpdateService;
use crate::schema::tweets;

use super::TweetUpdateInput;
use super::{Tweet, TweetInput};

pub struct TweetService {}

impl ListService<tweets::table, Tweet> for TweetService {}

impl CreateService<tweets::table, TweetInput, Tweet> for TweetService {}

impl UpdateService<tweets::table, TweetUpdateInput, Tweet> for TweetService {}

impl DeleteService<tweets::table> for TweetService {}
