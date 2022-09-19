use std::{convert::TryInto, env};

use chrono::{Duration, Utc};
use jsonwebtoken::{
    errors::Error, Algorithm, DecodingKey, EncodingKey, Header, TokenData, Validation,
};

use super::Claims;

pub struct Jwt;

impl Jwt {
    pub fn validate(token: String, token_type: &str) -> Option<Claims> {
        let now = Utc::now().timestamp().try_into().unwrap_or(0);

        let decode = match Self::decode(token, token_type) {
            Ok(d) => d,
            Err(_) => return None,
        };

        if now > decode.claims.exp {
            return None;
        };

        Some(decode.claims)
    }

    pub fn encode(mut claims: Claims, token_type: &str, seconds: i64) -> Result<String, Error> {
        let secret = env::var(format!("JWT_{}_SECRET", token_type)).unwrap();

        let exp = Utc::now()
            .checked_add_signed(Duration::seconds(seconds))
            .unwrap()
            .timestamp();

        claims.exp = exp.try_into().unwrap();

        let token = jsonwebtoken::encode(
            &Header::new(Algorithm::HS512),
            &claims,
            &EncodingKey::from_secret(secret.as_ref()),
        );

        token
    }

    pub fn decode(token: String, token_type: &str) -> Result<TokenData<Claims>, Error> {
        let secret = env::var(format!("JWT_{}_SECRET", token_type)).unwrap();

        jsonwebtoken::decode::<Claims>(
            &token,
            &DecodingKey::from_secret(secret.as_ref()),
            &Validation::new(Algorithm::HS512),
        )
    }
}
