import NEWSLETTER_TYPES from "../types/newsletterTypes";

const initialState = {
  fetching: false,
  updating: false,
  currentPage: 0,
  error: null,
  list: [],
};

export default function newsletterReducer(state = initialState, action) {
  switch (action.type) {
    case NEWSLETTER_TYPES.RESET_STATE:
      return initialState;

    case NEWSLETTER_TYPES.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };

    case NEWSLETTER_TYPES.GET_NEWSLETTER_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case NEWSLETTER_TYPES.GET_NEWSLETTER_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case NEWSLETTER_TYPES.GET_NEWSLETTER_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case NEWSLETTER_TYPES.GET_NEWSLETTER_BYID_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case NEWSLETTER_TYPES.GET_NEWSLETTER_BYID_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
      };

    case NEWSLETTER_TYPES.GET_NEWSLETTER_BYID_FAILURE:
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
