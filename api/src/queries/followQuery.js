module.exports = (follower, followee) => ` 
START TRANSACTION;

INSERT INTO instabrain.follows (follower, followee)
VALUES ('${follower}', '${followee}');

COMMIT;
`;
