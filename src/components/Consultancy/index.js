import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import consultancy from "../../assets/images/consultancy.png";
import consultant1 from "../../assets/images/consultant1.png";
import consultant2 from "../../assets/images/consultant2.png";
import consultant3 from "../../assets/images/consultant3.png";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import SeoHeaderTitle from "../SeotitleHeader";

const Consultancy = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[2]);

  return (
    <>
      {pageData && <SeoHeaderTitle pageData={pageData} />}
      <div>
        <div className="relative">
          <div className="xl:ml-28 relative z-10">
            <div className="border-0 relative active:border-0">
              <div className="absolute image-background1"></div>
              <img
                src={consultancy}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-6 md:p-10 xl:p-20">
                <h1 className="xl:text-7xl md:text-4xl xl:w-4/5 w-full text-2xl font-semibold">
                  Consultancy
                </h1>
                <div className="md:text-lg my-4 md:w-2/3 w-full">
                  Consultancy deals with providing expert advice on a particular
                  matter and establishing a collaborative relationship with the
                  clients. Consultancy is focused on enhancing certain core
                  capabilities of a company to improve its outreach.
                </div>
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
              <div className="xl:w-3/5 md:w-4/5 px-4 md:px-10 py-4 md:py-8 xl:py-16 mx-6 md:mx-auto bg-red-800 text-white text-lg absolute -bottom-16 md:-bottom-24 z-20 right-0">
                <h3 className="md:text-lg text-sm py-6 md:px-4">
                  Our experts offer clients a wide array of solutions for
                  enhancing marketing strategies, boosting profitability, budget
                  preparation, enhancing hiring procedures, and other areas.
                </h3>
              </div>
            </div>
          </div>
          <div className=" w-full bg-gray-100  absolute top-64 -z-10 right-0 h-80"></div>
          <div className=" w-full  relative top-1/2 bottom-0 z-0 right-0 h-40"></div>
          <div className=" w-full bg-gray-100  relative">
            <div className="container mx-auto py-12">
              <div className="md:py-12"></div>
              <div className="md:text-lg mx-6 xl:mx-0">
                Advisory or implementation services are provided to assist
                organizations in problem-solving and program management to
                refine their business performance. We aim to make a difference
                by empowering people to share their insights and discoveries
                through creative consultancy and technical assistance.
              </div>
              <h2 className="my-12 md:text-5xl w-full px-6 xl:px-0 md:w-1/2">
                Our services can be categorized as follows:
              </h2>
              <div className="flex flex-col mx-6 md:mx-0 md:flex-row justify-between pb-16 gap-6 md:gap-12">
                <ul className="list-outside md:w-1/5">
                  <li className="list-none relative md:text-xl font-semibold leading-8 ml-8">
                    <span className="width-spaning absolute top-3 -left-8"></span>
                    <h3>Creative Strategy</h3>
                  </li>
                </ul>
                <div className="md:text-lg md:leading-8 md:w-4/5">
                  The best method to guarantee that the deliverables correspond
                  with the client’s expectations for the project is to implement
                  creative strategies and creative briefs. Creative briefs also
                  make the team deliberate and strategic before beginning new
                  initiatives, in addition to giving the creative contributors a
                  precise project blueprint. Setting project goals before the
                  beginning of the development process is a certain approach to
                  keeping everyone’s attention on creating results-driven
                  initiatives.
                </div>
              </div>
              <div className="mb-12">
                <img
                  src={consultant1}
                  alt="consultant-image"
                  className="px-6 xl:px-0"
                />
              </div>
              <div className="mx-6 md:mx-0 md:text-lg md:leading-8">
                A creative strategy is created before the start of a new
                marketing initiative or campaign, much like an outline to
                develop a plan that would enable the marketing initiative to
                achieve the precise objectives that the organization has set. It
                specifies the elements of marketing communications as well as
                the audience and voice to whom it should be addressed. We
                provide solutions to assist in developing success metrics in
                compliance with your budget and timelines.
              </div>
            </div>
          </div>
          <div className="w-full px-6 xl:px-0 relative bg-gray-100">
            <div className="relative lg:absolute flex justify-center lg:justify-start left-0 top-0">
              <img
                src={consultant2}
                alt="regulatory-image"
                className="w-full md:w-10/12 my-4"
              />
            </div>
            <div className="container py-8 mx-auto relative flex justify-end">
              <div className="lg:w-1/2 md:py-12 w-full xl:w-3/5">
                <div className="md:text-lg">
                  <ul className="list-outside flex-col mb-12 w-3/5 gap-2 flex justify-between">
                    <li className="list-none text-xl font-semibold md:w-4/5 relative ml-10">
                      <span className="width-spaning absolute top-3 -left-8"></span>
                      <h3>Communication Plans</h3>
                    </li>
                  </ul>
                  A communication plan is a policy-driven strategy for
                  delivering specific information to company stakeholders. To
                  ensure that all stakeholders are aware of the most recent
                  updates on projects, goals, and objectives, communication
                  plans are frequently utilized in business settings.
                  Establishing goals, defining important audiences, identifying
                  essential messages, developing a tactical outreach plan, and
                  outlining a schedule are the processes involved in the
                  creation of an exceptional communication plan.
                </div>
                <div className="md:text-lg pt-4 md:pt-8">
                  We specialize in providing integrative approaches and
                  organizational transformation with lucrative assets and
                  portfolios focused on growth. We offer in-depth subject matter
                  expertise that includes organization, portfolio, or asset, and
                  our exceptional capacity to draw on worldwide functional and
                  therapeutic experts as well as end-to-end skill results in
                  highly specialized solutions. Comprehensive pre- and
                  post-launch competence yield critical insights that result in
                  tailored suggestions intended to lower risk, accelerate time
                  to market, and boost total asset and client base.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative px-6 xl:px-0 py-12 bg-gray-100">
            <div className="relative lg:absolute flex justify-center md:justify-end right-0 top-0">
              <img
                src={consultant3}
                alt="regulatory-image"
                className="lg:w-1/2 my-4"
              />
            </div>
            <div className="container py-8 mx-auto relative flex justify-center  md:justify-start">
              <div className="lg:w-1/2 w-full xl:w-3/5 lg:pr-4">
                <div className="md:text-lg">
                  <ul className="list-outside flex-col mb-12 md:w-3/5 gap-2 flex justify-between">
                    <li className="list-none text-xl font-semibold md:w-4/5 relative ml-10">
                      <span className="width-spaning absolute top-3 -left-8"></span>
                      <h3>Regulatory Intelligence</h3>
                    </li>
                  </ul>
                  Research, testing, approval, and continuous availability of
                  new therapeutic variables in the market all depend on
                  compliance with regulatory standards.
                </div>
                <div className="md:text-lg pt-8">
                  The range of regulatory requirements is expanding, as
                  regulatory licenses are sought increasingly for pharmaceutical
                  markets. To ensure the production of safe, efficient, and
                  high-quality pharmaceutical products, the advent of science
                  and technology has necessitated an ever-increasing speed of
                  new regulatory guidance. As Part of the drug development
                  process, new standards are also set using cutting-edge trial
                  designs, endpoints, and statistical analysis to address
                  regulatory and scientific queries. Following these
                  developments and trends, analyzing their effects on the
                  business, and disseminating the knowledge widely are all that
                  we provide under the umbrella of regulatory intelligence.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative py-6 md:py-12 px-6 xl:px-0 bg-gray-100">
            <div className="container mx-auto">
              <div className="md:text-lg">
                To stay current with this knowledge, it is important to
                carefully assess its validity and the implications it has for
                all pharmaceutical global businesses. Based on the country’s
                healthcare requirements, different markets have different health
                authority standards, regulations, and laws guiding product
                registration, manufacturing, or licensing processes. The ideal
                way to boost confidence in submission compliance for each
                product class and health authority is to have a robust
                regulatory intelligence data strategy, governance, and review
                procedures from early development through the introduction of
                the products.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consultancy;
