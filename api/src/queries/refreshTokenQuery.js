module.exports = token => `  
INSERT INTO instabrain.refresh (token)
VALUES ('${token}');
`;
