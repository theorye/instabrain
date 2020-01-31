import React from "react";

const UserContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
      case 'loginUser':
        return {
          ...state,
          isAuthenticated: action.payload.authenticated,
          name: action.payload.user.name,
        };
      default:
        return state;
    }
  };

export default UserContextProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState.user);
  auth.handleAuthentication().then(() => {
    dispatch({
      type: "loginUser",
      payload: {
        authenticated: true,
        user: auth.getProfile()
      }
    });
  });
  return (
    <UserContext.Provider
      value={{
        ...state,
        handleLogin: auth.signIn
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
