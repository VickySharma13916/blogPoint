import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import team from "../../assets/images/team.png";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import { performGetTuracozTeamList } from "../../redux/actionCreators/aboutCreators";
import { BACKEND_URL } from "../../services/constant";
import PopUpData from "../PopupTeam";
import SeoHeaderTitle from "../SeotitleHeader";
import { useLocation } from "react-router-dom";

const Teams = ({ getTeamData }) => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[2]);
  const [showPopup, setShowPopup] = useState(false);
  const [userData, setUserData] = useState(null);
  const [newdata, setData] = useState([]);
  const handleShowPopup = (data) => {
    setShowPopup(true);
    setUserData(data);
  };
  const handleHidePopup = () => {
    setShowPopup(false);
  };
  const fetchBlogDetail = async () => {
    const result = await getTeamData();
    if (result.status === 200) {
      setData(result?.data);
    }
  };
  const firstData = newdata?.[0];
  const secondToFourthData = newdata?.slice(1, 5);
  const restData = newdata?.slice(5);

  useEffect(() => {
    fetchBlogDetail();
  }, []);
  return (
    <>
      {pageData && <SeoHeaderTitle pageData={pageData} />}
      <div>
        <div className="relative">
          <div className="xl:ml-28 relative z-10">
            <div className="border-0 relative active:border-0">
              <div className="absolute image-background2"></div>
              <img
                src={team}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-1/3 bottom-0 right-0 left-0 z-10 text-left p-6 md:p-10 xl:p-20">
                <h1 className="xl:text-7xl text-5xl font-semibold">Our Team</h1>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 w-full absolute top-64 -z-10 right-0 h-80"></div>
        </div>
        <div className="bg-gray-100 w-full relative">
          <div className="container mx-auto pb-4">
            <h2 className="text-5xl pt-12 pb-16 font-semibold text-center">
              Leadership
            </h2>
            <div className="flex justify-center items-center md:items-start mx-6 xl:mx-0 flex-col xl:flex-row p-6 md:p-12 bg-white rounded-xl xl:justify-between gap-6">
              <img
                src={BACKEND_URL + firstData?.teamImage}
                alt="Director"
                className="object-contain rounded-xl w-full h-96"
              />
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold mt-4">
                  {firstData?.teamName}
                </h3>
                <div className="text-red-800">{firstData?.teamDesignation}</div>
                <div className="line-clamp-6 md:line-clamp-5 text-sm md:text-lg">
                  {firstData?.teamAbout}
                </div>
                <div
                  className="font-semibold cursor-pointer text-center md:text-left"
                  onClick={() => handleShowPopup(firstData)}
                >
                  Read More
                </div>
              </div>
            </div>
            <div className="grid my-12 grid-cols-1 md:grid-cols-2 gap-8">
              {secondToFourthData &&
                secondToFourthData?.map((rowData) => {
                  return (
                    <div
                      key={rowData?._id}
                      className="flex flex-col p-6 mx-6 xl:mx-0 md:p-12 bg-white rounded-xl justify-between gap-6"
                    >
                      <img
                        src={BACKEND_URL + rowData.teamImage}
                        alt={rowData.teamName}
                        className="object-contain rounded-xl"
                      />
                      <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-semibold mt-4 line-clamp-1">
                          {rowData.teamName}
                        </h3>
                        <div className="text-red-800 line-clamp-1">
                          {rowData.teamDesignation}
                        </div>
                        <div className="text line-clamp-3">
                          {rowData.teamAbout}
                        </div>
                        <div
                          className="font-semibold cursor-pointer text-center md:text-left"
                          onClick={() => handleShowPopup(rowData)}
                        >
                          Read More
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="realtive w-full">
          <div className="container mx-auto">
            <h2 className="md:text-5xl text-2xl py-16 font-semibold text-center">
              Core Team
            </h2>
            <div className="grid px-6 xl:px-0 container justify-items-center md:justify-items-end mx-auto my-12 grid-cols-1 md:grid-cols-2 gap-32 md:gap-16">
              {restData &&
                restData?.map((rowData) => {
                  return (
                    <div
                      key={rowData?._id}
                      className="flex border md:w-4/5 border-gray-400 p-8 bg-white rounded-xl justify-center md:justify-end relative gap-6"
                    >
                      <img
                        src={BACKEND_URL + rowData.teamImage}
                        alt={rowData.teamName}
                        className="object-contain absolute -top-24 md:top-1/4 left-1/4 md:-left-12 w-32 h-36 rounded-xl"
                      />
                      <div className="flex flex-col gap-4 w-4/5">
                        <h3 className="text-xl font-semibold line-clamp-1 mt-4">
                          {rowData.teamName}
                        </h3>
                        <div className="text-red-800 line-clamp-1">
                          {rowData.teamDesignation}
                        </div>
                        <div className="text line-clamp-3">
                          {rowData.teamAbout}
                        </div>
                        <div
                          className="font-semibold cursor-pointer"
                          onClick={() => handleShowPopup(rowData)}
                        >
                          Read More
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {showPopup && (
          <PopUpData
            data={userData}
            handleHidePopup={handleHidePopup}
            showPopup={showPopup}
          />
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.about.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getTeamData: (payload) => dispatch(performGetTuracozTeamList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
