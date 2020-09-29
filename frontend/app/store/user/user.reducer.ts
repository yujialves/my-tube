import * as actionTypes from "../actionTypes";

type Action = {
  type: string;
  user: string;
  password: string;
};

const initialState = {
  user: "",
  password: "",
};

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
        password: action.password,
      };
  }
  return state;
};

export default userReducer;
