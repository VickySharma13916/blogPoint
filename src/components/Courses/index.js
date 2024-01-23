import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import about from "../../assets/images/About-us.jpg";
import join from "../../assets/images/Who-can-join-the-webinar.-scaled.jpg";
import corporateProfessional from "../../assets/images/corporate-professional.jpg";
import courses from "../../assets/images/courses.png";
import cpd from "../../assets/images/cpd.png";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import { performGetCourseList } from "../../redux/actionCreators/courseCreators";
import { BACKEND_URL } from "../../services/constant";
import SeoHeaderTitle from "../SeotitleHeader";

const Courses = ({ handleCourse }) => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[2]);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const result = await handleCourse();
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
    (item) => item.coursesType === "Past Courses"
  );
  const UpcomingFilterData = data.filter(
    (item) => item.coursesType === "Upcoming Courses"
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
                src={courses}
                alt="events"
                className="image-carousal hidden md:block relative object-cover"
              />
              <img
                src={about}
                alt="events"
                className="image-carousal block md:hidden relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-1/4 bottom-0 right-0 left-0 z-10 text-left p-10 md:p-20">
                <h1 className="text-3xl md:text-6xl font-semibold">Courses</h1>
              </div>
            </div>
            <div className="md:w-3/5 px-10 py-8 md:py-16 mx-6 md:mx-auto bg-red-800 text-white text-lg absolute -bottom-28 md:-bottom-24 z-20 right-0">
              <div className="md:text-lg text-sm">
                We provide two 8-week courses: 1.) Certificate Course in Medical
                Writing and 2.) UK-CPD-accredited Certificate Course in
                Scientific Writing.
              </div>
              <div className="md:text-lg text-sm mt-8">
                Our sessions are intractive conducted online, and our classes
                are interactive. The courses are taken by experienced industry
                experts who provide live instructions on state-of-the-art
                technology platforms.
              </div>
            </div>
          </div>
          <div className="bg-gray-100 w-full absolute top-64 -z-10 right-0 h-80"></div>
          <div className="bg-gray-100 w-full relative top-1/2 bottom-0 z-0 right-0 h-40"></div>
          <div className="bg-green-100 w-full relative">
            <div className="container mx-auto">
              <h2 className="md:text-5xl text-2xl mx-6 md:mx-0 pt-8 pb-16 font-semibold">
                Our audience
              </h2>
              <div className="flex flex-col md:flex-row">
                <div className="w-auto md:w-1/2 mx-6 md:mx-0 pr-0 md:pr-8">
                  <div className="md:text-lg text-justify mb-4">
                    Any graduate in life sciences, chemistry, biostatistics,
                    bioinformatics, pharmacy, medicine or nursing can take up
                    our courses. Researchers, scholars and students can also
                    join.
                  </div>
                  <div className="md:text-lg text-justify mb-4 my-4 md:my-10">
                    To ensure effective learning, our courses provide
                    pre-readings, hands-on training on live projects with
                    industry professionals, regular assignments to monitor
                    progress, easy access to trainers for prompt query
                    resolution, and a certificate upon course completion.
                    Additionally, we offer employment opportunities to
                    high-performing candidates and access to recorded sessions
                    for up to 6 months.
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
                Certificate Course in Medical Writing
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
                    The medical writing course teaches presenting information in
                    writing for a targeted audience. The healthcare industry’s
                    growth in professional writers makes this skill valuable for
                    career advancement. The course teaches creating
                    well-structured documents in adherence to regulations,
                    raising knowledge to an expert level. Course topics include
                    medico-marketing documents, project life cycle, effective
                    presentations, audio-visual deliverables, literature search
                    and referencing, Veeva platform, approval software upload,
                    linking and annotation, future of medical writing, and
                    scope.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-100 w-full relative">
            <div className="container mx-auto">
              <h2 className="md:text-5xl text-2xl mx-6 md:mx-0 pt-8 pb-16 font-semibold">
                CPD-UK Accredited Certificate Course in Scientific Writing:
                End-to-End Journal Publication and Conference Presentation
              </h2>
              <div className="flex flex-col md:flex-row pb-8 md:pb-12">
                <div className="w-auto md:w-1/2 mx-6 md:mx-0 pr-0 md:pr-8">
                  <div className="md:text-lg text-justify">
                    The scientific writing course helps students disseminate
                    research findings and provides them practical training to
                    overcome publication challenges. It up-skills knowledge for
                    professionals in various sectors and covers ethics,
                    guidelines, manuscript structures, introductions, writing
                    methods, tools, compliance tracking, and more. Trainers
                    address review comments, prepare for congress activities and
                    teach other publication types. The course concludes by
                    preparing participants for freelancing and networking.
                  </div>
                </div>
                <div className="w-auto mx-6 md:mx-0 md:w-1/2 pb-6">
                  <img
                    src={corporateProfessional}
                    alt="news-image"
                    className="md:w-3/4 w-full h-full md:h-3/4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-gray-100">
            <div className="container mx-auto">
              <h2 className="md:text-5xl text-2xl mx-6 md:mx-0 pt-8 font-semibold text-center">
                What is CPD?
              </h2>
              <div className="flex flex-col md:flex-row justify-center md:justify-between  py-8 md:py-12">
                <div className="w-auto mx-6 md:mx-0 md:w-1/2 pb-6">
                  <img
                    src={cpd}
                    alt="news-image"
                    className="w-full md:w-4/5 h-full md:h-4/5"
                  />
                </div>
                <div className="w-auto md:w-1/2 mx-6 md:mx-0 pr-0 md:pr-8">
                  <div className="md:text-lg text-justify">
                    Our globally recognized Certificate Course in Scientific
                    Writing is accredited by UK-CPD. CPD, or Continuing
                    Professional Development, is a certification that verifies
                    skills training for professionals to enhance their knowledge
                    and abilities in a specific area of work. UK-CPD is an
                    internationally recognized system that requires
                    professionals to accumulate CPD points through courses,
                    workshops, and trainings, which are verified by UK’s leading
                    bodies. This accreditation ensures that courses meet high
                    standards and provide quality education to professionals.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="py-12 container mx-auto">
              <h2 className="mx-6 md:mx-0 text-3xl underline md:text-5xl font-semibold text-center py-12">
                Our Upcoming Courses
              </h2>
              <div className="md:text-lg pb-12 mx-6 md:mx-0">
                Join us for our upcoming courses and take the first step towards
                advancing your career in healthcare communications. Our courses
                are an excellent opportunity to expand your knowledge, enhance
                your skills, and build your network within the industry. Don’t
                miss out on this unique opportunity to grow and learn from the
                best in the industry.
              </div>
              <div className="flex mx-6 md:mx-0 flex-wrap justify-center md:justify-start gap-8 my-12">
                {UpcomingFilterData &&
                  UpcomingFilterData?.map((rowData) => {
                    return (
                      <Link
                        to={`/training/courses/${rowData?.coursesLink?.replace(
                          /\s+/g,
                          "-"
                        )}`}
                        state={{ id: rowData?._id }}
                        key={rowData?._id}
                      >
                        <div className="border-4 shadow-xl border-gray-200 rounded-xl p-8 flex items-center justify-between flex-col gap-4 cursor-pointer ClickMe-Card">
                          <img
                            src={BACKEND_URL + rowData.courseImage}
                            alt={rowData.courseName}
                            className="w-64 h-40 object-contain"
                          />
                          <h3 className="font-semibold text-center">
                            {rowData.courseName}
                          </h3>
                          <div className="font-semibold mb-12 text-center text-red-800">
                            Course starting Date: {rowData.courseStartingDate}
                          </div>
                          <div className="border-2 px-2 py-1 border-red-800 rounded-full text-red-800 font-semibold text-center">
                            Click here to know more....
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
              <div className="md:py-12 py-8"></div>
              <h2 className="text-5xl mx-6 md:mx-0 font-semibold text-center py-12">
                Past Courses
              </h2>
              <div className="md:text-lg pb-12 mx-6 md:mx-0">
                Find the topics and description of the courses that we conducted
                in the past. Take a look at our speakers, audience, agenda, key
                highlights and also testimonials shared by our students. To
                discover our expertise, browse through our past courses, and
                stay updated on our upcoming ones.
              </div>
              <div className="flex mx-6 md:mx-0 flex-wrap justify-center md:justify-start gap-8 my-12">
                {PastFilterData &&
                  PastFilterData?.map((rowData) => {
                    return (
                      <Link
                        to={`/training/courses/${rowData?.coursesLink?.replace(
                          /\s+/g,
                          "-"
                        )}`}
                        state={{ id: rowData?._id }}
                        key={rowData?._id}
                      >
                        <div className="border-4 shadow-xl border-gray-200 rounded-xl p-8 flex items-center justify-between flex-col gap-4 cursor-pointer ClickMe-Card">
                          <img
                            src={BACKEND_URL + rowData.courseImage}
                            alt={rowData.courseName}
                            className="w-64 h-40 object-contain"
                          />
                          <h3 className="font-semibold text-center">
                            {rowData.courseName}
                          </h3>
                          <div className="font-semibold mb-12 text-center text-red-800">
                            Course starting Date: {rowData.courseStartingDate}
                          </div>
                          <div className="border-2 px-2 py-1 border-red-800 rounded-full text-red-800 font-semibold text-center">
                            Click here to know more....
                          </div>
                        </div>
                      </Link>
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
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleCourse: (payload) => dispatch(performGetCourseList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
