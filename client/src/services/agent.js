import axios from "axios";
import { localStorageService } from "../hooks/useLocalStorage";
const {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  clearTokens
} = localStorageService;

const sleep = ms => response =>
  new Promise(resolve => setTimeout(() => resolve(response), ms));

const sleepTime = 0;
const responseBody = response => response.data;

const requests = {
  get: url =>
    axios
      .get(url)
      .then(sleep(sleepTime))
      .then(responseBody),
  post: (url, body) =>
    axios
      .post(url, body)
      .then(sleep(sleepTime))
      .then(responseBody),
  put: (url, body) =>
    axios
      .put(url, body)
      .then(sleep(sleepTime))
      .then(responseBody),
  del: url =>
    axios
      .delete(url)
      .then(sleep(sleepTime))
      .then(responseBody)
};

export const InstabrainApi = {
  getCurrentUser: () => requests.get("/api/user"),
  login: user => requests.post(`/api/accounts/login`, user),
  register: user => requests.post(`/api/accounts/register`, user),
  follow: followee => requests.post(`/api/accounts/follow`, { followee }),
  refreshToken: token => requests.post("/api/token", token),
  getUserSuggestions: (limit = 4) => requests.get(`/api/users?limit=${limit}`),
  getProfile: username => requests.get(`/api/profiles?username=${username}`),
  getPosts: () => requests.get(`/api/posts`),
  getPost: id => requests.get(`/api/post?id=${id}`),

  getFeed: (suggestionsLimit = 4, postsLimit = 4) =>
    requests.get(`/api/feed?pLimit=${postsLimit}&sLimit=${suggestionsLimit}`)
};

// axios.defaults.baseURL = "localhost:5000";

axios.interceptors.request.use(
  config => {
    const token = getAccessToken();

    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  // Return a successful response back to the calling service
  res => res,
  // Error Handler
  error => {
    // Return any error which is not due to authentication back to the calling service
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }

    // Logout user if token refresh didn't work
    if (error.config.url === "/api/token") {
      clearTokens();

      return Promise.reject(error);
    }

    if (error.response.status === 401) {
      // originalRequest._retry = true;
      const refreshToken = getRefreshToken();

      return InstabrainApi.refreshToken({
        token: refreshToken
      }).then(token => {
        // Place new token in localstorage
        setAccessToken({ accessToken: token });

        // Change Authorization header
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + getAccessToken();

        // Return originalRequest object
        return new Promise((resolve, reject) => {
          axios
            .request(error.config)
            .then(response => {
              resolve(response);
            })
            .catch(error => {
              reject(error);
            });
        });
      });
    }

    return Promise.reject(error);
  }
);

export default InstabrainApi;
