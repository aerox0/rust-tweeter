use diesel::RunQueryDsl;

use crate::{
    modules::common::service::ListService,
    schema::users,
    utils::{database::PooledDb, random},
};

use super::{User, UserInput};

pub struct UserService;

impl UserService {
    pub fn create(mut input: UserInput, mut conn: PooledDb) -> Result<User, anyhow::Error> {
        input.password = argon2::hash_encoded(
            input.password.as_bytes(),
            random::salt().as_bytes(),
            &argon2::Config::default(),
        )?;

        let result = diesel::insert_into(users::table)
            .values(input)
            .get_result::<User>(&mut conn)?;

        Ok(result)
    }
}

impl ListService<users::table, User> for UserService {}
