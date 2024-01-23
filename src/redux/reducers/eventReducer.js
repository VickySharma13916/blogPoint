import EVENT_TYPES from "../types/eventTypes";

const initialState = {
  fetching: false,
  updating: false,
  eventConferencecurrentPage: 0,
  webinarConferencecurrentPage: 0,
  error: null,
  eventConferenceList: [],
  webinarConferencelist: [],
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case EVENT_TYPES.RESET_STATE:
      return initialState;

    case EVENT_TYPES.SET_EVENT_CONFERENCE_CURRENT_PAGE:
      return {
        ...state,
        eventConferencecurrentPage: action.page,
      };
    case EVENT_TYPES.SET_WEBINAR_CONFERENCE_CURRENT_PAGE:
      return {
        ...state,
        webinarConferencecurrentPage: action.page,
      };

    case EVENT_TYPES.GET_EVENT_CONFERENCE_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case EVENT_TYPES.GET_EVENT_CONFERENCE_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        eventConferenceList: action.payload,
      };

    case EVENT_TYPES.GET_EVENT_CONFERENCE_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case EVENT_TYPES.GET_WEBINAR_CONFERENCE_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case EVENT_TYPES.GET_WEBINAR_CONFERENCE_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        webinarConferencelist: action.payload,
      };

    case EVENT_TYPES.GET_WEBINAR_CONFERENCE_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case EVENT_TYPES.GET_EVENT_CONFERENCE_BYID_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case EVENT_TYPES.GET_EVENT_CONFERENCE_BYID_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
      };

    case EVENT_TYPES.GET_EVENT_CONFERENCE_BYID_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };
    case EVENT_TYPES.GET_WEBINAR_CONFERENCE_BYID_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case EVENT_TYPES.GET_WEBINAR_CONFERENCE_BYID_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
      };

    case EVENT_TYPES.GET_WEBINAR_CONFERENCE_BYID_FAILURE:
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
