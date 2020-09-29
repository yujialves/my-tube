import * as actionTypes from "../actionTypes";

export const setUser = (user: string, password: string) => {
  return {
    type: actionTypes.SET_USER,
    user,
    password,
  };
};
