import { combineReducers } from "redux";

import aboutReducer from "./aboutReducer";
import blogReducer from "./blogReducer";
import courseReducer from "./courseReducer";
import userReducer from "./userReducer";
import webinarReducer from "./webinarReducer";
import WorkshopReducer from "./workshopReducer";
import whitepaperReducer from "./whitepaperReducer";
import caseStudyReducer from "./caseStudyReducer";
import newsletterReducer from "./newsletterReducer";
import newsandmediaReducer from "./newsandmediaReducer";
import eventReducer from "./eventReducer";

export default combineReducers({
  user: userReducer,
  blog: blogReducer,
  about: aboutReducer,
  course: courseReducer,
  webinar: webinarReducer,
  workshop: WorkshopReducer,
  whitepaper: whitepaperReducer,
  casestudy: caseStudyReducer,
  newsletter: newsletterReducer,
  newsandmedia: newsandmediaReducer,
  event: eventReducer,
});
