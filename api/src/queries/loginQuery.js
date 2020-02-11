module.exports = username => `
SELECT 
  l.hash, 
  l.id, 
  u.username,
  u.name,
  (
    SELECT COUNT(*) 
    FROM instabrain.follows f 
    WHERE f.follower = u.id
  ) following
FROM instabrain.login l
RIGHT JOIN instabrain.users u ON l.id = u.id
WHERE l.id = (
  SELECT su.id 
  FROM instabrain.users su 
  WHERE su.username = '${username}' OR su.email = '${username}'
);
`;
