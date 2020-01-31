module.exports = id => ` 
SELECT 
u.id as userId,
u.username,
u.avatar,
p.id,
p.url,
p.created_on
FROM instabrain.follows f 
INNER JOIN instabrain.posts p ON f.followee = p.user_id AND f.follower = '${id}'
INNER JOIN instabrain.users u ON f.followee = u.id;

`;
