// @generated automatically by Diesel CLI.

diesel::table! {
    seaql_migrations (version) {
        version -> Varchar,
        applied_at -> Int8,
    }
}

diesel::table! {
    users (id) {
        id -> Int4,
        image_url -> Nullable<Varchar>,
        name -> Varchar,
        email -> Nullable<Varchar>,
        password -> Text,
        verified -> Nullable<Timestamp>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

diesel::allow_tables_to_appear_in_same_query!(seaql_migrations, users,);
