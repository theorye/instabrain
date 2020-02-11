module.exports = (username, userId=null) => `
SELECT u.avatar, u.username, u.id
FROM instabrain.users u
WHERE u.username = '${username}';    
SELECT 
    p.url, 
    p.id, 
    p.created_on
FROM instabrain.posts p
INNER JOIN instabrain.users u ON p.user_id = u.id
WHERE u.username = '${username}';
SELECT 
    EXISTS(
        SELECT 1 
        FROM instabrain.follows f 
        WHERE f.follower = "${userId}"
        AND f.followee = (SELECT id FROM instabrain.users u WHERE u.username="${username}")
    ) as following
LIMIT 1;
`;
