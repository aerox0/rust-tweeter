use crate::{
    modules::{
        auth::{jwt_service::JwtService, AuthInput, AuthOutput, Claims},
        user::{UserInput, UserModel},
    },
    schema::users,
    utils::{database::Database, random},
};
use anyhow::anyhow;
use diesel::{ExpressionMethods, QueryDsl, RunQueryDsl};

pub struct AuthController;

impl AuthController {
    pub async fn me(user_id: i32) -> Result<UserModel, anyhow::Error> {
        let mut conn = Database::new().get_conn();

        let result = users::table.find(user_id).first::<UserModel>(&mut conn)?;

        Ok(result)
    }

    pub async fn refresh_token(refresh_token: String) -> Result<AuthOutput, anyhow::Error> {
        let mut conn = Database::new().get_conn();

        let claims =
            JwtService::validate(refresh_token, "REFRESH").ok_or(anyhow!("Unauthorized"))?;

        let user: UserModel = users::table
            .find(claims.sub.parse::<i32>()?)
            .first(&mut conn)?;

        let claims = Claims {
            sub: user.id.to_string(),
            exp: 0,
        };

        let response = AuthOutput {
            access_token: JwtService::encode(claims.clone(), "ACCESS", 60)?,
            refresh_token: JwtService::encode(claims.clone(), "REFRESH", 60 * 60 * 24 * 7)?,
        };

        Ok(response)
    }

    pub async fn login(input: AuthInput) -> Result<AuthOutput, anyhow::Error> {
        let mut conn = Database::new().get_conn();

        let user = users::table
            .filter(users::username.eq(input.username))
            .first::<UserModel>(&mut conn)?;

        let _ = argon2::verify_encoded(&user.password, input.password.as_bytes())?;

        let claims = Claims {
            sub: user.id.to_string(),
            exp: 0,
        };

        let response = AuthOutput {
            access_token: JwtService::encode(claims.clone(), "ACCESS", 60)?,
            refresh_token: JwtService::encode(claims.clone(), "REFRESH", 60 * 60 * 24 * 7)?,
        };

        Ok(response)
    }

    pub async fn register(mut input: UserInput) -> Result<UserModel, anyhow::Error> {
        let mut conn = Database::new().get_conn();

        input.password = argon2::hash_encoded(
            input.password.as_bytes(),
            random::salt().as_bytes(),
            &argon2::Config::default(),
        )?;

        let result = diesel::insert_into(users::table)
            .values(input)
            .get_result::<UserModel>(&mut conn)?;

        Ok(result)
    }
}
