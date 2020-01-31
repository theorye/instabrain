module.exports = username => `      
SELECT p.url, p.id, p.created_on
FROM instabrain.posts p
INNER JOIN instabrain.users u ON p.user_id = u.id
WHERE u.username = '${username}';
`;
