module.exports = (id, pLimit, sLimit) => ` 
SELECT u.username, u.name, u.avatar, u.id
FROM instabrain.users u
WHERE u.id
NOT IN (
    SELECT f.followee 
    FROM instabrain.follows f
    WHERE f.follower = '${id}'
)
AND u.id <> '${id}'
ORDER BY RAND()
LIMIT ${sLimit};

SELECT 
u.id as userId,
u.username,
u.avatar,
p.id,
p.url,
p.created_on
FROM instabrain.follows f 
INNER JOIN instabrain.posts p ON f.followee = p.user_id AND f.follower = '${id}'
INNER JOIN instabrain.users u ON f.followee = u.id
LIMIT ${pLimit};
`;


