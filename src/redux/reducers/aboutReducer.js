import ABOUT_TYPES from "../types/aboutTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  turacozTeamList: [],
  ImageSliderList: [],
  lifeAtTurcozList: [],
};

export default function aboutReducer(state = initialState, action) {
  switch (action.type) {
    case ABOUT_TYPES.RESET_STATE:
      return initialState;

    case ABOUT_TYPES.GET_TURACOZ_TEAM_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case ABOUT_TYPES.GET_TURACOZ_TEAM_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        turacozTeamList: action.payload,
      };

    case ABOUT_TYPES.GET_TURACOZ_TEAM_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case ABOUT_TYPES.GET_LIFE_AT_TURACOZ_TEAM_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case ABOUT_TYPES.GET_LIFE_AT_TURACOZ_TEAM_SUCCESS:
      return {
        ...state,
        updating: false,
        lifeAtTurcozList: action.payload,
        error: null,
      };
    case ABOUT_TYPES.GET_LIFE_AT_TURACOZ_TEAM_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case ABOUT_TYPES.GET_IMAGE_SLIDER_ABOUT_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case ABOUT_TYPES.GET_IMAGE_SLIDER_ABOUT_SUCCESS:
      return {
        ...state,
        updating: false,
        ImageSliderList: action.payload,
        error: null,
      };
    case ABOUT_TYPES.GET_IMAGE_SLIDER_ABOUT_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    default:
      return state;
  }
}
