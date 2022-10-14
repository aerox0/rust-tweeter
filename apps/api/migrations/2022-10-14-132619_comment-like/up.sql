-- Your SQL goes here
create table comment_likes (
	comment_id integer not null references comments (id),
	tweet_id integer not null references tweets (id),
	created_at timestamp not null default current_timestamp,
	primary key (comment_id, tweet_id)
);