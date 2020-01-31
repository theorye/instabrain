const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// Controllers
const loginUser = require("./controllers/loginUser");
const createUser = require("./controllers/createUser");
const getUser = require("./controllers/getUser");
const refreshToken = require("./controllers/refreshToken");
const getProfile = require("./controllers/getProfile");
const getUsers = require('./controllers/getUsers');
const followUser = require('./controllers/followUser');
const getPosts = require('./controllers/getPosts');
const getPost = require('./controllers/getPost');

// App Middleware
const loggerMiddleware = require("./middleware/logger");

// Route Middleware
const authenticateToken = require("./middleware/authenticateToken");

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
app.get("/api/posts", authenticateToken, getPosts);
app.post("/api/token", refreshToken);
app.get("/api/user", authenticateToken, getUser);
app.get("/api/users", getUsers);
app.get("/api/profiles", getProfile);
app.get("/api/post", getPost);

module.exports = app;
