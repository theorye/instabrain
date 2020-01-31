import * as types from "./auth.action.types";

const loginReducer = (state, action) => {
  console.log("in login reducer");
  console.log(action);
  if (action.payload.accessToken) {
    localStorage.setItem("token", action.payload.accessToken);
  }

  if (action.payload.refreshToken) {
    localStorage.setItem("refresh", action.payload.refreshToken);
  }

  localStorage.setItem("userId", action.payload.id);

  return {
    ...state,
    user: {
      ...state.auth,
      isAuthenticated: true,
      userId: action.payload.id,
      username: action.payload.username,
      followers: action.payload.followers
    }
  };
};

export default {
  [types.LOGIN_USER]: loginReducer
};
