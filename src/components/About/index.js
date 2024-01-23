import React, { useEffect } from "react";
import about from "../../assets/images/About-us.jpg";
import Aboutmobile from "../../assets/images/Aboutmobile.jpg";
import women from "../../assets/images/Women-right.png";
import like from "../../assets/images/about-like.png";
import support from "../../assets/images/about-support.png";
import target from "../../assets/images/about-target.png";
import child from "../../assets/images/child_right.png";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import SeoHeaderTitle from "../SeotitleHeader";
import { useLocation } from "react-router-dom";

const About = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.substring(1);
  const [pageData] = usePageData(url);
  const csrImage = [
    {
      image: like,
      title:
        "We believe that activities related to CSR in addition to the good work done to the society also help in the company’s growth",
    },
    {
      image: target,
      title:
        "  It establishes our long term thinking and the goals which are beyond material gains.",
    },
    {
      image: support,
      title:
        "The CSR activities conducted by us engages the client as well as our employees and forms the basis of a sustainable business model for us.",
    },
  ];
  const activityimage = [
    {
      image: child,
      title: "Child Rights",
      description:
        "Turacoz supports and donates to Child Rights and You (CRY) to enable the children to attain their full potential.",
    },
    {
      image: women,
      title: "Women Empowerment",
      description:
        "We believe in providing a supportive and encouraging environment for all our employees, but especially for the women who are ready to take their careers to the next level. Majority of our workforce is made up of talented and ambitious women.",
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
                src={about}
                alt="events"
                className="image-carousal relative object-cover hidden md:block"
              />
              <img
                src={Aboutmobile}
                alt="events"
                className="image-carousal relative object-cover md:hidden block"
              />
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-6 md:p-10 xl:p-20">
                <h1 className="xl:text-[68px] md:text-[38px] xl:w-4/5 w-full text-[30px] font-semibold">
                  About Us
                </h1>
                <h3 className="md:w-3/5 text-lg my-8">
                  We help streamline research in the right direction, create and
                  present scientific knowledge according to the audience, and
                  support critical decision-making during the whole process.
                </h3>
              </div>
            </div>
            <div className="xl:w-3/5 md:w-4/5 text-[17px] md:text-xl  px-4 md:px-10 py-4 md:py-8 xl:py-16 mx-6 md:mx-auto bg-red-800 text-white text-lg absolute -bottom-20 md:-bottom-24 z-20 right-0">
              <h3 className="py-6 md:px-4">
                Look with your understanding, find out what you already know,
                and you’ll see the way to fly.”
                <div className="mt-4 font-semibold">
                  -Richard Bach, Jonathan Livingston Seagul
                </div>
              </h3>
            </div>
          </div>
          <div className="bg-[#f2f2f2] w-full absolute top-64 -z-10 right-0 h-80"></div>
          <div className="bg-[#f2f2f2] w-full relative top-1/2 bottom-0 z-0 right-0 h-40"></div>
          <div className="bg-[#f2f2f2] w-full relative">
            <div className="container px-6 xl:px-0 mx-auto">
              <h2 className="md:text-[45px] lg:text-[30px] text-[26px] pt-8 pb-8 md:pb-16 font-semibold">
                Tenets of Turacoz
              </h2>
              <div className="flex md:flex-row flex-col justify-between pb-16 gap-12">
                <ul className="list-outside ml-4 md:ml-0 text-[17px] md:w-1/2">
                  <li className="list-none relative md:leading-8 ">
                    <span className="width-span absolute top-3 -left-4 md:-left-8"></span>
                    <h3 className="font-semibold ">
                      Ethics and Confidentiality:
                    </h3>
                    <br />
                    We stringently follow all the practices ethically in dealing
                    with the source documents, internal and external
                    communications. We always maintain the confidentiality of
                    the information/documents and do not copy, reproduce or
                    distribute client’s information without their permission.
                  </li>
                  <li className="list-none relative md:leading-8 ">
                    <span className="width-span absolute top-3 -left-4 md:-left-8"></span>
                    <h3 className="font-semibold ">
                      Experience and Expertise:
                    </h3>
                    <br />
                    We have worked across all therapeutic areas- including
                    oncology, endocrinology, cardiovascular, immunology,
                    infections, respiratory, gastroenterology, rheumatology,
                    CNS, ophthalmology, obstetrics and gynecology, dermatology,
                    pediatrics, nutrition, nephrology, and rare diseases.
                    <br />
                    In the field of medical devices and diagnostics, Turacoz has
                    worked on cardiac interventions (stents and pacemakers),
                    orthopedics (joint replacement), auditory devices,
                    ophthalmology, and dentistry. We provide support for
                    publications, medico-marketing documents, real world
                    evidence studies, regulatory documents, digital
                    deliverables, advisory boards, and training solutions to
                    industry and academics.
                  </li>
                </ul>
                <ul className="list-outside ml-4 md:ml-0 text-[17px] md:w-1/2">
                  <li className="list-none relative md:leading-8 md:mr-8">
                    <span className="width-span absolute top-3 -left-4 md:-left-8"></span>
                    <h3 className="font-semibold ">
                      First Time Right Approach:
                    </h3>
                    <br />
                    We follow the best practices of workflow to deliver high
                    quality each time.
                    <ul className="list-outside md:ml-8 mt-8">
                      <li className="list-none leading-8 relative md:mr-8">
                        <span className="width-span absolute top-3 -left-4 md:-left-8"></span>
                        Understanding the scope of project.
                      </li>
                      <li className="list-none leading-8 relative md:mr-8">
                        <span className="width-span absolute top-3 -left-4 md:-left-8"></span>
                        Conducting adequate research and internal brain-storming
                        sessions to align with the client’s expectations.
                      </li>
                      <li className="list-none leading-8 relative md:mr-8">
                        <span className="width-span absolute top-3 -left-4 md:-left-8"></span>
                        Measuring the project progress in milestones with
                        planned deliveries.
                      </li>
                      <li className="list-none leading-8 relative md:mr-8">
                        <span className="width-span absolute top-3 -left-4 md:-left-8"></span>
                        Analyzing all risks and having back-up plans ready for
                        unforeseen delays.
                      </li>
                      <li className="list-none leading-8 relative md:mr-8">
                        <span className="width-span absolute top-3 -left-4 md:-left-8"></span>
                        Having a clear channel of information and communication
                        with the client.
                      </li>
                      <li className="list-none leading-8 relative md:mr-8">
                        <span className="width-span absolute top-3 -left-4 md:-left-8"></span>
                        Re-evaluating with every deviation, performing detailed
                        root cause analysis for any deviation and taking
                        appropriate corrective and preventive action.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-20">
            <div className="container px-6 xl:px-0 py-8 mx-auto">
              <h2 className="md:text-5xl text-2xl font-semibold my-12">
                Corporate Social Responsibility
              </h2>
              <div className="md:text-lg mt-16 my-8">
                The CSR activities conducted by us engages the client as well as
                our employees and forms the basis of a sustainable business
                model for us.
              </div>
              <div className="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-12">
                {csrImage &&
                  csrImage?.map((item, index) => {
                    return (
                      <div
                        className="relative justify-center flex h-44 md:w-80"
                        key={index}
                      >
                        <div className="absolute z-10 border flex items-center justify-center w-20 h-20 bg-white border-slate-300 rounded-full">
                          <img
                            src={item.image}
                            alt="about-like"
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <h3 className="relative z-0 mt-10 h-full text-center border text-sm border-slate-300 pt-12 pb-10 px-6">
                          {item.title}
                        </h3>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="bg-[#f2f2f2] w-full relative">
            <div className="container px-6 xl:px-0 xl:mx-auto">
              <h2 className="text-2xl md:text-5xl pt-8 pb-16 font-semibold">
                Activities Under CSR
              </h2>
              <div className="flex flex-col gap-4 pb-16 md:grid md:grid-cols-1 md:gap-6 justify-center lg:grid-cols-2 lg:gap-12">
                {activityimage &&
                  activityimage?.map((item, index) => {
                    return (
                      <div
                        className="relative justify-center bg-white flex md:flex-row flex-col md:items-start items-center gap-4 p-6 md:p-12"
                        key={index}
                      >
                        <img
                          src={item.image}
                          alt="about-like"
                          className="w-20 h-20 object-contain"
                        />
                        <div className="flex flex-col gap-2 leading-6">
                          <h3 className="text-xl text-center md:text-left font-semibold">
                            {item.title}
                          </h3>
                          <h4 className="text-sm">{item.description}</h4>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
