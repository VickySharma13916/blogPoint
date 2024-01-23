import USER_TYPES from "../types/userTypes";

const initialState = {
  fetching: false,
  error: null,
  list: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_TYPES.RESET_STATE:
      return initialState;
    case USER_TYPES.POST_USERDETAILS_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case USER_TYPES.POST_USERDETAILS_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case USER_TYPES.POST_USERDETAILS_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };
    default:
      return state;
  }
}
