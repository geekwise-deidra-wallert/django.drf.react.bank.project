import React, { createContext, useReducer } from "react";
import authReducer from "../reducers/authReducer";

// Context that will be provided via CC.Provider
export const AuthContext = createContext();

// The Provider itself that will be used in App.js
const AuthProvider = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    permissions: JSON.parse(localStorage.getItem("permissions")),
    isAuthenticated: null,
    isLoading: false,
    user: null
  };

  const [auth, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
