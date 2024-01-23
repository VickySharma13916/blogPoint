import React, { useEffect, useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import background from "../../assets/images/backgroundimage.webp";
import career from "../../assets/images/career.jpg";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import { performGetCarrerList } from "../../redux/actionCreators/carrerCreators";
import CarrerForm from "../CarrerForm";
import SeoHeaderTitle from "../SeotitleHeader";
import DisplayText from "../DisplayHtmlText";
import { useLocation } from "react-router-dom";
import media from "../../assets/images/mobile.jpg";

const Career = ({ fetchCarrerList }) => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.substring(1);
  const [pageData] = usePageData(url);
  const [isVisible, setIsVisible] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [userData, setUserData] = useState(null);
  const [carrerData, setCarrerData] = useState([]);
  const fetchCarrer = async () => {
    const result = await fetchCarrerList();
    if (result.status === 200) {
      setCarrerData(result?.data?.docs?.data);
    }
  };
  useEffect(() => {
    fetchCarrer();
  }, []);
  const handleShowPopup = (data) => {
    setShowPopup(true);
    setUserData(data);
  };
  const handleHidePopup = () => {
    setShowPopup(false);
  };

  let settingCarousal = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const supportItems = [
    { text: "Medical Services" },
    { text: "Training & E learning Development" },
    { text: "Regulatory Services" },
    { text: "Marketing & Sales" },
    { text: "Quality Control" },
    { text: "Finance" },
    { text: "Quality Analysis" },
    { text: "Operations" },
    { text: "Program & Designing" },
    { text: "Human Resource" },
    { text: "Market Research" },
    { text: "Information Technology" },
    { text: "Project Management" },
  ];
  const testimonials = [
    {
      id: 1,
      content:
        "We foster a supportive and inclusive work culture that encourages creativity, collaboration, and personal growth. We believe in empowering our team members to take ownership of their work and contribute their unique skills and perspectives.",
      author: "Empowering Work Culture",
    },
    {
      id: 2,
      content:
        "As part of our team, you’ll have the opportunity to work on diverse and cutting-edge projects in collaboration with renowned industry experts. From clinical research to medical publications, you’ll be at the forefront of advancing healthcare communication",
      author: "Cutting-Edge Projects",
    },
    {
      id: 3,
      content:
        "We value continuous learning and provide ample opportunities for professional development. Through training initiatives, we ensure that our team stays up to date with the latest trends and developments in the healthcare industry.",
      author: "Continuous Learningure",
    },
    {
      id: 4,
      content:
        "At Blogpoint, your work will have a direct impact on healthcare professionals and patients worldwide. By effectively communicating scientific information, you’ll contribute to improving patient outcomes, advancing medical research, and driving positive change in the industry.",
      author: "Impactful Worke",
    },
    {
      id: 5,
      content:
        "We understand the importance of maintaining a healthy work-life balance. With supportive policies and flexible work arrangements such as remote, hybrid and in-office, we strive to create an environment where you can thrive both personally and professionally.",
      author: "Work-Life Balance",
    },
  ];
  const TestimonialsSlider = () => {
    return (
      <Slider {...settingCarousal} className="mx-6 md:mx-0 relative">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <div className="relative flex items-center justify-center flex-col gap-8 w-full md:w-3/5 mx-auto">
              <h3 className="text-xl font-semibold text-white">
                {testimonial?.author}
              </h3>
              <h4 className="text-[17px] md:text-xl font-semibold text-justify text-white">
                {testimonial?.content}
              </h4>
            </div>
          </div>
        ))}
      </Slider>
    );
  };
  // const accordionCard = [
  //   {
  //     title: "Associate/Sr. Associate - Business Development",
  //     desc: "Description:",
  //     description:
  //       "In order to drive our aggressive growth plans, we are looking to hire smart, entrepreneurial people who can help identify and develop new business opportunities for us. In addition to business development, the candidate would also be responsible for handling key clients. The candidate would be a part of our marketing team to market Blogpoint’s services to prospective clients across the globe.",
  //     description1:
  //       "Candidate will get a chance to get hands-on experience on multiple BD activities and grow professionally each day.",
  //     responsibility: "Primary Responsibility",
  //     Responsibilitylist: [
  //       "Lead generation through different modes – mails, calls, meetings, e-meetings, LinkedIn, etc.",
  //       " Cold calling, traveling within India/outside India as required.",
  //       "Generating and maintaining database of allocated region/country.",
  //       "Scheduling TCs/meetings/e-meetings and ensuring to meet RFI/RFP targets as set by management.",
  //       "Meeting financial target as defined by management.",
  //       "Generating and responding to RFI/RFPs.",
  //       "Identify and evaluate specific new profitable business opportunities.",
  //       "To maintain an excellent client relationship with existing and potential client.",
  //       "Report on targets, activity and performance as required by management.",
  //       "Actively monitor market trends through personal contact with clients and industry associated meetings/events and seminars. Provide feedback to Business Head/Director.",
  //       "Proactive and responsive to clients and prospective clients.",
  //       "Proactively develop and improve processes to service clients.",
  //     ],
  //     requirement: "Requirements:",
  //     requirementList: [
  //       "Must be from life sciences background",
  //       "Proficiency in English (Written and Spoken) and confident",
  //       "Self-motivated/self-driven",
  //       "Good understanding of business process in service industry– through lead generation to project delivery",
  //       "Better understanding of different departments in pharma/medical device company – Medical affairs, marketing, regulatory, pharmacovigilance, learning and development, etc. And different activities managed by them.",
  //       "Understanding of services for different departments in pharma/biotech/medical devices.",
  //       "Proficiency in MS Office.",
  //     ],
  //   },
  //   {
  //     title: "Associate - Project Management",
  //     desc: "Job Description for Associate Project Management",
  //     description:
  //       "The Project Management Associate manages projects end to end. The project management responsibilities include coordination and completion of projects on time within budget and within scope. The role requires to coordinate internally with the full time employees and freelancers/third party vendors and externally with the clients to successfully complete the execution of the project (financially and technically) ensuring timely and quality delivery.",
  //     description1:
  //       " Candidate will get a chance to get hands-on experience on multiple PM activities and grow professionally each day.",
  //     experience: "Experience:",
  //     experience1: "3-4 years",
  //     responsibility: "Primary Responsibility",
  //     Responsibilitylist: [
  //       "Coordination with internal team and clients",
  //       "Define scope of project, allocate relevant resources, prepare the project plan and communicate the same to client and management",
  //       "Ensure that all projects are delivered on-time, within scope and within budget",
  //       "Monitor and track the progress of projects and escalate exceptions of progress or additional scope of work (technical and financially)",
  //       "Monitor the quality of the project by ensuring the QC process has been taken care of before the final submission of the project to the client",
  //       "Risk management plan for contingencies that might arise during the project",
  //       "Proper project documentation for various drafts, MOMs, client and internal communication to ensure clear communication throughout the project",
  //       "Calculate the profitability of each project at the end of the project and assessment of the technical team working on it",
  //       "Take client feedback and provide inputs on improving further",
  //       "Lead and own the project and enhance leadership skills",
  //     ],
  //     requirement: "Requirements:",
  //     requirementList: [
  //       "Proficiency in English (Written and Spoken) and confident",
  //       "Self-motivated/self-driven",
  //       "Proficiency in MS Office.",
  //     ],
  //   },
  //   {
  //     title: "Graphic Designer + Video Editor",
  //     desc: "Role and Responsibilities:",
  //     experience: "Video Editor Expertise:",
  //     expertiseList: [
  //       "Should work flexible and adapt to new technology.",
  //       "Trim footage segments and combine the sequences of the film.",
  //       "Make an overall video brand messaging strategy.",
  //       "Prepare rough and final cuts for the videos.",
  //       "Input effects, graphics, dialogues, and music into the videos to make them more visually appealing.",
  //       "Insert music and necessary sound effects to the video clips",
  //       "Discover and implement new techniques and methods to maximize the company s efficiency.",
  //       "Monitor all technical aspects of recording and editing.",
  //       "Work effectively with the team members.",
  //       "Selecting colors, fonts, photographs, layouts and other design elements to communicate creative concepts.",
  //     ],
  //     responsibility: "Skill set required:",
  //     Responsibilitylist: [
  //       "Proven experience as video editor or similar role",
  //       "Experience in video editing work as inserting animation, graphics and sound effects",
  //       "Knowledge and a good understanding of Motion Graphics",
  //       "Experience Working With Video Editing and Designing Software Such As Adobe Premiere Pro, After Effects, Photoshop, Illustrator, InDesign etc",
  //     ],
  //     requirement: "Graphic Designer Expertise:",
  //     requirementList: [
  //       " Should have experience in working on below documents (but not limited to):",
  //       "Postcards and flyers",
  //       "Magazine and newspaper ads",
  //       "Posters, banners and billboards",
  //       "Infographics",
  //       "Brochures (print and digital)",
  //       "Email marketing templates",
  //       "PowerPoint presentations",
  //       "LBL, Books",
  //     ],
  //   },
  //   {
  //     title: "QC Specialist",
  //     description:
  //       "Blogpoint is a medical communications company which provides customized and cost effective solutions for medical writing. The team of young, dynamic, and energetic professionals contribute to the core service spectrum which includes publication writing; clinical research and regulatory writing; print and digital marketing solutions; and medical content development for physicians, key opinion leaders, education institutes, pharmaceutical organizations, or any other healthcare professionals. The team members are from diverse backgrounds who work together with the aim of delivering high standard scientific communications services to the clients.",
  //     description1:
  //       "Blogpoint also conducts medical writing training workshops to keep the medical fraternity updated on the current guidelines, ethical issues, and importance of writing accurate medical content for the healthcare industry.",
  //     responsibility: " Role and Responsibilities: ",
  //     Responsibilitylist: [
  //       "Quality control of all deliverables: To conduct QC of all deliverables for the company, not limited to client deliverables and provide the findings in appropriate checklists in a timely manner.",
  //       "Copy editing of all deliverables: To conduct copyediting of all deliverables for the company, not limited to client deliverables using appropriate checklists and briefing documents in a timely manner. To verify and assure that all client-specific instructions and journal guidelines are taken into account as appropriate.",
  //       "Plagiarism check: To conduct plagiarism checks of all deliverables using appropriate software and flag the highly plagiarised content in a timely manner to lead QC specialist and management.",
  //     ],
  //     experience:
  //       "Your roles & responsibilities include, but are not limited to:",
  //   },
  // ];

  const Section = ({ rowData, isVisible, handleShowDescription }) => {
    return (
      <div
        className={`border border-[#d9d9d9] ${
          isVisible ? "bg-[#fff]" : "bg-[#f4f4f4]"
        } transition-all p-6 cursor-pointer`}
        onClick={() => handleShowDescription()}
        key={rowData?._id}
      >
        <div className="flex gap-2 w-full md:w-auto flex-col md:flex-row justify-between py-2 items-center">
          <h2 className="text-xl md:text-2xl text-[#333] font-semibold">
            {rowData?.carrerAccordionTitle}
          </h2>
          <div className="flex gap-3 items-start w-full md:w-auto md:items-center justify-start md:justify-center">
            <button
              className="border-blue-400 cursor-pointer border text-blue-400 bg-blue-100 px-4 py-2 rounded"
              onClick={() => handleShowPopup(rowData)}
            >
              Apply Now
            </button>
            <button>
              {isVisible ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
            </button>
          </div>
        </div>
        {isVisible && (
          <div className="border-t pt-4">
            <DisplayText htmlContent={rowData?.carrerAccordionDescription} />
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {pageData && <SeoHeaderTitle pageData={pageData} />}
      <div>
        <div className="xl:ml-28 relative z-10">
          <div className="border-0 relative active:border-0">
            <div className="absolute image-background1"></div>
            <img
              src={career}
              alt="events"
              className="image-carousal relative object-cover md:block hidden"
            />
            <img
              src={media}
              alt="news"
              className="image-carousal relative object-cover md:hidden block"
            />
            <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-6 md:p-10 xl:p-20">
              <h1 className="xl:text-[68px] md:text-[38px] text-[30px] xl:w-2/3 w-full font-semibold">
                Careers
              </h1>
              <h3 className="text-[17px] md:text-xl my-4 xl:w-2/3 w-full">
                At Blogpoint, we are a leading global provider of innovative
                healthcare communication solutions. We work with pharmaceutical
                companies, medical device manufacturers, research institutes,
                and healthcare organizations to deliver high-quality scientific
                writing, medical communications, regulatory writing, and digital
                marketing services. Our goal is to connect science and
                communication, ensuring that accurate and impactful information
                reaches healthcare professionals, patients, and stakeholders
                worldwide.
              </h3>
            </div>
            <div className="xl:w-3/5 md:w-4/5 px-4 md:px-10 py-4 md:py-8 mx-6 md:mx-auto bg-red-800 text-white text-lg absolute -bottom-44 sm:-bottom-32 md:-bottom-28 z-20 right-0">
              <h6 className="text-[17px] md:text-xl py-6 md:px-4">
                Are you passionate about making a meaningful impact in the
                healthcare industry? Do you thrive in a dynamic and
                collaborative work environment? If so, Blogpoint Healthcare
                Solutions is the perfect place for you to grow and excel in your
                career!
              </h6>
            </div>
          </div>
        </div>
        <div className="bg-[#f2f2f2] w-full absolute top-64 -z-10 right-0 h-[26rem]"></div>
        <div className="bg-[#f2f2f2] w-full relative top-1/2 bottom-0 z-0 right-0  h-56 md:h-40"></div>
        <div className="w-full relative bg-[#f2f2f2]">
          <img
            src={background}
            alt="background"
            className="relative z-0 w-full background-carousal1"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 z-10">
            <div className="container py-8 mx-auto">
              <h2 className="md:text-[42px] lg:text-[48px] text-[26px] px-6 md:px-0 py-4 md:py-16 leading-10 font-semibold w-full text-center text-white">
                Why Work With Us?
              </h2>
              <TestimonialsSlider />
            </div>
          </div>
        </div>
        <div className="w-full relative bg-[#f2f2f2]">
          <div className="container mx-auto px-6 lg:px-0">
            <h2 className="text-[17px] md:text-[30px] lg:text-[45px] py-4 font-semibold">
              Join Our Growing Team
            </h2>
            <div className="my-6 md:my-12 text-[17px] md:text-xl">
              We are always on the lookout for talented individuals who share
              our passion for healthcare communication. Whether you are an
              experienced professional or a fresh graduate, we offer exciting
              opportunities for career growth and development.
            </div>
            <div className="text-[17px] md:text-xl">
              Explore current openings and learn more about the rewarding career
              paths available at Blogpoint.
            </div>
            <h2 className="text-[26px] md:text-[30px] lg:text-[45px] py-4 md:text-5xl font-bold">
              Our Departments
            </h2>
            <ul className="list-outside flex-wrap mt-4 md:mt-0 md:mb-12 py-6 md:py-12 flex gap-4 justify-between">
              {supportItems &&
                supportItems.map((item, index) => (
                  <li
                    key={index}
                    className="list-none w-[150px] md:w-2/5 relative ml-12 pl-4"
                  >
                    <span className="width-spaning absolute top-1/4 -left-8"></span>
                    <h3 className="text-[17px]">{item.text}</h3>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div className="container mx-auto py-12 px-6 lg:px-0">
            <div className="text-[26px] md:text-[30px] lg:text-[45px] py-4 font-semibold">
              Current Openings
            </div>
            <div className="text-xl md:my-12">
              Explore current openings and learn more about the rewarding career
              paths available at Blogpoint.
            </div>
            <div className="flex flex-col mt-12 gap-4 md:gap-12">
              {carrerData &&
                carrerData?.map((rowData) => {
                  return (
                    <React.Fragment key={rowData?._id}>
                      <Section
                        rowData={rowData}
                        isVisible={isVisible === rowData?.carrerAccordionTitle}
                        handleShowDescription={() =>
                          setIsVisible(
                            isVisible === rowData?.carrerAccordionTitle
                              ? ""
                              : rowData?.carrerAccordionTitle
                          )
                        }
                      />
                    </React.Fragment>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <CarrerForm
          userData={userData}
          handleHidePopup={handleHidePopup}
          showPopup={showPopup}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchCarrerList: (payload) => dispatch(performGetCarrerList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Career);
