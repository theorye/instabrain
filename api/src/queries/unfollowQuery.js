module.exports = (follower, followee) => ` 
DELETE 
FROM instabrain.follows
WHERE instabrain.follows.follower='${follower}' AND instabrain.follows.followee='${followee}';
`;
