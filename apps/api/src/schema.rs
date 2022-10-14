// @generated automatically by Diesel CLI.

diesel::table! {
    comment_likes (comment_id, tweet_id) {
        comment_id -> Int4,
        tweet_id -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    comments (id) {
        id -> Int4,
        user_id -> Int4,
        tweet_id -> Int4,
        content -> Text,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

diesel::table! {
    seaql_migrations (version) {
        version -> Varchar,
        applied_at -> Int8,
    }
}

diesel::table! {
    tweet_likes (user_id, tweet_id) {
        user_id -> Int4,
        tweet_id -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    tweets (id) {
        id -> Int4,
        user_id -> Int4,
        content -> Text,
        schedule -> Nullable<Timestamp>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

diesel::table! {
    users (id) {
        id -> Int4,
        image_url -> Nullable<Varchar>,
        name -> Varchar,
        username -> Varchar,
        email -> Nullable<Varchar>,
        password -> Text,
        verified -> Nullable<Timestamp>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

diesel::joinable!(comment_likes -> comments (comment_id));
diesel::joinable!(comment_likes -> tweets (tweet_id));
diesel::joinable!(comments -> tweets (tweet_id));
diesel::joinable!(comments -> users (user_id));
diesel::joinable!(tweet_likes -> tweets (tweet_id));
diesel::joinable!(tweet_likes -> users (user_id));
diesel::joinable!(tweets -> users (user_id));

diesel::allow_tables_to_appear_in_same_query!(
    comment_likes,
    comments,
    seaql_migrations,
    tweet_likes,
    tweets,
    users,
);
