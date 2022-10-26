use crate::{
    modules::{
        common::service::ListService,
        user::{service::UserService, User},
    },
    utils::database::{Database, PooledDb},
};

pub struct UserController {
    conn: PooledDb,
}

impl UserController {
    pub fn new() -> Self {
        Self {
            conn: Database::new().get_conn(),
        }
    }

    pub fn list(self) -> Result<Vec<User>, anyhow::Error> {
        Ok(UserService::list(self.conn)?)
    }
}
