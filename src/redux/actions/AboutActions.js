import ABOUT_TYPES from "../types/aboutTypes";

export const resetState = () => ({
  type: ABOUT_TYPES.RESET_STATE,
});

export const getTuracozTeamBegin = () => ({
  type: ABOUT_TYPES.GET_TURACOZ_TEAM_BEGIN,
});

export const getTuracozTeamSuccess = (data) => ({
  type: ABOUT_TYPES.GET_TURACOZ_TEAM_SUCCESS,
  payload: data,
});

export const getTuracozTeamFailure = (error) => ({
  type: ABOUT_TYPES.GET_TURACOZ_TEAM_FAILURE,
  payload: error,
});

export const getLifeAtTuracozTeamBegin = () => ({
  type: ABOUT_TYPES.GET_LIFE_AT_TURACOZ_TEAM_BEGIN,
});

export const getLifeAtTuracozTeamSuccess = (data) => ({
  type: ABOUT_TYPES.GET_LIFE_AT_TURACOZ_TEAM_SUCCESS,
  payload: data,
});

export const getLifeAtTuracozTeamFailure = (error) => ({
  type: ABOUT_TYPES.GET_LIFE_AT_TURACOZ_TEAM_FAILURE,
  payload: error,
});

export const getImageSliderAboutBegin = () => ({
  type: ABOUT_TYPES.GET_LIFE_AT_TURACOZ_TEAM_BEGIN,
});

export const getImageSliderAboutSuccess = (data) => ({
  type: ABOUT_TYPES.GET_LIFE_AT_TURACOZ_TEAM_SUCCESS,
  payload: data,
});

export const getImageSliderAboutFailure = (error) => ({
  type: ABOUT_TYPES.GET_LIFE_AT_TURACOZ_TEAM_FAILURE,
  payload: error,
});
