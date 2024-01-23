import {
  getCaseStudiesListBegin,
  getCaseStudiesListSuccess,
  getCaseStudiesListFailure,
  getCaseStudiesByIdBegin,
  getCaseStudiesByIdSuccess,
  getCaseStudiesByIdFailure,
} from "../actions/caseStudyActions";
import axios from "axios";
import { BASE_URL } from "../../services/constant";

export function performGetCaseStudiesList(params) {
  return async (dispatch) => {
    dispatch(getCaseStudiesListBegin());
    try {
      const result = await axios.get(`${BASE_URL}caseStudies${params}`);
      dispatch(getCaseStudiesListSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getCaseStudiesListFailure());
      return false;
    }
  };
}

export function performGetCaseStudiesById(id) {
  return async (dispatch) => {
    dispatch(getCaseStudiesByIdBegin());
    try {
      const result = await axios.get(`${BASE_URL}caseStudies/${id}`);
      dispatch(getCaseStudiesByIdSuccess(result?.data?.docs));
      return result;
    } catch (error) {
      dispatch(getCaseStudiesByIdFailure());
      return false;
    }
  };
}
