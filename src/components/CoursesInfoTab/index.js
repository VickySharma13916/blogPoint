import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import background from "../../assets/images/backgroundimage.webp";
import certificate1 from "../../assets/images/certificate1.jpg";
import certificate2 from "../../assets/images/certificate2.jpg";
import certificateCourse from "../../assets/images/certificateCourse.jpg";
import quotes from "../../assets/images/quotes.png";
import tura1 from "../../assets/images/tura1.jpg";
import user1 from "../../assets/images/user1.png";
import { performGetCourseDetail } from "../../redux/actionCreators/courseCreators";
import { BACKEND_URL } from "../../services/constant";
import DisplayText from "../DisplayHtmlText";
import RegisterForm from "../RegisterForm";
import Loading from "../Loading";

const CoursesTabInfo = ({ handleCourseDetail }) => {
  const location = useLocation();
  let url = location.pathname.split("/");
  const id = url[3];
  const [data, setData] = useState(null);
  const [isVisible, setIsVisible] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);

  const fetchData = async () => {
    const result = await handleCourseDetail(id);
    if (result.status === 200) {
      setData(result?.data?.docs);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const evenElements = data?.briefAbout?.filter((_, index) => index % 2 === 0);
  const oddElements = data?.briefAbout?.filter((_, index) => index % 2 !== 0);

  const Section = ({ data, isVisible, handleShowDescription }) => {
    return (
      <div
        className="border border-gray-200 bg-gray-50 transition-all p-6 cursor-pointer"
        onClick={() => handleShowDescription()}
        key={data?._id}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl md:text-3xl font-semibold">
            {data?.AccordionTitle}
          </h3>
          <button>
            {isVisible ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
          </button>
        </div>
        {isVisible && (
          <div className="border-t flex flex-col py-4 mt-2 md:text-lg">
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
                <title>
                  {data?.metaTitle
                    ? data?.metaTitle
                    : "Courses | Turacoz Healthcare Solutions"}
                </title>
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
                {data?.courseImage && (
                  <meta
                    property="og:image"
                    content={BACKEND_URL + data?.courseImage}
                  />
                )}
                <meta property="og:url" content={currentURL} />
                <meta property="og:type" content="courses" />
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
                {data?.courseImage && (
                  <meta
                    name="twitter:image"
                    content={BACKEND_URL + data?.courseImage}
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
                          data?.courseImage
                            ? BACKEND_URL + data?.courseImage
                            : certificateCourse
                        }
                        alt="events"
                        className="image-carousal relative object-cover"
                      />
                      <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-6 md:p-12">
                        <h1 className="md:text-6xl text-2xl font-semibold md:w-4/5 w-full">
                          {data?.courseName && data?.courseName}
                        </h1>
                        {data?.courseOtherLinks && (
                          <div className="flex md:flex-row flex-col md:gap-4 py-8">
                            {data?.courseOtherLinks.some(
                              (link) => link?.CourseOtherName === "Register"
                            ) ? (
                              <div
                                className="text-red-800 w-fit md:text-lg border-2 cursor-pointer border-red-800 font-semibold bg-white py-1 px-4"
                                onClick={handleShowRegister}
                              >
                                <h4>Register</h4>
                              </div>
                            ) : null}
                            {data?.courseOtherLinks.map(
                              (link) =>
                                link?.CourseOtherName !== "Register" && (
                                  <div
                                    key={link._id}
                                    className="text-red-800 w-fit md:text-lg border-2 border-red-800 font-semibold bg-white py-1 px-4"
                                  >
                                    <Link to={link?.CourseOtherLink}>
                                      <h4>{link?.CourseOtherName}</h4>
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
                    <div className=" my-12 md:my-20 mx-6 md:mx-0">
                      <img
                        src={
                          data?.courseTimeLineImage
                            ? BACKEND_URL + data?.courseTimeLineImage
                            : certificate1
                        }
                        alt="webinar1image"
                      />
                    </div>
                  </div>
                  {evenElements?.length > 0 &&
                    evenElements?.map((item) => {
                      return (
                        <div
                          className="bg-green-100 w-full relative"
                          key={item._id}
                        >
                          <div className="container pb-8 md:pb-12 mx-auto">
                            <h2 className="md:text-5xl text-2xl mx-6 md:mx-0 pt-8 pb-8 md:pb-16 font-semibold">
                              {item?.AboutTitle}
                            </h2>
                            <div className="flex flex-col md:flex-row">
                              <div className="w-auto md:w-1/2 mx-6 md:mx-0 pr-0 md:pr-8">
                                <div className="md:text-lg text-justify">
                                  <DisplayText
                                    htmlContent={item?.AboutDescription}
                                  />
                                </div>
                              </div>
                              <div className="w-auto mx-6 md:mx-0 md:w-1/2 pb-6">
                                <img
                                  src={
                                    item?.AboutImage
                                      ? BACKEND_URL + item?.AboutImage
                                      : tura1
                                  }
                                  alt="news-image"
                                  className="w-full md:w-3/4 h-full md:h-3/4"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  {oddElements?.length > 0 &&
                    oddElements?.map((item) => {
                      return (
                        <div className=" bg-gray-100" key={item?._id}>
                          <div className="container mx-auto">
                            <h2 className="text-xl md:text-5xl font-semibold pt-6 mx-6 md:mx-0">
                              {item?.AboutTitle}
                            </h2>
                            <div className="flex flex-col md:flex-row items-center md:items-start justify-center mx-6 md:mx-0 md:gap-8 md:justify-between py-8 md:py-12">
                              <div className="w-full md:w-1/2 h-full md:h-1/2 rounded-lg p-8 bg-gray-200">
                                <img
                                  src={
                                    item?.AboutImage
                                      ? BACKEND_URL + item?.AboutImage
                                      : certificate2
                                  }
                                  alt="news-image"
                                  className="w-full h-full"
                                />
                              </div>
                              <div className="w-auto md:w-1/2 my-8 md:my-0 pr-0 md:pr-8">
                                <div className="md:text-lg text-justify">
                                  <DisplayText
                                    htmlContent={item?.AboutDescription}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  <div className="w-full">
                    {data?.accordionSections?.length > 0 && (
                      <div className="py-12 container mx-auto">
                        <div className="py-12"></div>
                        <h2 className="border border-gray-200 p-6 text-2xl md:text-4xl mx-6 md:mx-0 font-semibold text-center">
                          Detailed Week Wise Agenda
                        </h2>
                        <div className="flex flex-col my-12 mx-6 md:mx-0 gap-4 md:gap-12">
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
                      </div>
                    )}
                  </div>
                  {data?.joinCourseImageSlider?.length > 0 && (
                    <div className="bg-gray-100 relative">
                      <div className="container mx-auto py-10">
                        <h2 className="md:text-5xl text-2xl mx-6 md:mx-0 py-8 md:py-16 leading-10 font-semibold">
                          Who Can Join This Course?
                        </h2>
                      </div>
                      {data?.joinCourseImageSlider && (
                        <div className="xl:ml-28 md:mr-0 mx-6 relative z-10 slick-courses">
                          <Slider {...settingCarousal}>
                            {data?.joinCourseImageSlider?.map((item, index) => (
                              <div key={item?._id} className="md:pr-8 relative">
                                <img
                                  src={BACKEND_URL + item?.joinImage}
                                  alt="carousal"
                                  className="image-carousal_second relative"
                                />
                                {index === activeSlide && (
                                  <h3 className="flex flex-col carousal-text  md:text-xl font-semibold text-white bg-red-800 relative z-20 text-left p-6 xl:p-10 w-full">
                                    {item?.joinDescription}
                                  </h3>
                                )}
                              </div>
                            ))}
                          </Slider>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="w-full">
                    <div className="container mx-auto">
                      {data?.trainerProfiles?.length > 0 && (
                        <>
                          <h2 className="my-12 text-center text-2xl md:text-6xl font-semibold">
                            Trainers Profile
                          </h2>
                          <div className="flex mx-6 md:mx-0 flex-wrap py-12 justify-center md:justify-between gap-12">
                            {data?.trainerProfiles?.map((item) => {
                              return (
                                <div
                                  className="py-8 px-8 md:px-10 flex flex-col items-center w-full md:w-80 border-gray-300 rounded-xl shadow-2xl"
                                  key={item?._id}
                                >
                                  <img
                                    src={BACKEND_URL + item?.trainerImage}
                                    alt={item?.trainerName}
                                    className="w-48 h-56"
                                  />
                                  <div className="mt-4 md:text-xl text-center md:text-left font-semibold">
                                    {item?.trainerName}
                                  </div>
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
                    </div>
                  </div>
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
                                      <h4 className="text-xl my-8 font-medium text-white">
                                        {item?.studentName}
                                      </h4>
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
                  <div className="w-full">
                    <div className="container my-12 mx-auto">
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
          {showRegister && (
            <RegisterForm
              handlehideRegister={handlehideRegister}
              showRegister={showRegister}
              userData={userData}
            />
          )}
        </>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleCourseDetail: (payload) => dispatch(performGetCourseDetail(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesTabInfo);
