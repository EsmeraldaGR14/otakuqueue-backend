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

-- the purpose of this table is so that the user is able to store the animes they have selected
CREATE TABLE user_watchlist (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    anime_id INT REFERENCES anime_list(id),
    status ENUM ('watching', 'want_to_watch', 'watched'), -- Define ENUM directly
    current_episode INT
);

-- the purpose of this table is so that there are users, this allows for a more personlised website
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    user_watchlist_id INT REFERENCES user_watchlist(id)
);
