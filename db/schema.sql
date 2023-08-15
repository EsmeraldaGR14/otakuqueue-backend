DROP DATABASE IF EXISTS otakuqueue_dev;

CREATE DATABASE otakuqueue_dev;

\c otakuqueue_dev;

CREATE TABLE anime_list (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    genre VARCHAR(50),
    watched BOOLEAN,
    release_date DATE,
    rating DECIMAL(3, 1),
    current_episode INT
);