import * as types from "./store/auth.action.creators";
import { Accounts } from "../../App/services/agent";

export const initUser = async dispatch => {
  try {
    let user;
    const response = await getUserAccount();

    if (response.error) {
      console.log("First Error in Init User", response.error);
      if (response.error === "AccessTokenTokenExpiredError") {
        const newTokenResponse = await getNewToken();
        if (newTokenResponse) {
          console.log(newTokenResponse);
          user = await getUserAccount();
        }
      }
    } else {
      user = response;
    }

    console.log(user);

    if (user && user.username) {
      // dispatch
      console.log(response);
      dispatch(types.loginUserAction(user));
    }
  } catch (e) {
    console.log("ERROR in initUser");
    console.log(e);
  }
};

async function getUserAccount() {
  try {
    const user = await Accounts.current();
    return user;
  } catch (err) {
    console.log("ERROR IN getUserAccount");
    return {
      error: err.response.data
    };
  }
}

async function getNewToken() {
  try {
    const refreshToken = localStorage.getItem("refresh");
    const newAccessToken = await Accounts.token(refreshToken);
    localStorage.setItem("token", newAccessToken);
    return true;
  } catch (err) {
    if (err.response.data === "TokenDoesNotExist") {
      localStorage.clear();
    }

    console.log("ERROR in getNewTokenError");
    console.log(err.response);
    return false;
  }
}
