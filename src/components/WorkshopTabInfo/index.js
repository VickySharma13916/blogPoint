import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import background from "../../assets/images/backgroundimage.webp";
import quotes from "../../assets/images/quotes.png";
import user1 from "../../assets/images/user1.png";
import webinarTab from "../../assets/images/webinarTab.png";
import workshopid from "../../assets/images/workshopid.jpg";
import useWindowToTop from "../../hooks/useWindowToTop";
import { performGetWorkshopDetail } from "../../redux/actionCreators/workshopCreators";
import { BACKEND_URL } from "../../services/constant";
import DisplayText from "../DisplayHtmlText";
import RegisterForm from "../RegisterForm";
import Loading from "../Loading";

const WorkshopTabInfo = ({ handleWorkshopDetail }) => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location.pathname.split("/");
  const id = url[3];
  const [data, setData] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState("");

  const fetchData = async () => {
    const result = await handleWorkshopDetail(id);
    if (result.status === 200) {
      setData(result?.data?.docs);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const Section = ({ data, isVisible, handleShowDescription }) => {
    return (
      <div
        className="border border-gray-200 bg-gray-50 transition-all p-6 cursor-pointer"
        key={data?._id}
        onClick={() => handleShowDescription()}
      >
        <div className="flex justify-between items-center">
          <div className="text-xl md:text-3xl font-semibold">
            {data?.AccordionTitle}
          </div>
          <button>
            {isVisible ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
          </button>
        </div>
        {isVisible && (
          <div className="list-decimal border-t flex flex-col md:text-lg py-4 mt-2">
            <DisplayText htmlContent={data?.AccordionDescription} />
          </div>
        )}
      </div>
    );
  };
  const settingCarousal = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let settingUser = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const [currentURL, setCurrentURL] = useState("");
  useEffect(() => {
    setCurrentURL(window.location.href);
  }, []);

  const [showRegister, setShowRegister] = useState(false);

  const [userData, setuserData] = useState("");

  const handleShowRegister = () => {
    setShowRegister(true);
    const newdata = {
      link: data?.coursesLink,
    };
    setuserData(newdata);
  };

  const handlehideRegister = () => {
    setShowRegister(false);
  };
  return (
    <>
      {data === null ? (
        <Loading />
      ) : (
        <>
          {data && (
            <>
              <Helmet>
                <title>{data?.metaTitle ? data?.metaTitle : "Workshop"}</title>
                {data?.metaDescription && (
                  <meta name="description" content={data?.metaDescription} />
                )}
                <link rel="canonical" href={currentURL} />
                {data?.metaTitle && (
                  <meta property="og:title" content={data?.metaTitle} />
                )}
                {data?.metaDescription && (
                  <meta
                    property="og:description"
                    content={data?.metaDescription}
                  />
                )}
                {data?.workshopImage && (
                  <meta
                    property="og:image"
                    content={BACKEND_URL + data?.workshopImage}
                  />
                )}
                <meta property="og:url" content={currentURL} />
                <meta property="og:type" content="workshop" />
                <meta name="twitter:site" content="@turacoz" />
                <meta property="twitter:card" content="summary_large_image" />
                {data?.metaTitle && (
                  <meta name="twitter:title" content={data?.metaTitle} />
                )}
                {data?.metaDescription && (
                  <meta
                    name="twitter:description"
                    content={data?.metaDescription}
                  />
                )}
                {data?.workshopImage && (
                  <meta
                    name="twitter:image"
                    content={BACKEND_URL + data?.workshopImage}
                  />
                )}
              </Helmet>
              <div>
                <div className="relative">
                  <div className="xl:ml-28 relative z-10">
                    <div className="border-0 relative active:border-0">
                      <div className="absolute image-background2"></div>
                      <img
                        src={
                          data?.workshopImage
                            ? BACKEND_URL + data?.workshopImage
                            : webinarTab
                        }
                        alt={data?.workshopName}
                        className="image-carousal relative object-cover"
                      />
                      <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-6 md:p-20">
                        <h1 className="text-3xl md:text-7xl w-full font-semibold webinartab">
                          {data?.workshopName && data?.workshopName}
                        </h1>
                        {data?.workshopOtherLinks && (
                          <div className="flex md:flex-row flex-col md:gap-4 py-8">
                            {data?.workshopOtherLinks.some(
                              (link) => link?.workshopOtherName === "Register"
                            ) ? (
                              <div
                                className="text-red-800 w-fit md:text-lg border-2 cursor-pointer border-red-800 font-semibold bg-white py-1 px-4"
                                onClick={handleShowRegister}
                              >
                                <h4>Register</h4>
                              </div>
                            ) : null}
                            {data?.workshopOtherLinks.map(
                              (link) =>
                                link?.workshopOtherName !== "Register" && (
                                  <div
                                    key={link._id}
                                    className="text-red-800 w-fit md:text-lg border-2 border-red-800 font-semibold bg-white py-1 px-4"
                                  >
                                    <Link to={link?.workshopOtherLinks}>
                                      <h4>{link?.workshopOtherName}</h4>
                                    </Link>
                                  </div>
                                )
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="container mx-auto">
                    <div className="my-12 md:my-20 mx-6 md:mx-0">
                      <img
                        src={
                          data?.workshopTimeLineImage
                            ? BACKEND_URL + data?.workshopTimeLineImage
                            : workshopid
                        }
                        alt="webinar1image"
                      />
                    </div>
                  </div>
                  {data?.briefAbout?.length > 0 && (
                    <div>
                      {data.briefAbout.map((item, index) => (
                        <div
                          key={index}
                          className={`${
                            index % 2 === 0 ? "bg-green-100" : "bg-gray-100"
                          } w-full relative`}
                        >
                          <div className="container md:pb-12 mx-auto">
                            <h2 className="md:text-5xl text-2xl mx-6 md:mx-0 pt-8 pb-8 md:pb-16 font-semibold">
                              {item.AboutTitle}
                            </h2>
                            <div className="flex flex-col md:flex-row gap-4">
                              {index % 2 === 0 ? (
                                <>
                                  <div className="w-auto md:w-1/2 mx-6 md:mx-0 pr-0 md:pr-8">
                                    <div className="md:text-lg text-justify">
                                      <DisplayText
                                        htmlContent={item.AboutDescription}
                                      />
                                    </div>
                                  </div>
                                  <div className="w-auto mx-6 md:mx-0 md:w-1/2 pb-6">
                                    <img
                                      src={BACKEND_URL + item.AboutImage}
                                      alt="news-image"
                                      className="w-full md:w-3/4 h-full md:h-3/4"
                                    />
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="w-full md:w-1/2 h-full md:h-1/2 rounded-lg p-8 bg-gray-200">
                                    <img
                                      src={BACKEND_URL + item.AboutImage}
                                      alt="conference"
                                      className="w-full h-full"
                                    />
                                  </div>
                                  <div className="w-auto md:w-1/2 my-8 md:my-0 pr-0 md:pr-8">
                                    <DisplayText
                                      htmlContent={item.AboutDescription}
                                    />
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {data?.joinworkshopImageSlider?.length > 0 && (
                    <div className="bg-gray-100 relative">
                      <div className="container mx-auto py-10">
                        <h2 className="md:text-5xl text-2xl mx-6 md:mx-0 py-8 md:py-16 leading-10 font-semibold">
                          Who Can Join This Course?
                        </h2>
                      </div>
                      {data?.joinworkshopImageSlider && (
                        <div className="xl:ml-28 md:mr-0 mx-6 relative z-10 slick-courses">
                          <Slider {...settingCarousal}>
                            {data?.joinworkshopImageSlider?.map(
                              (item, index) => (
                                <div
                                  key={item?._id}
                                  className="md:pr-8 relative"
                                >
                                  <img
                                    src={BACKEND_URL + item?.joinImage}
                                    alt="carousal"
                                    className="image-carousal_second relative"
                                  />
                                  {index === activeSlide && (
                                    <div className="flex flex-col carousal-text  md:text-xl font-semibold text-white bg-red-800 relative z-20 text-left p-6 xl:p-10 w-full">
                                      {item?.joinDescription}
                                    </div>
                                  )}
                                </div>
                              )
                            )}
                          </Slider>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="w-full">
                    <div className="py-12 container mx-auto">
                      <div className="py-12"></div>
                      {data?.accordionSections?.length > 0 && (
                        <>
                          <h2 className="border border-gray-200 p-6 text-2xl md:text-4xl mx-6 md:mx-0 font-semibold text-center">
                            Agenda
                          </h2>
                          <div className="flex flex-col mt-12 mx-6 md:mx-0 gap-4 md:gap-12">
                            {data?.accordionSections?.map((rowData) => {
                              return (
                                <React.Fragment key={rowData?._id}>
                                  <Section
                                    data={rowData}
                                    isVisible={
                                      isVisible === rowData?.AccordionTitle
                                    }
                                    handleShowDescription={() =>
                                      setIsVisible(
                                        isVisible === rowData?.AccordionTitle
                                          ? ""
                                          : rowData?.AccordionTitle
                                      )
                                    }
                                  />
                                </React.Fragment>
                              );
                            })}
                          </div>
                        </>
                      )}
                      {data?.trainerProfiles?.length > 0 && (
                        <>
                          <h2 className="my-12 text-center text-2xl md:text-6xl font-semibold">
                            Trainers Profile
                          </h2>
                          <div className="flex mx-6 md:mx-0 flex-wrap py-12 justify-center gap-12">
                            {data?.trainerProfiles?.map((item) => {
                              return (
                                <div
                                  className="py-8 px-8 md:px-10 flex flex-col items-center w-full md:w-96 border-gray-300 rounded-xl shadow-2xl"
                                  key={item?._id}
                                >
                                  <img
                                    src={BACKEND_URL + item?.trainerImage}
                                    alt={item?.trainerName}
                                    className="w-48 h-56"
                                  />
                                  <h4 className="mt-4 md:text-xl text-center md:text-left font-semibold">
                                    {item?.trainerName}
                                  </h4>
                                  <div className="md:text-xl mt-4 font-semibold text-center text-red-800">
                                    {item?.trainerDesignation}
                                  </div>
                                  <div className="my-4 md:my-12 font-semibold text-center text-xl md:text-2xl">
                                    {item?.trainerCompany}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </>
                      )}
                      {data?.testimonials?.length > 0 && (
                        <div className="w-full relative testimonial-back">
                          <img
                            src={background}
                            alt="background"
                            className="relative z-0 w-full background-carousal h-screen"
                          />
                          <div className="absolute top-0 bottom-0 left-0 right-0 z-10">
                            <div className="container py-8 mx-auto testimonial">
                              <div className="flex flex-col justify-center md:flex-row md:items-center w-full">
                                <h2 className="md:text-5xl text-2xl mx-6 md:mx-0 py-6 md:py-16 leading-10 font-semibold text-white">
                                  Testimonials
                                </h2>
                                <img
                                  src={quotes}
                                  alt="quotes"
                                  className="hidden md:block w-20 h-20 mb-8 ml-8"
                                />
                              </div>
                              {data?.testimonials && (
                                <Slider
                                  {...settingUser}
                                  className="mx-6 md:mx-0 relative"
                                >
                                  {data?.testimonials?.map((item) => {
                                    return (
                                      <div
                                        key={item?._id}
                                        className="relative flex flex-col md:flex-row gap-4 md:gap-8 w-full md:w-3/4 mx-auto items-center md:items-start"
                                      >
                                        <img
                                          src={
                                            item?.studentImage
                                              ? BACKEND_URL + item?.studentImage
                                              : user1
                                          }
                                          alt={item?.studentName}
                                          className="w-24 h-24 object-cover rounded-full"
                                        />
                                        <div className="flex flex-col">
                                          <div className="md:text-lg text-sm text-white text-justify">
                                            {item?.studentDescription}
                                          </div>
                                          <h3 className="text-xl my-8 font-medium text-white">
                                            {item?.studentName}
                                          </h3>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </Slider>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="flex justify-start md:justify-end font-semibold">
                        <div className="md:text-right text-left pl-6 md:pl-0">
                          <h3 className="text-xl md:text-2xl">
                            Contact Details
                          </h3>
                          <div className="text-lg md:text-xl text-red-800">
                            {data?.contactInformation?.name}
                          </div>
                          <div className="text-lg md:text-xl text-red-800">
                            {data?.contactInformation?.designation}
                          </div>
                          {data?.contactInformation?.phoneNumber && (
                            <div className="text-lg md:text-xl">
                              +91-
                              {data?.contactInformation?.phoneNumber}
                            </div>
                          )}
                          <div className="text-lg md:text-xl cursor-pointer">
                            <a
                              href="mailto:info@turacoz.com"
                              className="no-underline"
                            >
                              {data?.contactInformation?.email}
                            </a>
                          </div>
                          <div className="text-lg md:text-xl cursor-pointer">
                            <a
                              href="mailto:info@turacoz.com"
                              className="no-underline"
                            >
                              {data?.contactInformation?.alternateEmail}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
      {showRegister && (
        <RegisterForm
          handlehideRegister={handlehideRegister}
          showRegister={showRegister}
          userData={userData}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleWorkshopDetail: (payload) =>
    dispatch(performGetWorkshopDetail(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopTabInfo);
