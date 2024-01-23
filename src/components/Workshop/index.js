import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import about from "../../assets/images/About-us.jpg";
import adworkshop from "../../assets/images/adworkshop.jpg";
import adworkshop1 from "../../assets/images/adworkshop1.jpg";
import adworkshop2 from "../../assets/images/adworkshop2.jpg";
import workshopPage from "../../assets/images/workshopPage.jpg";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import { performGetWorkshopList } from "../../redux/actionCreators/workshopCreators";
import { BACKEND_URL } from "../../services/constant";
import SeoHeaderTitle from "../SeotitleHeader";

const Workshop = ({ handleWorkshop }) => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const [data, setData] = useState([]);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[2]);
  const fetchData = async () => {
    const result = await handleWorkshop();
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
    (item) => item.workshopType === "Past Workshop"
  );
  const UpcomingFilterData = data.filter(
    (item) => item.workshopType === "Upcoming Workshop"
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
                src={workshopPage}
                alt="events"
                className="image-carousal hidden md:block relative object-cover"
              />
              <img
                src={about}
                alt="events"
                className="image-carousal block md:hidden relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-1/4 bottom-0 right-0 left-0 z-10 text-left p-10 md:p-20">
                <h1 className="text-3xl md:text-6xl font-semibold">
                  Workshops
                </h1>
              </div>
            </div>
            <div className="md:w-3/5 px-10 py-8 md:py-16 mx-6 md:mx-auto bg-red-800 text-white text-lg absolute -bottom-28 md:-bottom-24 z-20 right-0">
              <div className="md:text-lg text-sm">
                Whether you’re a seasoned medical writer looking to expand your
                skill set or someone interested in starting a career in medical
                writing, our workshops provide you with the tools and resources
                you need to succeed. Join us for an interactive and engaging
                learning experience, where you can also get your questions
                answered and doubts clarified.
              </div>
            </div>
          </div>
          <div className="bg-gray-100 w-full absolute top-64 -z-10 right-0 h-80"></div>
          <div className="bg-gray-100 w-full relative top-1/2 bottom-0 z-0 right-0 h-40"></div>
          <div className="bg-green-100 w-full relative">
            <div className="container mx-auto">
              <h2 className="md:text-5xl text-2xl mx-6 md:mx-0 pt-8 pb-16 font-semibold">
                What We Bring to You
              </h2>
              <div className="flex flex-col md:flex-row">
                <div className="w-auto md:w-1/2 mx-6 md:mx-0 pr-0 md:pr-8">
                  <div className="md:text-lg text-justify mb-4">
                    As a medical writer, you have the opportunity to make a
                    significant impact in the healthcare industry by
                    communicating complex scientific concepts in a way that is
                    accessible to various stakeholders. Your work can range from
                    creating patient education materials to crafting regulatory
                    submissions and scientific manuscripts. At our 4-hour
                    workshops, you’ll gain in-depth insights into diverse
                    topics, therapies, and products that medical writers work
                    on.
                  </div>
                  <div className="md:text-lg text-justify mb-4 my-4 md:my-10">
                    We guide you through creating various documents such as
                    clinical study reports, protocols, regulatory documents, and
                    medical communications, while also providing essential tools
                    and skills for success in the field. Our workshops also
                    cover marketing strategies for freelancing and other job
                    platforms, creating a blog to expand your reach, and
                    engaging your audience through email marketing. We teach you
                    how to leverage platforms like LinkedIn to build your
                    network and grow your reach
                  </div>
                </div>
                <div className="w-auto mx-6 md:mx-0 md:w-1/2 pb-6">
                  <img
                    src={adworkshop1}
                    alt="news-image"
                    className="w-full md:w-3/5 h-full md:h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-gray-100">
            <div className="container mx-auto">
              <h2 className="text-2xl md:text-5xl font-semibold pt-4 mx-6 md:mx-0">
                Whom Do We Cater To
              </h2>
              <div className="flex flex-col md:flex-row  justify-center md:justify-between py-8 md:py-12">
                <div className="w-auto mx-6 md:mx-0 md:w-1/2 pb-6">
                  <img
                    src={adworkshop2}
                    alt="news-image"
                    className="w-full md:w-4/5 h-full md:h-auto"
                  />
                </div>
                <div className="w-auto md:w-1/2 mx-6 md:mx-0 pr-0 md:pr-8">
                  <div className="md:text-lg text-justify">
                    Our workshop caters to postgraduate and doctorate holders in
                    Bioscience/Life Sciences (e.g., Biochemistry, Microbiology,
                    Genetics, Biotechnology, Botany, Zoology), medical degree
                    holders (e.g., MBBS, BDS, BPT, BAMS, BHMS, BUMS), medical
                    writing professionals, clinical research professionals, and
                    doctors transitioning to freelance medical writing.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-100 w-full relative">
            <div className="container mx-auto">
              <h2 className="md:text-5xl text-2xl mx-6 md:mx-0 pt-8 pb-16 font-semibold">
                Advantages
              </h2>
              <div className="flex flex-col md:flex-row pb-8 md:pb-12">
                <div className="w-auto md:w-1/2 mx-6 md:mx-0 pr-0 md:pr-8">
                  <ol className="md:text-lg list-decimal text-justify">
                    <li>
                      At the end of the workshop, you receive a handbook
                      outlining the best practices for marketing your services
                      online.
                    </li>
                    <li>
                      For the next 6 months, you receive a weekly bulletin
                      specifying a variety of freelance medical writing
                      opportunities and gigs.
                    </li>
                    <li>You receive a certificate upon workshop completion.</li>
                    <li>Opportunity to get added to our job database.</li>
                    <li>
                      Addition to the professional network for mentoring and
                      collaboration.
                    </li>
                  </ol>
                </div>
                <div className="w-auto mx-6 md:mx-0 md:w-1/2 pb-6">
                  <img
                    src={adworkshop}
                    alt="news-image"
                    className="w-full md:w-3/4 h-full md:h-4/5"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="py-12 container mx-auto">
              <h2 className="mx-6 md:mx-0 text-3xl underline md:text-5xl font-semibold text-center py-12">
                Our Workshops
              </h2>
              <h4 className="md:text-lg pb-12 mx-6 md:mx-0">
                Join us for our upcoming Workshops and take the first step
                towards advancing your career in healthcare communications. Our
                Workshops are an excellent opportunity to expand your knowledge,
                enhance your skills, and build your network within the industry.
                Don’t miss out on this unique opportunity to grow and learn from
                the best in the industry.
              </h4>
              {UpcomingFilterData && (
                <div className="flex mx-6 md:mx-0 flex-wrap justify-center md:justify-start gap-8 my-12">
                  {UpcomingFilterData?.map((rowData) => {
                    return (
                      <Link
                        to={`/training/workshops/${rowData?.workshopLink
                          ?.toLowerCase()
                          ?.replace(/\s+/g, "-")}`}
                        key={rowData?._id}
                      >
                        <div className="border-4 shadow-xl border-gray-200 rounded-xl p-8 flex items-center justify-between flex-col gap-4 cursor-pointer ClickMe-Card">
                          <img
                            src={BACKEND_URL + rowData?.workshopImage}
                            alt={rowData?.workshopName}
                            className="w-64 h-40 object-fill"
                          />
                          <h3 className="font-semibold text-center">
                            {rowData?.workshopName}
                          </h3>
                          <div className="font-semibold mb-12 text-center text-red-800">
                            Workshop Date: {rowData?.workshopStartingDate}
                          </div>
                          <div className="border-2 px-2 py-1 border-red-800 rounded-full text-red-800 font-semibold text-center">
                            Click here to know more....
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
              <h2 className="text-5xl underline mx-6 md:mx-0 font-bold text-center py-12">
                Past Workshops
              </h2>
              <h4 className="md:text-lg pb-12 mx-6 md:mx-0">
                Find the topics and description of the Workshops that we
                conducted in the past. Take a look at our speakers, audience,
                agenda, key highlights and also testimonials shared by our
                students. To discover our expertise, browse through our past
                courses, and stay updated on our upcoming ones.
              </h4>
              {PastFilterData && (
                <div className="flex mx-6 md:mx-0 flex-wrap justify-center md:justify-start gap-8 my-12">
                  {PastFilterData?.map((rowData) => {
                    return (
                      <Link
                        to={`/training/workshops/${rowData?.workshopLink
                          ?.toLowerCase()
                          ?.replace(/\s+/g, "-")}`}
                        key={rowData?._id}
                      >
                        <div className="border-4 shadow-xl border-gray-200 rounded-xl p-8 flex items-center justify-between flex-col gap-4 cursor-pointer ClickMe-Card">
                          <img
                            src={BACKEND_URL + rowData?.workshopImage}
                            alt={rowData?.workshopName}
                            className="w-64 h-40 object-fill"
                          />
                          <h3 className="font-semibold text-center">
                            {rowData?.workshopName}
                          </h3>
                          <div className="font-semibold mb-12 text-center text-red-800">
                            Workshop Date: {rowData?.workshopStartingDate}
                          </div>
                          <div className="border-2 px-2 py-1 border-red-800 rounded-full text-red-800 font-semibold text-center">
                            Click here to know more....
                          </div>
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
  handleWorkshop: (payload) => dispatch(performGetWorkshopList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Workshop);
