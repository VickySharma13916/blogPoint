import BLOG_TYPES from "../types/blogTypes";

const initialState = {
  fetching: false,
  currentPage: 0,
  updating: false,
  error: null,
  list: [],
};

export default function blogReducer(state = initialState, action) {
  switch (action.type) {
    case BLOG_TYPES.RESET_STATE:
      return initialState;

    case BLOG_TYPES.GET_BLOG_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case BLOG_TYPES.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };

    case BLOG_TYPES.GET_BLOG_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case BLOG_TYPES.GET_BLOG_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case BLOG_TYPES.GET_BLOG_BYID_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case BLOG_TYPES.GET_BLOG_BYID_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
      };

    case BLOG_TYPES.GET_BLOG_BYID_FAILURE:
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
