module.exports = (username, email, fullname, hash) => `      
START TRANSACTION;

SET @USERNAME = '${username}';

INSERT INTO users (id, username, email, name) 
VALUES (UUID(), @USERNAME, '${email}', '${fullname}');

INSERT INTO login (id, hash) 
VALUES (
  ( SELECT id FROM users WHERE username=@USERNAME), '${hash}'
);
COMMIT;

SELECT u.id, u.username, (
  SELECT COUNT(*) 
  FROM instabrain.follows f 
  WHERE f.follower = u.id
) following
FROM users u
  WHERE username=@USERNAME LIMIT 1;
`;
