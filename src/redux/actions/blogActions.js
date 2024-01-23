import BLOG_TYPES from "../types/blogTypes";

export const resetState = () => ({
  type: BLOG_TYPES.RESET_STATE,
});

export function setCurrentPage(page) {
  return {
    type: BLOG_TYPES.SET_CURRENT_PAGE,
    page, // Pass the page number as a payload
  };
}

export const getBlogListBegin = () => ({
  type: BLOG_TYPES.GET_BLOG_LIST_BEGIN,
});

export const getBlogListSuccess = (data) => ({
  type: BLOG_TYPES.GET_BLOG_LIST_SUCCESS,
  payload: data,
});

export const getBlogListFailure = (error) => ({
  type: BLOG_TYPES.GET_BLOG_LIST_FAILURE,
  payload: error,
});

export const getBlogByIdBegin = () => ({
  type: BLOG_TYPES.GET_BLOG_BYID_BEGIN,
});

export const getBlogByIdSuccess = (data) => ({
  type: BLOG_TYPES.GET_BLOG_BYID_SUCCESS,
  payload: data,
});

export const getBlogByIdFailure = (error) => ({
  type: BLOG_TYPES.GET_BLOG_BYID_FAILURE,
  payload: error,
});
