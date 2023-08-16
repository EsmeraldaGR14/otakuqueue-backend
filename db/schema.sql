DROP DATABASE IF EXISTS otakuqueue_dev;

CREATE DATABASE otakuqueue_dev;

\c otakuqueue_dev;

-- purpose of this table is to store all animes so that the user can create or select their desired anime
CREATE TABLE anime_list (
    id SERIAL PRIMARY KEY,
    title VARCHAR(300) NOT NULL,
    description TEXT,
    genre VARCHAR(50),
    release_date DATE,
    rating DECIMAL(3, 1)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL
);

-- the purpose of this table is so that the user is able to store the animes they have selected
CREATE TABLE user_watchlist (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    anime_id INT REFERENCES anime_list(id) ON DELETE CASCADE,
    status VARCHAR(20) CHECK (status IN ('watching', 'want_to_watch', 'watched')),
    current_episode INT,
    is_favorite BOOLEAN
);

-- the purpose of this table is so that there are users, this allows for a more personlised website

