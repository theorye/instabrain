import * as types from "./profile.action.types";

const setProfileReducer = (state, action) => {
  console.log("in setProfile reducer");
  console.log(action);
  return {
    ...state,
    profile: {
      ...state.profile,
      username: action.payload.username,
      posts: action.payload.posts
    }
  };
};

export default {
  [types.SET_PROFILE]: setProfileReducer
};
