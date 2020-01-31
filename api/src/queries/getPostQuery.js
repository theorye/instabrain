module.exports = id => ` 
SELECT 
u.id as userId,
u.username,
u.avatar,
p.id,
p.url,
p.created_on
FROM instabrain.posts p 

INNER JOIN instabrain.users u ON p.user_id = u.id 
WHERE p.id = '${id}';
`;
