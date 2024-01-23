import axios from "axios";
import { BASE_URL } from "../../services/constant";
import {
  getImageSliderAboutBegin,
  getImageSliderAboutFailure,
  getImageSliderAboutSuccess,
  getLifeAtTuracozTeamBegin,
  getLifeAtTuracozTeamFailure,
  getLifeAtTuracozTeamSuccess,
  getTuracozTeamBegin,
  getTuracozTeamFailure,
  getTuracozTeamSuccess,
} from "../actions/AboutActions";

export function performGetTuracozTeamList() {
  return async (dispatch) => {
    dispatch(getTuracozTeamBegin());
    try {
      const result = await axios.get(`${BASE_URL}turacozteam`);
      dispatch(getTuracozTeamSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getTuracozTeamFailure());
      return false;
    }
  };
}

export function performGetLifeAtTuracozTeamList() {
  return async (dispatch) => {
    dispatch(getLifeAtTuracozTeamBegin());
    try {
      const result = await axios.get(`${BASE_URL}lifeAtTuracoz`);
      dispatch(getLifeAtTuracozTeamSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getLifeAtTuracozTeamFailure());
      return false;
    }
  };
}

export function performGetImageSliderAboutList() {
  return async (dispatch) => {
    dispatch(getImageSliderAboutBegin());
    try {
      const result = await axios.get(`${BASE_URL}imageSliderTurcoz`);
      dispatch(getImageSliderAboutSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getImageSliderAboutFailure());
      return false;
    }
  };
}
