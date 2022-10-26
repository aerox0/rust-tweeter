use async_graphql::Object;

use crate::{controllers::user::UserController, modules::user::User};

#[derive(Default)]
pub struct UserQuery;

#[Object]
impl UserQuery {
    async fn user_list(&self) -> Result<Vec<User>, anyhow::Error> {
        UserController::new().list()
    }
}
