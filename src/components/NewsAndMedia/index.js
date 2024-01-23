import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import news from "../../assets/images/News-Media.jpg";
import media from "../../assets/images/media&news.jpg";
import news1 from "../../assets/images/news1.jpg";
import news2 from "../../assets/images/news2.jpg";
import news3 from "../../assets/images/news3.jpg";
import news4 from "../../assets/images/news4.jpg";
import newsimg from "../../assets/images/newsimg.jpg";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import {
  performGetAnnouncementList,
  performGetPressReleaseList,
} from "../../redux/actionCreators/newsandMediaCreators";
import {
  setAnnouncementCurrentPage,
  setPressReleaseCurrentPage,
} from "../../redux/actions/newsandmediaActions";
import { BACKEND_URL } from "../../services/constant";
import DisplayText from "../DisplayHtmlText";
import SeoHeaderTitle from "../SeotitleHeader";
import Pagination from "../pagination";

const NewsMedia = ({
  fetchAnnouncementList,
  fetchPressReleaseList,
  announcementcurrentPage,
  pressreleasecurrentPage,
  setAnnouncementCurrentPage,
  setPressReleaseCurrentPage,
}) => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.substring(1);
  const images = [
    {
      image: news1,
      link: "https://doingbusiness.utrechtregion.com/success-story-turacoz/",
    },
    {
      image: news2,
      link: "https://www.prnewswire.com/news-releases/turacoz-forges-ahead-with-veeva-content-certification--training-for-professionals-301812804.html",
    },
    {
      image: news3,
      link: "https://www.prnewswire.com/il/news-releases/turacoz-paves-the-way-in-digital-content-management-for-healthcare-communications-with-veeva--expert-training-301756288.html",
    },
    {
      image: news4,
      link: "https://www.prnewswire.com/il/news-releases/turacozs-research--trainings-empowering-healthcare-professionals-with-enhanced-publication-skills-301778505.html",
    },
  ];
  const [pageData] = usePageData(url);
  const [activeTab, setActiveTab] = useState("pressRelease");
  const [announcement, setAnnouncement] = useState([]);
  const [pressRelease, setPressRelease] = useState(null);
  const [totalAnnouncementPages, setTotalAnnouncementPages] = useState(1);
  const [totalPressReleasePages, setTotalPressReleasePages] = useState(1);
  const fetchAnnouncement = async () => {
    const result = await fetchAnnouncementList(
      `?pageNumber=${announcementcurrentPage}`
    );
    if (result.status === 200) {
      const filtereData = result?.data?.docs?.data?.filter(
        (item) => item.status === true
      );
      setAnnouncement(filtereData);
      const limit = result?.data?.docs?.limit;
      const totalPages = result?.data?.docs?.totalDocs;
      const page = Math.floor(totalPages / limit);
      setTotalAnnouncementPages(page);
    }
  };
  const fetchPressRelease = async () => {
    const result = await fetchPressReleaseList(
      `?pageNumber=${pressreleasecurrentPage}`
    );
    if (result.status === 200) {
      const filtereData = result?.data?.docs?.data?.filter(
        (item) => item.status === true
      );
      setPressRelease(filtereData);
      const limit = result?.data?.docs?.limit;
      const totalPages = result?.data?.docs?.totalDocs;
      const page = Math.floor(totalPages / limit);
      setTotalPressReleasePages(page);
    }
  };
  useEffect(() => {
    fetchAnnouncement();
    fetchPressRelease();
  }, [announcementcurrentPage, pressreleasecurrentPage]);
  const handleAnnouncementPageClick = (page) => {
    setAnnouncementCurrentPage(page);
  };
  const handlePresspagePageClick = (page) => {
    setPressReleaseCurrentPage(page);
  };
  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
                src={news}
                alt="news"
                className="image-carousal relative object-cover hidden md:block"
              />
              <img
                src={media}
                alt="news"
                className="image-carousal relative object-cover md:hidden block"
              />
              <div className="flex flex-col text-white absolute top-1/4 bottom-0 right-0 left-0 z-10 text-left p-10 md:p-20">
                <h1 className="xl:text-[68px] md:text-[38px] text-[30px] font-semibold">
                  News & Media
                </h1>
              </div>
            </div>
            <div className="md:w-[54%] px-10 py-16 mx-6 md:mx-auto bg-[#A21B1F] text-white text-[17px] md:text-xl absolute -bottom-28 md:-bottom-24 z-20 right-0">
              <h3 className="w-full md:w-4/5">
                Find the latest updates on our company, press releases,
                announcements, and other news related to our industry.
              </h3>
            </div>
          </div>
          <div className="bg-[#f2f2f2] w-full absolute top-64 -z-10 right-0 h-80"></div>
          <div className="bg-[#f2f2f2] w-full relative top-1/2 bottom-0 z-0 right-0 h-40"></div>
          <div className="bg-[#ddf1e6] w-full relative">
            <div className="container mx-auto">
              <h2 className="text-3xl mx-6 md:mx-auto md:text-5xl pt-8 pb-8 md:pb-16 font-semibold">
                What’s in Store
              </h2>
              <div className="flex flex-col md:flex-row">
                <div className="w-auto md:w-1/2 mx-6 md:mx-0 pr-0 md:pr-8">
                  <p className="md:text-lg text-justify mb-4">
                    Stay up to date with the latest happenings, events, and news
                    related to our organization and the industry as a whole. We
                    will keep you informed about our latest achievements,
                    product and service launches, partnerships, and
                    collaborations.
                  </p>
                  <p className="md:text-lg text-justify mb-4">
                    Our team is constantly working on cutting-edge technologies,
                    innovative ideas, and industry developments, and we believe
                    in sharing our progress with our stakeholders.
                  </p>
                  <p className="md:text-lg text-justify mb-4">
                    We also welcome journalists, bloggers, and members of the
                    media to contact us for any queries, press releases, or
                    interviews. We value transparency and are committed to
                    keeping our stakeholders informed about our developments.
                  </p>
                </div>
                <div className="w-auto mx-6 md:mx-0 md:w-1/2 pb-6">
                  <img
                    src={newsimg}
                    alt="news-image"
                    className="w-full md:w-3/4 h-3/4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-20">
            <div className="container mx-auto">
              <h2 className="lg:text-[45px] md:text-[30px] text-[17px] sm:text-[26px] underline font-semibold mt-8 md:mt-40 text-center">
                Updates
              </h2>
              <h6 className="text-xl my-16 mx-6 md:mx-0">
                Check out this section regularly for updates, and feel free to
                contact us for any media-related inquiries.
              </h6>
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
                        activeTab === "pressRelease"
                          ? " text-black bg-white"
                          : " bg-[#f4f4f4] text-[#666] border md:border-0 md:border-r border-[#d9d9d9]"
                      }`}
                      onClick={() => handleTabClick("pressRelease")}
                    >
                      Press Release
                    </li>
                    <li
                      className={`py-2 px-8 cursor-pointer w-full sm:w-auto  ${
                        activeTab === "announcement"
                          ? "text-black bg-white border md:border-0 md:border-r border-[#d9d9d9]"
                          : "bg-[#f4f4f4] text-[#666] border md:border-0 md:border-l border-[#d9d9d9]"
                      }`}
                      onClick={() => handleTabClick("announcement")}
                    >
                      Announcements/News
                    </li>
                  </ul>
                </div>
                <div id="myTabContent">
                  {activeTab === "pressRelease" && (
                    <div className="text-gray-800 py-4 bg-[#ddf1e6] ">
                      <div className="flex flex-wrap items-center justify-center md:justify-start py-4 md:py-10">
                        {pressRelease &&
                          pressRelease?.map((image) => (
                            <div
                              key={image?._id}
                              className="image-container object-cover p-2 mx-0 md:mx-4 my-2 overflow-hidden flex-none"
                            >
                              <Link to={image?.pressReleaseLink}>
                                <img
                                  src={BACKEND_URL + image?.pressReleaseImage}
                                  alt={image?.pressReleaseName}
                                  className="press-image"
                                />
                              </Link>
                            </div>
                          ))}
                      </div>
                      <Pagination
                        pageNumber={setPressReleaseCurrentPage}
                        totalPages={totalPressReleasePages}
                        handlePageClick={handlePresspagePageClick}
                      />
                    </div>
                  )}
                  {activeTab === "announcement" && (
                    <div className=" text-gray-800 mt-4 py-4 bg-[#ddf1e6]">
                      <div className="flex flex-wrap items-center gap-2 justify-center md:justify-around py-4 md:py-10">
                        {announcement &&
                          announcement?.map((row) => (
                            <Link
                              to={`/news-media/${row?.announcementLink
                                ?.toLowerCase()
                                ?.replace(/\s+/g, "-")}`}
                              key={row?._id}
                            >
                              <div className="card object-cover border-0 p-0 my-2 overflow-hidden flex flex-col">
                                <img
                                  src={BACKEND_URL + row?.announcementImage}
                                  alt={row?.announcementTitle}
                                  className="w-full h-52 rounded-t-lg"
                                />
                                <div className="flex bg-white h-full justify-between rounded-b-lg flex-col p-4">
                                  <div className="text-lg font-semibold line-clamp-2 mt-6 hover:text-red-800">
                                    {row?.announcementTitle}
                                  </div>
                                  <div className="text-sm line-clamp-4">
                                    <DisplayText
                                      htmlContent={row?.announcementDescription}
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
                          pageNumber={announcementcurrentPage}
                          totalPages={totalAnnouncementPages}
                          handlePageClick={handleAnnouncementPageClick}
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
  announcementcurrentPage: state.newsandmedia.announcementcurrentPage,
  pressreleasecurrentPage: state.newsandmedia.pressreleasecurrentPage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAnnouncementList: (payload) =>
    dispatch(performGetAnnouncementList(payload)),
  fetchPressReleaseList: (payload) =>
    dispatch(performGetPressReleaseList(payload)),
  setAnnouncementCurrentPage: (page) =>
    dispatch(setAnnouncementCurrentPage(page)),
  setPressReleaseCurrentPage: (page) =>
    dispatch(setPressReleaseCurrentPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsMedia);
