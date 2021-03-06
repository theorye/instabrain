const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// Controllers
const loginUser = require("./controllers/loginUser");
const createUser = require("./controllers/createUser");
const getUser = require("./controllers/getUser");
const refreshToken = require("./controllers/refreshToken");
const getProfile = require("./controllers/getProfile");
const getUsers = require("./controllers/getUsers");
const followUser = require("./controllers/followUser");
const getPosts = require("./controllers/getPosts");
const getPost = require("./controllers/getPost");
const getFeed = require("./controllers/getFeed");
const unfollowUser = require("./controllers/unfollowUser");

// App Middleware
const loggerMiddleware = require("./middleware/logger");

// Route Middleware
const authenticateToken = require("./middleware/authenticateToken");
const extractUserFromToken = require("./middleware/extractUserFromToken");

// Validation Middleware
// const validate = require("./middleware/validate");
// const loginRules = require("./validation/loginRules");

const app = express();

// parse various different custom JSON types as JSON
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.use(helmet());
app.use(cors("*"));
app.use(loggerMiddleware);

// Routes

app.post("/api/accounts/login", loginUser);
app.post("/api/accounts/register", createUser);
app.post("/api/accounts/follow", authenticateToken, followUser);
app.delete("/api/accounts/follow/:followee", authenticateToken, unfollowUser);
app.get("/api/posts", authenticateToken, getPosts);
app.post("/api/token", refreshToken);
app.get("/api/user", authenticateToken, getUser);
app.get("/api/users", getUsers);
app.get("/api/profiles", extractUserFromToken, getProfile);
app.get("/api/post", getPost);

app.get("/api/feed", authenticateToken, getFeed);

module.exports = app;
