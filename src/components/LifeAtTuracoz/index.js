import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import arrowdown from "../../assets/images/arrow-down.png";
import lifeAtTura from "../../assets/images/life-at-turacoz-2.jpg";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import {
  performGetImageSliderAboutList,
  performGetLifeAtTuracozTeamList,
} from "../../redux/actionCreators/aboutCreators";
import { BACKEND_URL } from "../../services/constant";
import PopUpData from "../PopupTeam";
import SeoHeaderTitle from "../SeotitleHeader";
import { useLocation } from "react-router-dom";

const LifeAtTuracoz = ({ getTeamData, getImageSliderData }) => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[2]);
  const [showPopup, setShowPopup] = useState(false);
  const [userData, setUserData] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [newdata, setData] = useState([]);
  const [imageData, setImageData] = useState([]);
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
  const restData = newdata?.slice(1);

  const fetchImageSLiderData = async () => {
    const result = await getImageSliderData();
    if (result.status === 200) {
      setImageData(result?.data);
    }
  };

  useEffect(() => {
    fetchBlogDetail();
    fetchImageSLiderData();
  }, []);
  // const data = {
  //   image: manshi,
  //   title: "Mansi Mishra",
  //   designation: "Lead Medical Writer",
  //   about:
  //     "I am going to complete three years at Turacoz, and I am still learning! The organization has given me great opportunities to learn and work for the best and the brightest with a room for growth and development, while working from home. Turacoz has a friendly, supportive, and collaborative work culture, with wonderful people across all the teams who always support and help each other. The projects are diverse and highly stimulating and can really help one hone their medical writing skills and eventually acquire expertise in several types of medical communication documents across different therapeutic areas.",
  // };

  // const lifeturacozteamImages = [
  //   lifeTeam1,
  //   lifeTeam2,
  //   lifeTeam3,
  //   lifeTeam4,
  //   lifeTeam5,
  // ];
  // const imageData = [
  //   "Birthday celebrations are always fun filled at Turacoz offices. In this picture, team members are all excited as they sing Happy Birthday to Himashu Rajput in Meerut.",
  //   "Who says birthday celebrations at work can only happen at offices? Every Turon who works from home or elsewhere receives their sweet pleasures like Chinthana Bhat did.",
  //   "And... We welcomed New Year 2023 with great enthusiasm, bright smiles and lots of creativity!!! ",
  //   "Here’s a picture from one of our team’s business trips to Dubai. Our business development experts, Dr Shruti & Harshita, did a commendable job representing us before clients!",
  //   " Our talented and hard-working girls on a well-deserved lunch date in Bengaluru, India!  ",
  // ];

  let settings = {
    dots: false,
    infinite: true,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  let settingData = {
    dots: false,
    infinite: true,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  useEffect(() => {
    if (imageSliderRef.current && textSliderRef.current) {
      imageSliderRef.current.slickGoTo(currentSlide);
      textSliderRef.current.slickGoTo(currentSlide);
    }
  }, [currentSlide]);

  const imageSliderRef = useRef(null);
  const textSliderRef = useRef(null);

  const handlePreviousClick = () => {
    imageSliderRef.current.slickPrev();
    textSliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    imageSliderRef.current.slickNext();
    textSliderRef.current.slickNext();
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
                src={lifeAtTura}
                alt="lifeAtTuracoz"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-6 md:p-10 xl:p-20">
                <h1 className="xl:text-7xl md:text-4xl text-3xl font-semibold">
                  Life At Turacoz
                </h1>
                <h3 className="md:text-lg xl:w-2/3 md:1/2 my-4 md:my-8">
                  At Turacoz, we put our customers at the center of everything
                  we do. We use cutting-edge technology, a talented workforce,
                  and efficient processes to drive customer satisfaction and
                  engagement. While we take our work seriously and strive to
                  make a positive impact on the world, we also know how to have
                  fun and foster a sense of community among our employees.
                </h3>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 w-full absolute top-64 -z-10 right-0 h-80"></div>
        </div>
        <div className="bg-gray-100 w-full relative">
          <div className="container  px-6 xl:px-0 mx-auto pb-4">
            <h2 className="md:text-5xl text-2xl pt-12 pb-16 font-semibold">
              We Are Turons
            </h2>
            <div className="md:text-lg leading-8">
              We are strong believers in flexibility and connectivity. Whether
              you’re working from one of our offices or from anywhere else in
              the world, you’ll be able to enjoy a unique bond with your
              colleagues. On this page, you’ll find the stories of our
              employees, also called <b>Turons</b>, who will share their
              experiences of how they got to Turacoz, their roles, and some fun
              anecdotes.
            </div>
            <div className="md:text-lg my-6 md:my-12 leading-8">
              At Turacoz, we are proud to offer our employees the flexibility to
              work from anywhere, which contributes to the diversity and beauty
              of our workplace. So come join us and be a part of the Turacoz
              story. You might even find yourself featured on this page with a
              story or a picture that’s worth sharing.
            </div>
          </div>
        </div>
        <div className="relative team-carousal">
          <div className="xl:ml-28 py-12">
            <h2 className="text-4xl px-6 md:px-0 font-semibold md:font-medium">
              Team Gallery
            </h2>
            <div className="flex flex-col md:flex-row">
              <div className="slider-carousal">
                <Slider {...settingData} ref={textSliderRef}>
                  {imageData &&
                    imageData.map((data) => (
                      <h4
                        key={data?._id}
                        className="px-6 xl:px-0 md:pr-6 my-12"
                      >
                        {data?.turacozAboutImage}
                      </h4>
                    ))}
                </Slider>
              </div>
              <div className="slider-container pt-20 md:pt-0">
                <Slider {...settings} ref={imageSliderRef}>
                  {imageData &&
                    imageData.map((data) => (
                      <div key={data?._id} className="slide px-6 xl:px-0 ">
                        <img
                          src={BACKEND_URL + data?.turacozImage}
                          alt={data?.turacozAboutImage}
                          className="slider-image object-cover"
                        />
                      </div>
                    ))}
                </Slider>
              </div>
              <div className="flex absolute  gap-6 left-28 bottom-96 pb-20 md:pb-0 md:bottom-16">
                <button
                  className="w-12 flex justify-center items-center h-12 border border-gray-400 rounded-full"
                  onClick={handlePreviousClick}
                >
                  <img
                    src={arrowdown}
                    alt="arrowdown"
                    className="rotate-180 w-6 hover:scale-125"
                  />
                </button>
                <button
                  className="w-12 flex justify-center items-center h-12 border border-gray-400 rounded-full"
                  onClick={handleNextClick}
                >
                  <img
                    src={arrowdown}
                    alt="arrowdown"
                    className="w-6 hover:scale-125"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="realtive bg-gray-100 w-full">
          <div className="container px-6 xl:px-0 mx-auto">
            <h2 className="md:text-5xl text-3xl py-16 font-semibold">
              Turons Talk
            </h2>
            <div className="flex flex-col xl:flex-row items-center bg-white justify-between gap-6">
              <img
                src={BACKEND_URL + firstData?.turacozteamImage}
                alt={firstData?.turacozteamName}
                className="object-contain xl:w-1/2"
              />
              <div className="flex flex-col pt-8 pb-12 px-4 gap-4">
                <div className="text-xl font-semibold">
                  {firstData?.turacozteamName}
                </div>
                <div className="text-red-800">
                  {firstData?.turacozteamDesignation}
                </div>
                <div className="h-36">
                  <div className="line-clamp-2">
                    {firstData?.turacozteamAbout}
                  </div>
                </div>
                <div
                  className="font-semibold cursor-pointer"
                  onClick={() => handleShowPopup(firstData)}
                >
                  Read More
                </div>
              </div>
            </div>
            <div className="grid pt-8 pb-12 grid-cols-1 gap-6 md:grid-cols-2">
              {restData &&
                restData?.map((rowData) => {
                  return (
                    <div
                      key={rowData?._id}
                      className="flex flex-col xl:flex-row bg-white justify-between"
                    >
                      <img
                        src={BACKEND_URL + rowData.turacozteamImage}
                        alt={rowData.turacozteamName}
                        className="object-contain grayscale w-80"
                      />
                      <div className="flex flex-col p-4 gap-4">
                        <div className="text-xl font-semibold mt-4 line-clamp-1">
                          {rowData.turacozteamName}
                        </div>
                        <div className="text-red-800 line-clamp-1">
                          {rowData.turacozteamDesignation}
                        </div>
                        <div className="h-52">
                          <div className="text-sm line-clamp-5">
                            {rowData.turacozteamAbout}
                          </div>
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
  getTeamData: (payload) => dispatch(performGetLifeAtTuracozTeamList(payload)),
  getImageSliderData: (payload) =>
    dispatch(performGetImageSliderAboutList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LifeAtTuracoz);
