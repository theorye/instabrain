module.exports = (limit = 4) => `      
SELECT u.username, u.name, u.avatar, u.id
FROM instabrain.users u
ORDER BY RAND()
LIMIT ${limit};
`;
