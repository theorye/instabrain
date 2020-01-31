module.exports = (adminPassword, easyPass) => `
START TRANSACTION;

DROP DATABASE IF EXISTS instabrain;

CREATE DATABASE IF NOT EXISTS instabrain;

CREATE TABLE IF NOT EXISTS instabrain.users(
    id VARCHAR(36) PRIMARY KEY,
    username VARCHAR(40) NOT NULL UNIQUE,
    name VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL UNIQUE,
    created TIMESTAMP DEFAULT now(),
    introduction TEXT,
    avatar TEXT,
    posts INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS instabrain.follows(
    followee VARCHAR(36) NOT NULL REFERENCES instabrain.user(id),
    follower VARCHAR(36) NOT NULL REFERENCES instabrain.user(id),
    PRIMARY KEY (followee, follower)
);

CREATE TABLE IF NOT EXISTS instabrain.login (
    hash varchar(100) NOT NULL,
    id varchar(36) PRIMARY KEY,
    FOREIGN KEY (id) REFERENCES instabrain.users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS instabrain.refresh (
    token varchar(200) NOT NULL PRIMARY KEY     
);
  
CREATE TABLE IF NOT EXISTS instabrain.posts (
    id VARCHAR(36) PRIMARY KEY,
    url TEXT NOT NULL,
    created_on TIMESTAMP DEFAULT now(),
    user_id VARCHAR(36) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES instabrain.users(id) ON DELETE CASCADE
);

INSERT INTO instabrain.users (id, username, email, name) VALUES (UUID(), 'a', 'l3m@outlook.com', 'adrian');
INSERT INTO instabrain.login (id, hash) VALUES ((SELECT id from instabrain.users WHERE username='a'), '${easyPass}');

INSERT INTO instabrain.users (id, username, email, name) VALUES (UUID(), 'admin', 'limitx3m@outlook.com', 'adrian');
INSERT INTO instabrain.login (id, hash) VALUES ((SELECT id from instabrain.users WHERE username='admin'), '${adminPassword}');
INSERT INTO instabrain.posts (id, url, user_id) VALUES (UUID(), 'https://cdn.vox-cdn.com/thumbor/1ck1fQL62j2GaDvOlnJu4fyuIIc=/0x0:3049x2048/1200x800/filters:focal(1333x1562:1819x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/63058104/fake_ai_faces.0.png', (SELECT id from instabrain.users WHERE username='a'));
INSERT INTO instabrain.posts (id, url, user_id) VALUES (UUID(), 'https://i.redd.it/5vt16yjvh7011.jpg', (SELECT id from instabrain.users WHERE username='a'));
INSERT INTO instabrain.posts (id, url, user_id) VALUES (UUID(), 'https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg', (SELECT id from instabrain.users WHERE username='a'));
INSERT INTO instabrain.posts (id, url, user_id) VALUES (UUID(), 'https://i.pinimg.com/736x/4b/21/02/4b210226978f8832f3fd048d60465253.jpg', (SELECT id from instabrain.users WHERE username='a'));
INSERT INTO instabrain.posts (id, url, user_id) VALUES (UUID(), 'https://miro.medium.com/max/3780/1*dhXsTa5zOVk79AowpMHKbg.png', (SELECT id from instabrain.users WHERE username='a'));
INSERT INTO instabrain.posts (id, url, user_id) VALUES (UUID(), 'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop', (SELECT id from instabrain.users WHERE username='a'));
INSERT INTO instabrain.posts (id, url, user_id) VALUES (UUID(), 'https://www.picclickimg.com/d/l400/pict/223277265548_/Megan-Rain-Poster-Hot-Star-Bikini-Print-Sexy.jpg', (SELECT id from instabrain.users WHERE username='a'));



COMMIT;
`;
