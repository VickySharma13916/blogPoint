import NEWSANDMEDIA_TYPES from "../types/newsandMediaTypes";

const initialState = {
  fetching: false,
  updating: false,
  announcementcurrentPage: 0,
  pressreleasecurrentPage: 0,
  error: null,
  announcementlist: [],
  pressReleaselist: [],
};

export default function newsandmediaReducer(state = initialState, action) {
  switch (action.type) {
    case NEWSANDMEDIA_TYPES.RESET_STATE:
      return initialState;

    case NEWSANDMEDIA_TYPES.SET_ANNOUNCEMENT_CURRENT_PAGE:
      return {
        ...state,
        announcementcurrentPage: action.page,
      };
    case NEWSANDMEDIA_TYPES.SET_PRESS_RELEASE_CURRENT_PAGE:
      return {
        ...state,
        pressreleasecurrentPage: action.page,
      };

    case NEWSANDMEDIA_TYPES.GET_ANNOUNCEMENT_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case NEWSANDMEDIA_TYPES.GET_ANNOUNCEMENT_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        announcementlist: action.payload,
      };

    case NEWSANDMEDIA_TYPES.GET_ANNOUNCEMENT_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case NEWSANDMEDIA_TYPES.GET_PRESS_RELEASE_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case NEWSANDMEDIA_TYPES.GET_PRESS_RELEASE_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        pressReleaselist: action.payload,
      };

    case NEWSANDMEDIA_TYPES.GET_PRESS_RELEASE_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case NEWSANDMEDIA_TYPES.GET_ANNOUNCEMENT_BYID_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case NEWSANDMEDIA_TYPES.GET_ANNOUNCEMENT_BYID_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
      };

    case NEWSANDMEDIA_TYPES.GET_ANNOUNCEMENT_BYID_FAILURE:
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
