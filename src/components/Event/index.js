import React, { useEffect, useState } from "react";
import conference from "../../assets/images/conferences-min.jpg";
import events from "../../assets/images/event.jpg";
import mobEvent from "../../assets/images/mobEvent.jpg";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import SeoHeaderTitle from "../SeotitleHeader";
import { Link, useLocation } from "react-router-dom";
import Pagination from "../pagination";
import DisplayText from "../DisplayHtmlText";
import { connect } from "react-redux";
import {
  performGetEventConferenceList,
  performGetWebinarConferenceList,
} from "../../redux/actionCreators/eventCreators";
import {
  setEventConferenceCurrentPage,
  setWebinarConferenceCurrentPage,
} from "../../redux/actions/eventActions";
import { BACKEND_URL } from "../../services/constant";

const Event = ({
  fetchEventConferenceList,
  fetchWebinarConferenceList,
  EventConferencecurrentPage,
  setEventConferenceCurrentPage,
  setWebinarConferenceCurrentPage,
  WebinarConferencecurrentPage,
}) => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const [activeTab, setActiveTab] = useState("Conferences");
  const locate = useLocation();
  let url = locate?.pathname?.substring(1);
  const [pageData] = usePageData(url);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [EventConference, setEventConference] = useState(null);
  const [WebinarConference, setWebinarConference] = useState(null);
  const [totalEventConferencePages, setTotalEventConferencePages] = useState(1);
  const [totalWebinarConferencePages, setTotalWebinarConferencePages] =
    useState(1);
  const fetchEventConference = async () => {
    const result = await fetchEventConferenceList(
      `?pageNumber=${EventConferencecurrentPage}`
    );
    if (result.status === 200) {
      const filtereData = result?.data?.docs?.data?.filter(
        (item) => item.status === true
      );
      setEventConference(filtereData);
      const limit = result?.data?.docs?.limit;
      const totalPages = result?.data?.docs?.totalDocs;
      const page = Math.floor(totalPages / limit);
      setTotalEventConferencePages(page);
    }
  };
  const fetchWebinarConference = async () => {
    const result = await fetchWebinarConferenceList(
      `?pageNumber=${WebinarConferencecurrentPage}`
    );
    if (result.status === 200) {
      const filtereData = result?.data?.docs?.data?.filter(
        (item) => item.status === true
      );
      setWebinarConference(filtereData);
      const limit = result?.data?.docs?.limit;
      const totalPages = result?.data?.docs?.totalDocs;
      const page = Math.floor(totalPages / limit);
      setTotalWebinarConferencePages(page);
    }
  };
  useEffect(() => {
    fetchEventConference();
    fetchWebinarConference();
  }, [EventConferencecurrentPage, WebinarConferencecurrentPage]);
  const handleEventConferencePageClick = (page) => {
    setEventConferenceCurrentPage(page);
  };
  const handleWebinarConferencePageClick = (page) => {
    setWebinarConferenceCurrentPage(page);
  };
  return (
    <>
      {pageData && <SeoHeaderTitle pageData={pageData} />}
      <div>
        <div className="relative">
          <div className="xl:ml-28 relative z-10">
            <div className="border-0 relative active:border-0">
              <div className="absolute image-background2"></div>
              <img
                src={events}
                alt="events"
                className="image-carousal relative object-cover hidden md:block"
              />
              <img
                src={mobEvent}
                alt="events"
                className="image-carousal relative object-cover md:hidden block"
              />
              <div className="flex flex-col text-white absolute top-1/4 bottom-0 right-0 left-0 z-10 text-left p-20">
                <h1 className="xl:text-[68px] md:text-[38px] text-[30px] font-semibold">
                  Events
                </h1>
              </div>
            </div>
            <div className="md:w-[54%] px-6 md:px-10 py-8 md:py-16 mx-6 md:mx-auto bg-[#A21B1F] text-white text-[17px] md:text-xl absolute -bottom-28 md:-bottom-24 z-20 right-0">
              <h6 className="w-full">
                Welcome to our Events page! Here, you will find a comprehensive
                list of all the conferences, webinars, and events we have
                participated in or plan to attend. Our focus is on healthcare
                communications, pharma, research, and other related fields, and
                we take pride in being active members of the community.
              </h6>
            </div>
          </div>
          <div className="bg-[#f2f2f2] w-full absolute top-64 -z-10 right-0 h-80"></div>
          <div className="bg-[#f2f2f2] w-full relative top-1/2 bottom-0 z-0 right-0 h-40"></div>
          <div className="bg-[#ddf1e6] w-full relative">
            <div className="container mx-auto">
              <h2 className=" mx-6 md:mx-auto xl:text-[45px] md:text-[30px] text-[26px] pt-8 pb-8 md:pb-16 font-semibold">
                Our Participation
              </h2>
              <div className="flex flex-col md:flex-row">
                <div className=" w-auto md:w-1/2 mx-6 md:mx-0 pr-0 md:pr-8">
                  <p className="md:text-lg text-justify mb-4">
                    Our team frequently attends conferences and events related
                    to our expertise and presents on various topics. We believe
                    in sharing our knowledge and contributing to the growth of
                    industry. Here, you will find details of all the conferences
                    we are attending and presentations we are making. We provide
                    supporting images to give you a glimpse of the event and the
                    topics covered. The details of all the webinars we have
                    participated in are also included in this section.
                  </p>
                  <p className="md:text-lg my-4 md:my-10 text-justify mb-4">
                    We are committed to keeping you informed about all our past
                    and upcoming events. This section serves as a resource for
                    those interested in attending events or webinars related to
                    healthcare communications, pharma, research, and other
                    related fields. We believe in the power of networking, and
                    we are always looking for opportunities to connect with
                    like-minded individuals and organizations.
                  </p>
                </div>
                <div className="w-auto mx-6 md:mx-0 md:w-1/2 pb-6">
                  <img
                    src={conference}
                    alt="newsconference"
                    className="w-full h-3/4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-20">
            <div className="container mx-auto">
              <h2 className="xl:text-[45px] md:text-[30px] text-[26px] underline font-semibold mt-40 text-center">
                Our Events
              </h2>
              <div className="border border-[#d9d9d9] mx-4 md:mx-0">
                <div className="mb-4">
                  <ul
                    className="flex flex-wrap -mb-px text-xl font-semibold text-center bg-[#f4f4f4] border-b border-[#d9d9d9]"
                    id="myTab"
                    data-tabs-toggle="#myTabContent"
                    role="tablist"
                  >
                    <li
                      className={`py-2 px-8 cursor-pointer w-full sm:w-auto ${
                        activeTab === "Conferences"
                          ? " text-black bg-white"
                          : "bg-[#f4f4f4] text-[#666] border md:border-0 md:border-r border-[#d9d9d9]"
                      }`}
                      onClick={() => handleTabClick("Conferences")}
                    >
                      Conferences - Upcoming & Past (pictures)
                    </li>
                    <li
                      className={`py-2 px-8 cursor-pointer w-full sm:w-auto ${
                        activeTab === "hosting-webinar"
                          ? "text-black bg-white border md:border-0 md:border-r border-[#d9d9d9]"
                          : "bg-[#f4f4f4] text-[#666] border md:border-0 md:border-l border-[#d9d9d9]"
                      }`}
                      onClick={() => handleTabClick("hosting-webinar")}
                    >
                      Hosting Webinars- Upcoming & Past (collages)
                    </li>
                  </ul>
                </div>
                <div id="myTabContent">
                  {activeTab === "Conferences" && (
                    <div className=" text-gray-800 mt-4 py-4 bg-[#ddf1e6]">
                      <div className="flex flex-wrap items-center gap-2 justify-center md:justify-around py-10">
                        {EventConference &&
                          EventConference?.map((row) => (
                            <Link
                              to={`/events/conference/${row?.eventConferenceLink
                                ?.toLowerCase()
                                ?.replace(/\s+/g, "-")}`}
                              key={row?._id}
                            >
                              <div className=" card object-cover border-0 p-0 my-2 overflow-hidden flex flex-col">
                                <img
                                  src={BACKEND_URL + row?.eventConferenceImage}
                                  alt={row?.EventConferenceTitle}
                                  className="w-full h-52 rounded-t-lg"
                                />
                                <div className="flex bg-white h-full justify-between rounded-b-lg flex-col p-4">
                                  <div className="text-lg font-semibold line-clamp-2 mt-6 hover:text-red-800">
                                    {row?.eventConferenceTitle}
                                  </div>
                                  <div className="text-sm line-clamp-4">
                                    <DisplayText
                                      htmlContent={
                                        row?.eventConferenceDescription
                                      }
                                    />
                                  </div>
                                  <div className="flex mb-4 items-center connect-svg">
                                    <div className="text-lg font-semibold">
                                      Read More
                                    </div>
                                    <div className="w-20 h-12 ml-4">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 73 48"
                                      >
                                        <circle
                                          className="st0"
                                          transform="rotate(-90 40 40)"
                                          cx="55"
                                          cy="45"
                                          r="22.2"
                                        ></circle>
                                        <line
                                          className="st1"
                                          x1="1.4"
                                          y1="23.6"
                                          x2="44.1"
                                          y2="23.6"
                                        ></line>
                                        <polygon
                                          className="st2"
                                          points="42.6 28.6 51.2 23.6 42.6 18.6 "
                                        ></polygon>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        <Pagination
                          pageNumber={EventConferencecurrentPage}
                          totalPages={totalEventConferencePages}
                          handlePageClick={handleEventConferencePageClick}
                        />
                      </div>
                    </div>
                  )}
                  {activeTab === "hosting-webinar" && (
                    <div className=" text-gray-800 mt-4 py-4 bg-[#ddf1e6]">
                      <div className="flex flex-wrap items-center gap-2 justify-center md:justify-around py-10">
                        {WebinarConference &&
                          WebinarConference?.map((row) => (
                            <Link
                              to={`/events/webinar/${row?.webinarConferenceLink
                                ?.toLowerCase()
                                ?.replace(/\s+/g, "-")}`}
                              key={row?._id}
                            >
                              <div className=" card object-cover border-0 p-0 my-2 overflow-hidden flex flex-col">
                                <img
                                  src={
                                    BACKEND_URL + row?.webinarConferenceImage
                                  }
                                  alt={row?.webinarConferenceTitle}
                                  className="w-full h-52 rounded-t-lg"
                                />
                                <div className="flex bg-white h-full justify-between rounded-b-lg flex-col p-4">
                                  <div className="text-lg font-semibold line-clamp-2 mt-6 hover:text-red-800">
                                    {row?.webinarConferenceTitle}
                                  </div>
                                  <div className="text-sm line-clamp-4">
                                    <DisplayText
                                      htmlContent={
                                        row?.webinarConferenceDescription
                                      }
                                    />
                                  </div>
                                  <div className="flex mb-4 items-center connect-svg">
                                    <div className="text-lg font-semibold">
                                      Read More
                                    </div>
                                    <div className="w-20 h-12 ml-4">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 73 48"
                                      >
                                        <circle
                                          className="st0"
                                          transform="rotate(-90 40 40)"
                                          cx="55"
                                          cy="45"
                                          r="22.2"
                                        ></circle>
                                        <line
                                          className="st1"
                                          x1="1.4"
                                          y1="23.6"
                                          x2="44.1"
                                          y2="23.6"
                                        ></line>
                                        <polygon
                                          className="st2"
                                          points="42.6 28.6 51.2 23.6 42.6 18.6 "
                                        ></polygon>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        <Pagination
                          pageNumber={EventConferencecurrentPage}
                          totalPages={totalWebinarConferencePages}
                          handlePageClick={handleWebinarConferencePageClick}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  EventConferencecurrentPage: state.event.eventConferencecurrentPage,
  WebinarConferencecurrentPage: state.event.webinarConferencecurrentPage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEventConferenceList: (payload) =>
    dispatch(performGetEventConferenceList(payload)),
  fetchWebinarConferenceList: (payload) =>
    dispatch(performGetWebinarConferenceList(payload)),
  setEventConferenceCurrentPage: (page) =>
    dispatch(setEventConferenceCurrentPage(page)),
  setWebinarConferenceCurrentPage: (page) =>
    dispatch(setWebinarConferenceCurrentPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);
