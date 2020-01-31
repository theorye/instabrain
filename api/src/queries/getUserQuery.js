module.exports = username => `      
SELECT 
    u.username, 
    u.id, 
    (
        SELECT COUNT(*) 
        FROM instabrain.follows f 
        WHERE f.follower = u.id
    ) following
FROM instabrain.users u
WHERE u.username = '${username}'
LIMIT 1; 
`;
