use crate::{
    modules::{
        auth::{jwt_service::JwtService, AuthInput, AuthOutput, Claims},
        user::{service::UserService, User, UserInput},
    },
    schema::users,
    utils::database::{Database, PooledDb},
};
use anyhow::anyhow;
use diesel::{ExpressionMethods, QueryDsl, RunQueryDsl};

pub struct AuthController {
    conn: PooledDb,
}

impl AuthController {
    pub fn new() -> Self {
        Self {
            conn: Database::new().get_conn(),
        }
    }

    pub async fn me(mut self, user_id: i32) -> Result<User, anyhow::Error> {
        let result = users::table.find(user_id).first::<User>(&mut self.conn)?;
        Ok(result)
    }

    pub async fn refresh_token(
        mut self,
        refresh_token: String,
    ) -> Result<AuthOutput, anyhow::Error> {
        let claims = JwtService::validate(refresh_token, "REFRESH")
            .ok_or_else(|| anyhow!("Unauthorized"))?;

        let user: User = users::table
            .find(claims.sub.parse::<i32>()?)
            .first(&mut self.conn)?;

        let claims = Claims {
            sub: user.id.to_string(),
            exp: 0,
        };

        let response = AuthOutput {
            access_token: JwtService::encode(claims.clone(), "ACCESS", 60)?,
            refresh_token: JwtService::encode(claims, "REFRESH", 60 * 60 * 24 * 7)?,
        };

        Ok(response)
    }

    pub async fn login(mut self, input: AuthInput) -> Result<AuthOutput, anyhow::Error> {
        let user = users::table
            .filter(users::username.eq(input.username))
            .first::<User>(&mut self.conn)?;

        let _ = argon2::verify_encoded(&user.password, input.password.as_bytes())?;

        let claims = Claims {
            sub: user.id.to_string(),
            exp: 0,
        };

        let response = AuthOutput {
            access_token: JwtService::encode(claims.clone(), "ACCESS", 60)?,
            refresh_token: JwtService::encode(claims, "REFRESH", 60 * 60 * 24 * 7)?,
        };

        Ok(response)
    }

    pub async fn register(self, input: UserInput) -> Result<User, anyhow::Error> {
        Ok(UserService::create(input, self.conn)?)
    }
}
