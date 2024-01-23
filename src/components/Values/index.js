import React, { useEffect } from "react";
import environment from "../../assets/images/environment.png";
import goal from "../../assets/images/goal.png";
import link from "../../assets/images/link.png";
import people from "../../assets/images/people.png";
import perfection from "../../assets/images/perfection.png";
import planet from "../../assets/images/planet.png";
import backvalue from "../../assets/images/value-1.png";
import values from "../../assets/images/values.png";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import SeoHeaderTitle from "../SeotitleHeader";
import { useLocation } from "react-router-dom";

const Values = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[2]);
  const csrImage = [
    {
      image: environment,
      title: "We Provide an Encouraging Humane Environment",
    },
    {
      image: link,
      title: "We Listen to Our Team (Internal and External).",
    },
    {
      image: goal,
      title: "We Work on Individual Goals and Expectations.",
    },
  ];
  const activityimage = [
    {
      image: perfection,
      title: "PERFECTION",
      description:
        "We’re proud to serve people, uncompromising on quality, providing end-to-end support.",
    },
    {
      image: people,
      title: "PEOPLE",
      description:
        "We strive for perfection in whatever we do, delivering customer satisfaction.",
    },
    {
      image: planet,
      title: "PLANET",
      description:
        "We believe in giving back more to the planet than we take from it.",
    },
  ];
  return (
    <>
      {pageData && <SeoHeaderTitle pageData={pageData} />}
      <div>
        <div className="relative">
          <div className="xl:ml-28 relative z-10">
            <div className="border-0 relative active:border-0">
              <div className="absolute image-background2"></div>
              <img
                src={values}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-6 md:p-10 xl:p-20">
                <h1 className="xl:text-7xl md:text-4xl text-2xl font-semibold">
                  Our Values
                </h1>
              </div>
            </div>
            <div className="xl:w-2/3 md:w-4/5 px-4 md:px-10 py-4 md:py-8 xl:py-16 mx-6 md:mx-auto bg-red-800 text-white text-lg absolute -bottom-60 md:-bottom-24 z-20 right-0">
              <div className="flex md:flex-row flex-col gap-4">
                {activityimage &&
                  activityimage?.map((item, index) => {
                    return (
                      <div
                        className="relative justify-center items-center flex flex-col text-center gap-4 border-b border-slate-100 p-4 md:border-none"
                        key={index}
                      >
                        <img
                          src={item.image}
                          alt="about-like"
                          className="w-20 h-20 object-contain"
                        />
                        <div className="flex flex-col gap-2 leading-6">
                          <h3 className="text-2xl font-semibold">
                            {item.title}
                          </h3>
                          <h4 className="text-xs">{item.description}</h4>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-80 md:pt-40 w-full relative">
          <div className="container mx-auto">
            <div className="flex md:flex-row flex-col mx-6 xl:mx-0 justify-between pb-16">
              <h2 className="md:text-3xl text-xl md:leading-10 md:w-1/5 font-light">
                How We
                <br /> Achieve
                <br />
                <span className="text-red-800 font-semibold">Perfection</span>
              </h2>
              <ul className="list-outside md:text-xl mx-6 md:mx-0 md:w-2/3">
                <li className="list-none leading-8 relative md:mr-8">
                  <span className="width-spaning absolute top-3 -left-8 md:-left-12"></span>
                  We identify, train, and promote relevant talent by providing a
                  continuous learning environment.
                </li>
                <li className="list-none leading-8 relative md:mr-8">
                  <span className="width-spaning absolute top-3 -left-8 md:-left-12"></span>
                  We have adapted agile and client-centric work processes.
                </li>
                <li className="list-none leading-8 relative md:mr-8">
                  <span className="width-spaning absolute top-3 -left-8 md:-left-12"></span>
                  We acknowledge change and integrate it for betterment in the
                  organization.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full relative">
          <div className="relative z-0">
            <div className="absolute image-background1"></div>
            <img
              src={backvalue}
              alt="values"
              className="w-full value_background h-full object-contain relative z-0"
            />
          </div>
          <div className="absolute container mx-auto z-10 top-0 right-0 left-0 bottom-0">
            <h2 className="text-center tracking-wider mx-6 xl:mx-0 md:text-4xl my-6 md:my-16 text-white">
              How We Keep
              <span className="text-red-800 font-semibold mx-2">People</span>
              Motivated and Happy
            </h2>
            <div className="flex flex-col md:flex-row mx-6 xl:mx-0 gap-12">
              {csrImage &&
                csrImage?.map((item, index) => {
                  return (
                    <div
                      className="relative border border-white rounded-2xl h-64 md:h-80 text-white p-6 md:p-8 xl:p-12 justify-start items-center flex flex-col text-center gap-4"
                      key={index}
                    >
                      <img
                        src={item.image}
                        alt="about-like"
                        className="w-20 h-20 object-contain"
                      />
                      <div className="flex flex-col gap-2 leading-6">
                        <h3 className="text-xl">{item.title}</h3>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className=" pt-10 w-full relative">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between px-6 xl:px-0 pb-16">
              <h2 className="text-3xl md:leading-10 md:w-1/5 font-semibold md:font-light">
                What We
                <br /> Do for the
                <br />
                <span className="text-red-800 font-semibold">Planet</span>
              </h2>
              <ul className="list-outside md:text-xl ml-8 md:ml-0 md:w-2/3">
                <li className="list-none my-2 relative ">
                  <span className="width-spaning absolute top-3 -left-8 md:-left-12"></span>
                  We include sustainability in business goals.
                </li>
                <li className="list-none my-2 relative ">
                  <span className="width-spaning absolute top-3 -left-8 md:-left-12"></span>
                  We partner with employees and vendors to reduce, reuse, and
                  recycle waste.
                </li>
                <li className="list-none my-2 relative ">
                  <span className="width-spaning absolute top-3 -left-8 md:-left-12"></span>
                  We encourage only essential travel (We offer flexible work
                  conditions to reduce the carbon footprint).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Values;
