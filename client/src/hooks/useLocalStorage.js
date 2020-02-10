const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";

function setAccessToken(tokenObj) {
  localStorage.setItem(ACCESS_TOKEN, tokenObj.accessToken);
}

function setRefreshToken(tokenObj) {
  localStorage.setItem(REFRESH_TOKEN, tokenObj.refreshToken);
}

function setTokens(tokenObj) {
  setRefreshToken(tokenObj);
  setAccessToken(tokenObj);
}

function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN);
}

function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN);
}

function clearTokens() {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
}

export const localStorageService = {
  setAccessToken,
  setRefreshToken,
  setTokens,
  getAccessToken,
  getRefreshToken,
  clearTokens
}


const useLocalStorage = () => {
  return [localStorageService];
};

export default useLocalStorage;
