import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import c1 from "../../../assets/images/ca1.png";
import c2 from "../../../assets/images/ca2.png";
import c3 from "../../../assets/images/ca3.png";
import c4 from "../../../assets/images/ca4.png";
import conferencemain from "../../../assets/images/conferencemain.jpg";
import usePageData from "../../../hooks/useMetaData";
import useWindowToTop from "../../../hooks/useWindowToTop";
import SeoHeaderTitle from "../../SeotitleHeader";

const ConferenceActivities = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[3]);

  const ActivityImage = [
    {
      image: c1,
      text: "Data Curation From Congress Website",
    },
    {
      image: c2,
      text: "Abstract Booklet",
    },
    {
      image: c3,
      text: "Congress Report",
    },
    {
      image: c4,
      text: "Newsletter",
    },
  ];
  const items = [
    { value: "100", label: "Abstracts Submitted" },
    { value: "100", label: "Posters Developed" },
    { value: "100", label: "Slide Decks Developed" },
    { value: "10", label: "Therapeutic Areas" },
  ];
  return (
    <>
      {pageData && <SeoHeaderTitle pageData={pageData} />}
      <div>
        <div className="relative">
          <div className="xl:ml-28 relative z-10">
            <div className="border-0 relative active:border-0">
              <div className="absolute image-background1"></div>
              <img
                src={conferencemain}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-10 md:p-20">
                <h1 className="text-2xl md:text-7xl w-full md:w-1/3 font-semibold">
                  Conference Activities
                </h1>
                <h3 className="md:text-lg my-4 md:w-1/2 w-full">
                  Publications can also be targeted for presentations in
                  scientific congresses, annual meetings, and various reputed
                  conferences. These are time-bound activities with submission
                  deadlines for abstracts, printing, and shipping deadlines for
                  posters and congress website uploading deadlines for oral
                  presentations.
                </h3>
                <Link to="/contact-us">
                  <div className="flex mb-4 items-center connect-svg1">
                    <div className="text-lg font-semibold">Let's Connect</div>
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
                </Link>
              </div>
              <div className="md:w-3/5 px-4 md:px-10 py-4 md:py-16 mx-6 md:mx-auto bg-red-800 text-white text-lg absolute -bottom-32 md:-bottom-24 z-20 right-0">
                <h6 className="text-sm md:text-lg py-6 md:px-4">
                  Also these activities require a lot of coordination between
                  teams for data, graphics, prints, courier services, and of
                  course congress where it is presented.
                </h6>
              </div>
            </div>
          </div>
          <div className=" w-full  absolute top-64 -z-10 right-0 h-80"></div>
          <div className=" w-full  relative top-1/2 bottom-0 z-0 right-0 h-40"></div>
          <div className=" w-full  relative">
            <div className="container mx-auto py-4 md:py-12">
              <h2 className="my-4 md:my-12 mx-6 md:mx-0 md:text-2xl border-l px-8 border-red-800">
                Turacoz provides support for stand-alone abstract development
                from start to abstract submission and follows up with congress
                for decisions. Our services include but not limited to:
              </h2>
              <div className="flex justify-between pt-8">
                <ul className="list-outside flex-col mb-12 md:w-1/2 w-full flex justify-between">
                  <li className="list-none text-xl font-semibold w-4/5 relative ml-12 pl-4">
                    <span className="width-spaning absolute top-4 md:top-1/2 -left-8"></span>
                    <h3>Pre-Conference Activities</h3>
                  </li>
                  <li className="list-none relative text-xl font-semibold ml-12 pl-4">
                    <span className="width-spaning absolute top-4 md:top-1/2 -left-8"></span>
                    <h3>Conference Coverage</h3>
                  </li>
                  <li className="list-none relative  text-xl font-semibold ml-12 pl-4">
                    <span className="width-spaning absolute top-4 md:top-1/2 -left-8"></span>
                    <h3>Post-Congress Activities</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" w-full bg-gray-100 relative">
            <div className="container mx-auto py-12">
              <div className="flex md:flex-row flex-col justify-between pt-8">
                <h2 className="md:text-2xl px-6 md:px-0 md:w-1/2 w-full">
                  Turacoz can help you in the following pre-conference
                  activities:
                </h2>
                <ul className="list-outside flex-col mt-4 md:mt-0 mb-12 md:w-1/2 w-full flex justify-between px-6 md:px-0">
                  <li className="list-none md:text-xl  w-4/5 relative ml-12 pl-4">
                    <span className="width-spaning absolute top-1/2 -left-8"></span>
                    Congress selection.
                  </li>
                  <li className="list-none relative md:text-xl  ml-12 pl-4">
                    <span className="width-spaning absolute top-1/2 -left-8"></span>
                    Abstract development and submission to congress – both
                    original and encore abstract for regional and local
                    conferences.
                  </li>
                  <li className="list-none relative  md:text-xl  ml-12 pl-4">
                    <span className="width-spaning absolute top-1/2 -left-8"></span>
                    Poster development- both original and encore poster for
                    regional and local conferences.
                  </li>
                  <li className="list-none relative  md:text-xl  ml-12 pl-4">
                    <span className="width-spaning absolute top-1/2 -left-8"></span>
                    Poster printing and shipping to congress venue.
                  </li>
                  <li className="list-none relative  md:text-xl  ml-12 pl-4">
                    <span className="width-spaning absolute top-1/2 -left-8"></span>
                    Qr code generation, uploading on congress microsite, and
                    providing almetrics related to poster.
                  </li>
                  <li className="list-none relative  md:text-xl  ml-12 pl-4">
                    <span className="width-spaning absolute top-1/2 -left-8"></span>
                    Audio-video support for congress presentation – audio
                    abstract, audio video abstract, graphical abstract.
                  </li>
                  <li className="list-none relative  md:text-xl  ml-12 pl-4">
                    <span className="width-spaning absolute top-1/2 -left-8"></span>
                    Oral presentation with and without speaker notes as
                    required.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="container mx-auto">
              <h2 className="md:text-2xl mx-6 md:mx-0 my-8">
                Activities include but not limited to:
              </h2>
              <div className="flex flex-wrap my-12 mx-6 md:mx-0">
                {ActivityImage &&
                  ActivityImage?.map((rowData, index) => {
                    return (
                      <div
                        className="flex flex-col justify-center items-center gap-4 py-4 w-full sm:w-1/2 md:w-1/4"
                        key={index}
                      >
                        <img
                          src={rowData.image}
                          alt="strategy"
                          className="w-20 h-20"
                        />
                        <div className="flex">
                          <h4 className="text-lg w-4/5 mx-auto text-center">
                            {rowData.text}
                          </h4>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <Link to="/contact-us">
                <div className="flex mb-4 px-6 md:px-0 items-center connect-svg">
                  <div className="text-lg font-semibold">Let's Connect</div>
                  <div className="w-20 h-12 ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 48">
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
              </Link>
              <div className="flex flex-wrap mt-12 items-center mx-6 md:mx-0 justify-between py-10">
                {items &&
                  items.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col p-2 flex-none w-full sm:w-1/2 md:w-1/4 justify-center items-center lg:w-1/4 xl:w-1/4 h-40"
                    >
                      <span className="text-6xl font-semibold text-red-800">
                        {item.value}
                      </span>
                      <h4 className="text-xl my-2 md:pr-8">{item.label}</h4>
                    </div>
                  ))}
              </div>
              <div className="md:text-lg px-6 md:px-0 mb-8">
                Turacoz can help you to curate the congress discussions and
                abstract information from congress for a therapeutic area or a
                product.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConferenceActivities;
