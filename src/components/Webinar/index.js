import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import about from "../../assets/images/About-us.jpg";
import join from "../../assets/images/Who-can-join-the-webinar.-scaled.jpg";
import corporateProfessional from "../../assets/images/corporate-professional.jpg";
import webinar from "../../assets/images/webinar.jpg";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import { performGetWebinarList } from "../../redux/actionCreators/webinarCreators";
import { BACKEND_URL } from "../../services/constant";
import SeoHeaderTitle from "../SeotitleHeader";

const Webinar = ({ handleWebinar }) => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[2]);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const result = await handleWebinar();
    if (result.status === 200) {
      const filtereData = result?.data?.docs?.data?.filter(
        (item) => item.status === true
      );
      setData(filtereData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const PastFilterData = data.filter(
    (item) => item.WebinarType === "Past Webinar"
  );
  const UpcomingFilterData = data.filter(
    (item) => item.WebinarType === "Upcoming Webinar"
  );

  return (
    <>
      {pageData && <SeoHeaderTitle pageData={pageData} />}
      <div>
        <div className="relative">
          <div className="xl:ml-28 relative z-10">
            <div className="border-0 relative active:border-0">
              <div className="absolute image-background2"></div>
              <img
                src={webinar}
                alt="events"
                className="image-carousal hidden md:block relative object-cover"
              />
              <img
                src={about}
                alt="events"
                className="image-carousal block md:hidden relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-1/4 bottom-0 right-0 left-0 z-10 text-left p-20">
                <h1 className="text-3xl md:text-6xl  font-semibold">
                  Webinars
                </h1>
              </div>
            </div>
            <div className="md:w-3/5 px-4 md:px-10 py-8 md:py-16 mx-6 md:mx-auto bg-red-800 text-white text-lg absolute -bottom-28 md:-bottom-24 z-20 right-0">
              <h3 className="text-sm md:text-lg">
                As a premier Healthcare Communications Company, we are dedicated
                to equipping professionals like you with the latest industry
                insights and trends. We take pride in offering free webinars on
                medical writing, scientific writing, enhanced publications,
                guidelines, tools and platforms and other relevant topics,
                allowing you to stay current with the ever-evolving healthcare
                landscape.
              </h3>
            </div>
          </div>
          <div className="bg-gray-100 w-full absolute top-64 -z-10 right-0 h-80"></div>
          <div className="bg-gray-100 w-full relative top-1/2 bottom-0 z-0 right-0 h-40"></div>
          <div className="bg-green-100 w-full relative">
            <div className="container mx-auto">
              <h2 className="md:text-5xl text-2xl mx-6 md:mx-0 pt-8 pb-16 font-semibold">
                What do our Webinars Offer?
              </h2>
              <div className="flex flex-col md:flex-row">
                <div className="w-auto md:w-1/2 mx-6 md:mx-0 pr-0 md:pr-8">
                  <div className="md:text-lg text-justify">
                    Joining our webinars is a unique opportunity to stay
                    informed about industry trends, best practices, and the
                    latest skills. Our webinars are conducted in a professional
                    and engaging manner, following the highest industry
                    standards. We use state-of-the-art technology and digital
                    platforms to ensure that our webinars are of the highest
                    quality. Our team is always available to answer your
                    questions and address any concerns you may have. We also
                    provide certificates of participation upon completion, which
                    can be added to your professional portfolio.
                  </div>
                </div>
                <div className="w-auto mx-6 md:mx-0 md:w-1/2 pb-6">
                  <img
                    src={corporateProfessional}
                    alt="news-image"
                    className="w-full md:w-3/4 h-full md:h-3/4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-gray-100">
            <div className="container mx-auto">
              <h2 className="text-2xl md:text-5xl font-semibold pt-4 mx-6 md:mx-0">
                Who Can Join?
              </h2>
              <div className="flex flex-col md:flex-row  justify-center md:justify-between py-8 md:py-12">
                <div className="w-auto mx-6 md:mx-0 md:w-1/2 pb-6">
                  <img
                    src={join}
                    alt="news-image"
                    className="w-full md:w-4/5 h-full md:h-4/5"
                  />
                </div>
                <div className="w-auto md:w-1/2 mx-6 md:mx-0 pr-0 md:pr-8">
                  <div className="md:text-lg text-justify">
                    Our free live webinars are tailored to meet the needs of
                    various industry professionals, including researchers,
                    scholars, graduates, academicians, and students. Our team of
                    experts comprises industry leaders with extensive experience
                    in healthcare communications. We understand that the
                    industry is constantly evolving, and we are committed to
                    providing you with the latest knowledge and tools to help
                    you stay ahead.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="py-12 container mx-auto">
              <h2 className="text-xl md:text-5xl font-semibold py-8 md:py-12 mx-6 md:mx-0">
                Our Upcoming Webinars
              </h2>
              <div className="md:text-lg pb-8 md:pb-12 mx-6 md:mx-0">
                Join us for our upcoming webinars and take the first step
                towards advancing your career in healthcare communications. Our
                webinars are an excellent opportunity to expand your knowledge,
                enhance your skills, and build your network within the industry.
                Don’t miss out on this unique opportunity to grow and learn from
                the best in the industry.
              </div>
              {UpcomingFilterData && (
                <div className="flex mx-6 md:mx-0 flex-wrap justify-center md:justify-start gap-8 my-12">
                  {UpcomingFilterData?.map((rowData) => {
                    return (
                      <Link
                        to={`/training/webinars/${rowData?.webinarLink
                          ?.toLowerCase()
                          ?.replace(/\s+/g, "-")}`}
                        key={rowData?._id}
                      >
                        <div className="border-4 shadow-xl border-gray-200 rounded-xl p-4 md:p-8 flex items-center justify-between flex-col gap-4 cursor-pointer Click-Card">
                          <img
                            src={BACKEND_URL + rowData?.webinarImage}
                            alt={rowData?.webinarName}
                            className="w-64 h-40 object-fill"
                          />
                          <h3 className="font-semibold text-center">
                            {rowData?.webinarName}
                          </h3>
                          <div className="font-semibold text-center text-red-800">
                            Webinar Date: {rowData?.webinarStartingDate}
                          </div>
                          <div className="border-2 px-2 py-1 border-red-800 rounded-full text-red-800 font-semibold text-center">
                            Click here to know more....
                          </div>
                          {rowData?.WebinarYoutubeLink !== "" && (
                            <iframe
                              loading="lazy"
                              src={rowData?.WebinarYoutubeLink}
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen={true}
                              className="entered lazyloaded w-full"
                              name="fitvid3"
                            ></iframe>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
              <h2 className="text-xl md:text-5xl font-semibold py-8 md:py-12 mx-6 md:mx-0">
                Past Webinars
              </h2>
              <div className="md:text-lg pb-8 md:pb-12 mx-6 md:mx-0">
                Our past webinars cover a wide range of topics, including
                industry trends, best practices, and case studies. Browse them
                to discover our expertise and stay tuned for our upcoming
                webinars.
              </div>
              {PastFilterData && (
                <div className="flex mx-6 md:mx-0 flex-wrap justify-center md:justify-start gap-8 my-12">
                  {PastFilterData?.map((rowData) => {
                    return (
                      <Link
                        to={`/training/webinars/${rowData?.webinarLink
                          ?.toLowerCase()
                          ?.replace(/\s+/g, "-")}`}
                        key={rowData?._id}
                      >
                        <div className="border-4 shadow-xl border-gray-200 rounded-xl p-4 md:p-8 flex items-center justify-between flex-col gap-4 cursor-pointer Click-Card">
                          <img
                            src={BACKEND_URL + rowData?.webinarImage}
                            alt={rowData?.webinarName}
                            className="w-64 h-40 object-fill"
                          />
                          <h3 className="font-semibold text-center">
                            {rowData?.webinarName}
                          </h3>
                          <div className="font-semibold text-center text-red-800">
                            Webinar Date: {rowData?.webinarStartingDate}
                          </div>
                          <div className="border-2 px-2 py-1 border-red-800 rounded-full text-red-800 font-semibold text-center">
                            Click here to know more....
                          </div>
                          {rowData?.WebinarYoutubeLink !== "" && (
                            <iframe
                              loading="lazy"
                              src={rowData?.WebinarYoutubeLink}
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen={true}
                              className="entered lazyloaded w-full"
                              name="fitvid3"
                            ></iframe>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleWebinar: (payload) => dispatch(performGetWebinarList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Webinar);
