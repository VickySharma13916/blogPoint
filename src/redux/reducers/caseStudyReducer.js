import CASESTUDIES_TYPES from "../types/caseStudyTypes";

const initialState = {
  fetching: false,
  updating: false,
  currentPage: 0,
  error: null,
  list: [],
};

export default function caseStudyReducer(state = initialState, action) {
  switch (action.type) {
    case CASESTUDIES_TYPES.RESET_STATE:
      return initialState;

    case CASESTUDIES_TYPES.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };

    case CASESTUDIES_TYPES.GET_CASESTUDIES_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case CASESTUDIES_TYPES.GET_CASESTUDIES_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case CASESTUDIES_TYPES.GET_CASESTUDIES_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case CASESTUDIES_TYPES.GET_CASESTUDIES_BYID_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case CASESTUDIES_TYPES.GET_CASESTUDIES_BYID_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
      };

    case CASESTUDIES_TYPES.GET_CASESTUDIES_BYID_FAILURE:
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
