import WHITEPAPER_TYPES from "../types/whitepaperTypes";

const initialState = {
  fetching: false,
  updating: false,
  currentPage: 0,
  error: null,
  list: [],
};

export default function whitepaperReducer(state = initialState, action) {
  switch (action.type) {
    case WHITEPAPER_TYPES.RESET_STATE:
      return initialState;
    case WHITEPAPER_TYPES.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };

    case WHITEPAPER_TYPES.GET_WHITEPAPER_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case WHITEPAPER_TYPES.GET_WHITEPAPER_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case WHITEPAPER_TYPES.GET_WHITEPAPER_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case WHITEPAPER_TYPES.GET_WHITEPAPER_BYID_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case WHITEPAPER_TYPES.GET_WHITEPAPER_BYID_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
      };

    case WHITEPAPER_TYPES.GET_WHITEPAPER_BYID_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    default:
      return state;
  }
}
