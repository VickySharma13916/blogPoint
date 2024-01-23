import NEWSANDMEDIA_TYPES from "../types/newsandMediaTypes";

export const resetState = () => ({
  type: NEWSANDMEDIA_TYPES.RESET_STATE,
});

export function setAnnouncementCurrentPage(page) {
  return {
    type: NEWSANDMEDIA_TYPES.SET_ANNOUNCEMENT_CURRENT_PAGE,
    page, // Pass the page number as a payload
  };
}
export function setPressReleaseCurrentPage(page) {
  return {
    type: NEWSANDMEDIA_TYPES.SET_PRESS_RELEASE_CURRENT_PAGE,
    page, // Pass the page number as a payload
  };
}

export const getAnnouncementListBegin = () => ({
  type: NEWSANDMEDIA_TYPES.GET_ANNOUNCEMENT_LIST_BEGIN,
});

export const getAnnouncementListSuccess = (data) => ({
  type: NEWSANDMEDIA_TYPES.GET_ANNOUNCEMENT_LIST_SUCCESS,
  payload: data,
});

export const getAnnouncementListFailure = (error) => ({
  type: NEWSANDMEDIA_TYPES.GET_ANNOUNCEMENT_LIST_FAILURE,
  payload: error,
});

export const getPressReleasetListBegin = () => ({
  type: NEWSANDMEDIA_TYPES.GET_PRESS_RELEASE_LIST_BEGIN,
});

export const getPressReleaseListSuccess = (data) => ({
  type: NEWSANDMEDIA_TYPES.GET_PRESS_RELEASE_LIST_SUCCESS,
  payload: data,
});

export const getPressReleaseListFailure = (error) => ({
  type: NEWSANDMEDIA_TYPES.GET_PRESS_RELEASE_LIST_FAILURE,
  payload: error,
});

export const getAnnouncementByIdBegin = () => ({
  type: NEWSANDMEDIA_TYPES.GET_ANNOUNCEMENT_BYID_BEGIN,
});

export const getAnnouncementByIdSuccess = (data) => ({
  type: NEWSANDMEDIA_TYPES.GET_ANNOUNCEMENT_BYID_SUCCESS,
  payload: data,
});

export const getAnnouncementByIdFailure = (error) => ({
  type: NEWSANDMEDIA_TYPES.GET_ANNOUNCEMENT_BYID_FAILURE,
  payload: error,
});
