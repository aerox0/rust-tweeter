-- Your SQL goes here
create table tweets (
	id serial primary key,
	user_id integer not null references users (id),
	content text not null,
	schedule timestamp,
	created_at timestamp not null default current_timestamp,
	updated_at timestamp not null default current_timestamp
);

select diesel_manage_updated_at('tweets');