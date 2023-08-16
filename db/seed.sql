\c otakuqueue_dev

INSERT INTO anime_list (title, description, genre, release_date, rating)
VALUES
    ('My Hero Academia', 'A story of young heroes in a world of superpowers.', 'Action, Adventure', '2016-04-03', 8.7),
    ('Attack on Titan', 'Humans face extinction due to giant humanoid creatures.', 'Action, Drama, Fantasy', '2013-04-06', 9.0),
    ('One Piece', 'Follow the adventures of pirates in search of the ultimate treasure.', 'Action, Adventure, Comedy', '1999-10-20', 8.5);

    INSERT INTO users (username)
VALUES
    ('Luffy'),
    ('Nami'),
    ('Zoro');


INSERT INTO user_watchlist (user_id, anime_id, status, current_episode, is_favorite)
VALUES
    (1, 2, 'watching', 4, true),
    (1, 3, 'watching', 8, false),
    (2, 1, 'want_to_watch', NULL, true);

