import { createContext } from "react";
import createReducer from "../helpers/createReducer";

export const types = {
  LOGIN_USER: "LOGIN_USER"
};

export const initialState = {
  isAuthenticated: false,
  id: null,
  username: null,
  following: null
};

export const actions = {
  loginUser: payload => ({ type: types.LOGIN_USER, payload })
};

const loginReducer = (state, action) => ({ 
  ...state, 
  following: action.payload.following,
  username: action.payload.username,
  id: action.payload.id, 
  isAuthenticated: true 
});


export const reducer = createReducer({ [types.LOGIN_USER]: loginReducer });

export const AppContext = createContext();

export default AppContext;
