import * as types from "./auth.action.types";

export const loginUserAction = payload => ({ type: types.LOGIN_USER, payload });

// export const initUserAction = (payload, dispatch) => {
//   console.log("fired");
//   const refreshToken = localStorage.getItem("refresh");
//   return Accounts.token(refreshToken).then(res => {
//     console.log(res);
//     return { type: types.INIT_AUTH_FINISHED };
//   });
// };

// export const initUserAction = async (payload, dispatch) => {
//   const token = localStorage.getItem("token");

//   try {
//     if (token) {
//       const user = await Accounts.current();
//       console.log('here', user);
//       return { type: types.INIT_AUTH_FINISHED };
//     } else {
//       return { type: types.INIT_AUTH_FINISHED };
//     }
//   } catch (err) {
//     console.log(err);
//     console.log(err.response);
//     console.log('err 1');
//     if (err.response.data == "AccessTokenTokenExpiredError") {
//         console.log('made it here');
//         const res = await getNewToken();
//         console.log('res', res);
//         return { type: types.INIT_AUTH_FINISHED };
//     }
//   }
// };

// async function getUserAccount() {
//   try {
//     const user = await Accounts.current();
//     return user;
//   } catch (err) {
//     console.log("error 1");
//     if (err.response.data == "AccessTokenTokenExpiredError") {
//       console.log("here2");
//       const newAccessToken = await getNewToken();
//     }
//   }
// }

// async function getNewToken() {
//   try {
//     console.log("now here");
//     const refreshToken = localStorage.getItem("refresh");
//     const newAccessToken = await Accounts.token(refreshToken);
//     console.log("now here", newAccessToken);
//     return newAccessToken;
//   } catch (err) {
//     console.log("getNewTokenError");
//   }
// }
