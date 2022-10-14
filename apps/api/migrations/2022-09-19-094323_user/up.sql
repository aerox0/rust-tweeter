-- Your SQL goes here
create table users (
	id serial primary key,
	image_url varchar(256),
	name varchar(256) not null unique,
	username varchar(256) not null unique,
	email varchar(256) unique,
	password text not null,
	verified timestamp,
	created_at timestamp not null default current_timestamp,
	updated_at timestamp not null default current_timestamp
);

select diesel_manage_updated_at('users');