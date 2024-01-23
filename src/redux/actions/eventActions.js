import EVENT_TYPES from "../types/eventTypes";

export const resetState = () => ({
  type: EVENT_TYPES.RESET_STATE,
});

export function setEventConferenceCurrentPage(page) {
  return {
    type: EVENT_TYPES.SET_EVENT_CONFERENCE_CURRENT_PAGE,
    page, // Pass the page number as a payload
  };
}
export function setWebinarConferenceCurrentPage(page) {
  return {
    type: EVENT_TYPES.SET_WEBINAR_CONFERENCE_CURRENT_PAGE,
    page, // Pass the page number as a payload
  };
}

export const getEventConferenceListBegin = () => ({
  type: EVENT_TYPES.GET_EVENT_CONFERENCE_LIST_BEGIN,
});

export const getEventConferenceListSuccess = (data) => ({
  type: EVENT_TYPES.GET_EVENT_CONFERENCE_LIST_SUCCESS,
  payload: data,
});

export const getEventConferenceListFailure = (error) => ({
  type: EVENT_TYPES.GET_EVENT_CONFERENCE_LIST_FAILURE,
  payload: error,
});

export const getWebinarConferencetListBegin = () => ({
  type: EVENT_TYPES.GET_WEBINAR_CONFERENCE_LIST_BEGIN,
});

export const getWebinarConferenceListSuccess = (data) => ({
  type: EVENT_TYPES.GET_WEBINAR_CONFERENCE_LIST_SUCCESS,
  payload: data,
});

export const getWebinarConferenceListFailure = (error) => ({
  type: EVENT_TYPES.GET_WEBINAR_CONFERENCE_LIST_FAILURE,
  payload: error,
});

export const getEventConferenceByIdBegin = () => ({
  type: EVENT_TYPES.GET_EVENT_CONFERENCE_BYID_BEGIN,
});

export const getEventConferenceByIdSuccess = (data) => ({
  type: EVENT_TYPES.GET_EVENT_CONFERENCE_BYID_SUCCESS,
  payload: data,
});

export const getEventConferenceByIdFailure = (error) => ({
  type: EVENT_TYPES.GET_EVENT_CONFERENCE_BYID_FAILURE,
  payload: error,
});

export const getWebinarConferenceByIdBegin = () => ({
  type: EVENT_TYPES.GET_WEBINAR_CONFERENCE_BYID_BEGIN,
});

export const getWebinarConferenceByIdSuccess = (data) => ({
  type: EVENT_TYPES.GET_WEBINAR_CONFERENCE_BYID_SUCCESS,
  payload: data,
});

export const getWebinarConferenceByIdFailure = (error) => ({
  type: EVENT_TYPES.GET_WEBINAR_CONFERENCE_BYID_FAILURE,
  payload: error,
});
