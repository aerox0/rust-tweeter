-- Your SQL goes here
create table tweet_likes (
	user_id integer not null references users (id),
	tweet_id integer not null references tweets (id),
	created_at timestamp not null default current_timestamp,
	primary key (user_id, tweet_id)
);
