-- Your SQL goes here
create table comments (
	id serial primary key,
	user_id integer not null references users (id),
	tweet_id integer not null references tweets (id),
	content text not null,
	created_at timestamp not null default current_timestamp,
	updated_at timestamp not null default current_timestamp
);

select diesel_manage_updated_at('comments');