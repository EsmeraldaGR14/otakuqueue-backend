\c otakuqueue_dev

INSERT INTO anime_list (title, description, genre, release_date, rating)
VALUES
    ('My Hero Academia', 'A story of young heroes in a world of superpowers.', 'Action, Adventure', '2016-04-03', 8.7),
    ('Attack on Titan', 'Humans face extinction due to giant humanoid creatures.', 'Action, Drama, Fantasy', '2013-04-06', 9.0),
    ('One Piece', 'Follow the adventures of pirates in search of the ultimate treasure.', 'Action, Adventure, Comedy', '1999-10-20', 8.5), 
    ('Naruto', 'A young ninja seeks recognition and dreams of becoming the Hokage.', 'Action, Adventure', '2002-10-03', 8.3),
    ('Death Note', 'A high school student discovers a notebook with deadly powers.', 'Mystery, Psychological, Supernatural', '2006-10-04', 9.0),
    ('Fullmetal Alchemist: Brotherhood', 'Two brothers use alchemy in their quest for the Philosopher''s Stone.', 'Action, Adventure, Drama', '2009-04-05', 9.1),
    ('Demon Slayer', 'A young boy joins a demon slayer corps to avenge his family.', 'Action, Supernatural', '2019-04-06', 8.7),
    ('Hunter x Hunter', 'A young boy aspires to become a legendary Hunter.', 'Action, Adventure', '2011-10-02', 9.1),
    ('One Punch Man', 'A hero becomes bored after defeating his opponents with a single punch.', 'Action, Comedy, Superhero', '2015-10-05', 8.8),
    ('Tokyo Ghoul', 'A college student turns into a half-ghoul after a chance encounter with one.', 'Action, Horror, Supernatural', '2014-07-04', 8.0),
    ('Steins;Gate', 'A group of friends accidentally create a time machine and face consequences.', 'Sci-Fi, Thriller', '2011-04-06', 9.0),
    ('Sword Art Online', 'Players get trapped in a virtual reality MMORPG with real-life consequences.', 'Action, Adventure, Fantasy', '2012-07-08', 7.6),
    ('Cowboy Bebop', 'Bounty hunters travel through space in pursuit of criminals.', 'Action, Sci-Fi', '1998-04-03', 8.9),
    ('Dragon Ball Z', 'Goku and his friends defend Earth against powerful foes and creatures.', 'Action, Adventure, Martial Arts', '1989-04-26', 8.7),
    ('Fairy Tail', 'A group of wizards form a guild and take on various magical missions.', 'Action, Adventure, Fantasy', '2009-10-12', 8.0),
    ('Neon Genesis Evangelion', 'Teenagers pilot giant mechs to protect humanity from mysterious beings.', 'Action, Drama, Mecha', '1995-10-04', 8.5),
    ('JoJo''s Bizarre Adventure', 'Different generations of the Joestar family face supernatural threats.', 'Action, Adventure, Supernatural', '2012-10-06', 8.6),
    ('My Youth Romantic Comedy Is Wrong, As I Expected', 'A student with a cynical view of society joins a service club.', 'Comedy, Drama, Romance', '2013-04-05', 8.1),
    ('Black Clover', 'A boy born without magic aims to become the Wizard King.', 'Action, Adventure, Magic', '2017-10-03', 7.4),
    ('Mob Psycho 100', 'A psychic boy tries to lead a normal life while battling evil spirits.', 'Action, Comedy, Supernatural', '2016-07-12', 8.5),
    ('Haikyuu!!', 'A high school student joins the volleyball team to compete at the national level.', 'Comedy, Drama, Sports', '2014-04-06', 8.8),
    ('No Game No Life', 'Siblings get transported to a world where conflicts are resolved through games.', 'Adventure, Comedy, Fantasy', '2014-04-09', 7.9),
    ('Kimi no Na wa (Your Name)', 'Two strangers mysteriously swap bodies and seek each other out.', 'Drama, Fantasy, Romance', '2016-08-26', 8.4),
    ('Code Geass', 'A young man uses his tactical genius to overthrow an oppressive regime.', 'Action, Drama, Mecha', '2006-10-06', 8.9),
    ('Vinland Saga', 'A Viking seeks vengeance amidst the backdrop of war and exploration.', 'Action, Adventure, Drama', '2019-07-07', 8.7),
    ('Fullmetal Alchemist', 'Two brothers embark on a journey to restore their bodies using alchemy.', 'Action, Adventure, Drama', '2003-10-04', 8.8),
    ('Re:Zero − Starting Life in Another World', 'A young man finds himself in a fantasy world with the power to reverse time.', 'Drama, Fantasy, Psychological', '2016-04-04', 8.1),
    ('The Promised Neverland', 'Children discover a sinister truth about their idyllic orphanage.', 'Mystery, Horror, Thriller', '2019-01-09', 8.6),
    ('March Comes in Like a Lion', 'A shogi player finds solace and growth through personal connections.', 'Drama, Slice of Life', '2016-10-08', 8.7),
    ('Your Lie in April', 'A young pianist discovers renewed purpose through music and love.', 'Drama, Music, Romance', '2014-10-10', 8.8),
    ('Death Parade', 'Deceased souls face judgment in a bar where their fates are decided.', 'Drama, Game, Mystery', '2015-01-10', 7.9),
    ('Made in Abyss', 'An orphaned girl delves into the depths of a mysterious abyss.', 'Adventure, Drama, Fantasy', '2017-07-07', 8.9),
    ('Promare', 'Firefighters battle mutant beings causing fiery chaos.', 'Action, Sci-Fi', '2019-05-24', 7.2),
    ('Paranoia Agent', 'A detective investigates a series of attacks linked to an elusive assailant.', 'Drama, Mystery, Psychological', '2004-02-02', 7.9),
    ('Mushishi', 'A wandering traveler deals with supernatural creatures and phenomena.', 'Adventure, Fantasy, Mystery', '2005-10-23', 8.7),
    ('A Silent Voice', 'A former bully seeks redemption and connection with a deaf girl.', 'Drama, Romance, Slice of Life', '2016-09-17', 8.2);



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

