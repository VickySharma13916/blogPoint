import WEBINAR_TYPES from "../types/webinarTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function webinarReducer(state = initialState, action) {
  switch (action.type) {
    case WEBINAR_TYPES.RESET_STATE:
      return initialState;

    case WEBINAR_TYPES.GET_ALL_WEBINAR_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case WEBINAR_TYPES.GET_ALL_WEBINAR_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case WEBINAR_TYPES.GET_ALL_WEBINAR_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };
    case WEBINAR_TYPES.GET_WEBINAR_DETAIL_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case WEBINAR_TYPES.GET_WEBINAR_DETAIL_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
      };

    case WEBINAR_TYPES.GET_WEBINAR_DETAIL_FAILURE:
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
