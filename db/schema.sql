drop database if exists merx_db;
create database merx_db;

use merx_db;

create table Users (
    id int auto_increment primary key,
    username varchar(50) not null,
    tag varchar(4) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    createdAt datetime,
    updatedAt datetime,

    unique (`username`, `tag`)
);

create table Runs (
    id int auto_increment primary key,
    user_id int not null,
    game varchar(255),
    category varchar(255),
    time_ms int,
    date_completed datetime,
    createdAt datetime,
    updatedAt datetime,

    foreign key (`user_id`)
        references `Users`(`id`)
        on delete cascade
);
