import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import one from "../../assets/images/1.webp";
import two from "../../assets/images/2.png";
import three from "../../assets/images/3-1.png";
import four from "../../assets/images/4.png";
import five from "../../assets/images/5.png";
import six from "../../assets/images/6.png";
import seven from "../../assets/images/7.png";
import eight from "../../assets/images/8.png";
import nine from "../../assets/images/9.png";
import abbot from "../../assets/images/abbot.png";
import aiims from "../../assets/images/aiims.png";
import background from "../../assets/images/backgroundimage.webp";
import carousel1 from "../../assets/images/carousal1.jpg";
import carousel2 from "../../assets/images/carousal2.jpg";
import carousel3 from "../../assets/images/carousal3.jpg";
import dha from "../../assets/images/dha.png";
import els from "../../assets/images/els.png";
import image1 from "../../assets/images/image1.webp";
import image2 from "../../assets/images/image2.webp";
import image3 from "../../assets/images/image3.webp";
import nestley from "../../assets/images/nestley.png";
import nus from "../../assets/images/nus.webp";
import pfizier from "../../assets/images/pfizier.png";
import quotes from "../../assets/images/quotes.png";
import reddy from "../../assets/images/reddy-2.png";
import scri from "../../assets/images/scri.png";
import servier from "../../assets/images/servier.png";
import syneos from "../../assets/images/syneos.png";
import termo from "../../assets/images/termo.png";
import user from "../../assets/images/user.jpeg";
import veeva from "../../assets/images/veeva.webp";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import {
  performGetClientList,
  performGetHomeBannerList,
} from "../../redux/actionCreators/homeCreator";
import { BACKEND_URL } from "../../services/constant";
import SeoHeaderTitle from "../SeotitleHeader";

const HomePage = ({ homepageBannerlist, homepageClientList }) => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const [pageData] = usePageData("home");

  const carouselData = [
    {
      imageSrc: carousel3,
      title: "Who We Are",
      description: [
        "Blogpoint Group was conceptualized in 2014 and named after a colorful bird Turacos found in Sub-Saharan Africa.",
        "We are a group of passionate professionals united to make a difference in how science is communicated. Our diversity and inclusiveness bring together the best brains and hearts to serve a very dynamic and challenging space.",
      ],
      tags: ["Resilient", "Learners", "Innovators"],
    },
    {
      imageSrc: carousel2,
      title: "What We Do",
      description: [
        "We create Clear, Cohesive, Complete, Concise, and Concrete communications in a target-specific language and format so that our clients can focus on core research and development and create more solutions enhancing patient care.",
      ],
    },
    {
      imageSrc: carousel1,
      title: "Whom We Serve",
      description: [
        "Biopharmaceuticals | Medical Devices | Diagnostics | Nutraceuticals | Cosmetic and Esthetic | Vaccines | Consumer Healthcare",
        "Research Institutes | Healthcare Professionals | Industry and Academic Professionals",
      ],
    },
  ];

  const testimonials = [
    {
      id: 1,
      image: user,
      content:
        "I would like to recommend Blogpoint to anyone who is looking for a collaboration as an agency to reach out all your scientific needs. Thanks for perseverance as a real partner.",
      content2:
        "I started my collaboration with BD team from Blogpoint. I tried to explain her my requirements which appeared very tough for execution according to my plan, however the way Blogpoint takes up difficult missions and accomplish them is commendable. Blogpoint team have a positive approach towards every mission and client queries. As a team, Blogpoint worked with every bit of the task with so many efforts and hence, the plan and the execution was completely satisfactory and praiseworthy.",
      author: "Associate Medical Director, Gilead Sciences UAE",
    },
    {
      id: 2,
      image: user,
      content:
        "The Adboard meeting with Blogpoint can never be a disappointing. Well-designed presentations and to the point content adds value to your knowledge taking you way high professionally. This is the third advisory board meeting with Blogpoint and as always they impress the clients by an attractive imagery, clear messages, and a stringent communication of the added value. It was an excellent adboard meeting and very well organised. Considering the limited time, the good result is more remarkable. We thank you for the constructive, trusting and very successful co-operation.",
      author: "Regional Marketing Manager,",
      author2: "Consumer Healthcare, Novo nordisk, South East Asia",
    },
    {
      id: 3,
      image: user,
      content:
        "Easy execution experience, extremely patient and knowledgeable team. I really admire the efforts and quality of work Blogpoint comes up with despite the complexity of topic. Being a tough topic, Blogpoint tried to break the complexity to simplicity for easy but effective execution. Without a second thought, I can approach to Blogpoint for all my plans. I get this thought looking at the commendable results Blogpoint comes with, “Strategy execution is the responsibility that makes or breaks executives”. Thank you Blogpoint team for bringing life to my complex topic.",
      author: "Senior Scientific Advisor, Bayer Consumer care , Germany",
    },
    {
      id: 4,
      image: user,
      content:
        "Enthusiastic team with amazing knowledge of strategy planning and execution. I thank Blogpoint for delivering the best and specific deliverables before and during the meeting. I am sure that post meeting deliverables also will be done with complete specificity and perfection.",
      author: "Medical Advisor Oncology, Merck Serono Middle East FZ-LTD",
    },
    {
      id: 5,
      image: user,
      content:
        "So, I worked with Blogpoint for my publications. I must say Blogpoint has a best team who understands your requirements,well patient, knowledgeable and too quick to deliver you requirements on time. Thank you very much for all the support it is lovely to have had 2 successful publications with you.",
      author:
        " APAC - Regional Medical Manager, Menarini Asia-Pacific Pvt. Ltd",
    },
    {
      id: 6,
      image: user,
      content:
        "So, Blogpoint keeps in consideration each and every single detail of your requirements. Blogpoint team helped me to get the best content with ocean full of knowledge and all the aspects included as per my plan. Quality of work Blogpoint planned and executed deserves the applause. From academic point of view, documents, and content I received was very helpful and excellent.",
      author: "Professor,",
      author2:
        " Periodontology(Faculty of Dentistry, Dept of Surgical Sciences) Kuwait University",
    },
    {
      id: 7,
      image: user,
      content:
        "I want to say how much we all appreciate you and your team working so hard to get all of these manuscripts written.I know it was a lot of work on a short turnaround time, but this is really going to help us go above and beyond. Right from identifying the right keywords to formulating the content, they did it all with impeccable ease for me. The manuscript was very scientifically written, and all the deliverables were on time..",
      author: "Senior Manager- Medical Affairs, Terumo India Private Limited",
    },
    {
      id: 8,
      image: user,
      content:
        "My experience working with Blogpoint has been really a smooth one. Blogpoint team understands my queries, requirements, and thoughts very efficiently. Blogpoint has always been so commendable on putting my thoughts and plans to executive. If you are looking forward for strategy building, planning and execution, I would recommend Blogpoint.",
      author: "Country Brand Lead, Pfizer products(I) Pvt Ltd",
    },
    {
      id: 9,
      image: user,
      content:
        "My experience working with Blogpoint has been through the 10 therapeutic modules developed for pian area. They understood the brief so well and executed the project in the promised timelines. Turnaround time on the queries/comments were short. Would love to work with them again.",
      author: "Project manager, Mundipharma, France",
    },
    {
      id: 10,
      image: user,
      content:
        "Blogpoint offer top notch medical writing solutions. I particularly enjoyed their engaging writing style and how efficiently the source material was brought to life on paper was swift. Responding my queries, the Blogpoint team is agile and bunch of fast learners.",
      author: "Bayer Science Fellow, Europe",
    },
  ];

  const [bannerData, setBannerData] = useState([]);
  const fetchBannerData = async () => {
    const result = await homepageBannerlist();
    if (result.status === 200) {
      setBannerData(result?.data);
    }
  };
  const [carousalData, setCarousalData] = useState(carouselData);
  const fetchCarousalData = async () => {
    const result = await homepageClientList();
    if (result.status === 200) {
      setCarousalData(result?.data);
    }
  };

  useEffect(() => {
    fetchBannerData();
    fetchCarousalData();
  }, []);

  let settings = {
    dots: true,
    infinite: true,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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

  const images = [
    { src: abbot, alt: "serve", size: "w-32 h-8" },
    { src: nus, alt: "serve", size: "w-32 h-8" },
    { src: els, alt: "serve", size: "w-32 h-8" },
    { src: dha, alt: "serve", size: "w-32 h-8" },
    { src: aiims, alt: "serve", size: "w-32 h-16" },
    { src: pfizier, alt: "serve", size: "w-32 h-12" },
    { src: scri, alt: "serve", size: "w-32 h-8" },
    { src: termo, alt: "serve", size: "w-32 h-8" },
    { src: nestley, alt: "serve", size: "w-32 h-8" },
    { src: reddy, alt: "serve", size: "w-32 h-8" },
    { src: servier, alt: "serve", size: "w-32 h-8" },
    { src: syneos, alt: "serve", size: "w-32 h-8" },
    { src: veeva, alt: "serve", size: "w-20 h-20" },
  ];

  const gridData = [
    { icon: one, text: "Scientific and Medical Communication" },
    { icon: two, text: "Journal Publications & Conference Presentation" },
    { icon: three, text: "Real-World Evidence & Clinical Trial Services" },
    { icon: four, text: "KOL Engagement & Advocacy Building" },
    { icon: five, text: "Regulatory Writing" },
    { icon: six, text: "QC Review & Copy Editing" },
    { icon: seven, text: "Content Lab Management" },
    { icon: eight, text: "Learning and Development" },
    { icon: nine, text: "Consultancy" },
  ];

  const GridItem = ({ icon, text }) => {
    return (
      <div className="border-b py-4 border-gray-800 my-6">
        <div className="flex items-center gap-4">
          <img src={icon} alt={text} className="w-10 h-10 object-contain" />
          <h6 className="text-[20px] md:text-[22px]">{text}</h6>
        </div>
      </div>
    );
  };

  const TestimonialsSlider = () => {
    return (
      <Slider {...settingCarousal} className="slider3 mx-6 md:mx-0 relative">
        {carousalData &&
          carousalData.map((testimonial) => (
            <div key={testimonial?._id}>
              <div className="relative flex flex-col gap-8 w-full md:w-3/4">
                <img
                  src={BACKEND_URL + testimonial?.clientImage}
                  alt="client"
                  className="w-24 h-24 object-cover rounded-full"
                />
                <p className="md:text-[20px] text-[14px] text-white">
                  {testimonial?.clientFeedback}
                </p>
                <h6 className="md:text-[20px] text-[17px] font-semibold text-white">
                  {testimonial?.clientName}
                </h6>
                <h6 className="md:text-[20px] text-[17px] font-semibold text-white">
                  {testimonial?.clientAddress}
                </h6>
              </div>
            </div>
          ))}
      </Slider>
    );
  };

  return (
    <>
      {pageData && <SeoHeaderTitle pageData={pageData} />}
      <div>
        <div className="relative">
          <div className="xl:ml-28 relative z-10">
            <Slider {...settings} className="slider">
              {bannerData &&
                bannerData?.map((item) => (
                  <div
                    className=" border-0 relative active:border-0 "
                    key={item?._id}
                  >
                    <img
                      src={BACKEND_URL + item.bannerImage}
                      alt="carousel"
                      className="image-carousal absolute z-0"
                    />
                    <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-6 md:p-10 xl:p-20">
                      <h2 className="xl:text-[68px] md:text-[38px] text-[30px] font-semibold">
                        {item.bannerName}
                      </h2>
                      {item?.bannerDescription?.map((paragraph, paraIndex) => (
                        <h3
                          key={paraIndex}
                          className="md:text-[18px] my-2 text-[16px] md:my-4 md:w-4/5 xl:w-3/5 w-full"
                        >
                          {paragraph}
                        </h3>
                      ))}
                      {item.bannerTags && (
                        <p className="md:text-[18px] text-[16px] my-2 md:my-4">
                          {item?.bannerTags?.replace(/,/g, " | ")}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
            </Slider>
            <div className="md:w-[65%] px-6 md:px-10 py-6 md:py-16 mx-6 md:mx-auto bg-[#A21B1F] text-white text-[17px] md:text-xl absolute -bottom-36 md:-bottom-24 z-20 right-0">
              Understanding science, presenting the evidence in an audience
              specific language and format and communicating a story throughout
              the product life cycle is what sets Blogpoint apart. For us, our
              clients are at the centre of all our doing.
            </div>
          </div>
          <div className="bg-[#ddf1e6] w-full absolute top-64 -z-10 right-0 h-80"></div>
          <div className="bg-[#ddf1e6] w-full relative top-1/2 bottom-0 z-0 right-0 h-40"></div>
          <div className="bg-[#ddf1e6] w-full relative top-0 z-0 right-0">
            <div className="container px-6 xl:px-0 mx-auto mb-16">
              <h1 className="xl:text-[45px] md:text-[30px] text-[26px] font-semibold">
                Solutions
              </h1>
              <p className="text-[17px] md:text-[20px] my-6">
                We stay connected with our clients to understand their business
                and needs. We listen to them, always, to develop the best
                matched solutions for them. Our OKR (Objective and Key results)
                approach focusses on creating the right mix of people, content,
                channel, time for our clients and partners and for their
                audience that include scientific professionals, medical,
                non-medical, regulatory audience and laymen. Our teams
                continuously collect information from around the world and
                understand the demand and supply patterns internationally. With
                this understanding combined with our expertise in medical
                communications, we create valuable opportunities for our clients
                and partners.
              </p>
              <div className="grid grid-cols-1 pb-10 md:grid-cols-3 container gap-4 slider-container">
                {gridData &&
                  gridData?.map((item, index) => (
                    <GridItem key={index} icon={item.icon} text={item.text} />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto bg-white">
          <h2 className="xl:text-[45px] md:text-[30px] text-[26px] leading-10 font-semibold mt-8 mx-6 md:mx-0 mb-2 pb-2">
            Whom We Serve
          </h2>
          <div className="flex flex-wrap items-center mx-6 md:mx-0 justify-start py-10">
            {images &&
              images.map((image, index) => (
                <div
                  key={index}
                  className="image-container object-cover p-2 overflow-hidden transition-transform duration-300 hover:scale-125 my-8 flex-none w-1/2 sm:w-1/4 md:w-1/6"
                >
                  <img src={image.src} alt={image.alt} className={image.size} />
                </div>
              ))}
          </div>
        </div>
        <div className="bg-[#f2f2f2] relative">
          <div className="container mx-auto py-10">
            <h2 className="xl:text-[45px] md:text-[30px] text-[26px] mx-6 md:mx-0 py-8 md:py-16 leading-10 font-semibold">
              Why Blogpoint
            </h2>
          </div>
          <div className="xl:ml-28 md:mr-0 mx-6 relative z-10 slick-slider-container">
            <Slider {...settingCarousal}>
              <div className="border-0 z-0 active:border-0">
                <div className="flex carousal bg-[#f2f2f2]">
                  <img
                    src={image1}
                    alt="carousal"
                    className="image-carousal_second mr-0 md:mr-10 "
                  />
                  <img
                    src={image2}
                    alt="carousal"
                    className="image-carousal_second  mr-0 md:mr-10 hidden md:block"
                  />
                  <img
                    src={image3}
                    alt="carousal"
                    className="image-carousal_second  hidden md:block"
                  />
                </div>
                <div className="w-full">
                  <div className="flex flex-col carousal-text text-[28px] md:text-[38px] text-white bottom-2/3 md:-bottom-20 bg-red-800 absolute z-20 text-left p-6 md:p-10">
                    <h6 className="w-48 sm:w-full">
                      Ethics and Confidentiality
                    </h6>
                  </div>
                </div>
              </div>
              <div className="border-0  active:border-0">
                <div className="flex carousal bg-[#f2f2f2]">
                  <img
                    src={image2}
                    alt="carousal"
                    className="image-carousal_second  mr-0 md:mr-10"
                  />
                  <img
                    src={image3}
                    alt="carousal"
                    className="image-carousal_second  mr-0 md:mr-10 hidden md:block"
                  />
                  <img
                    src={image1}
                    alt="carousal"
                    className="image-carousal_second  hidden md:block"
                  />
                </div>
                <div className="w-full">
                  <div className="flex flex-col carousal-text text-[28px] md:text-[38px] text-white bottom-2/3 md:-bottom-20 bg-red-800 absolute z-20 text-left p-6 md:p-10">
                    <h6 className="w-48 sm:w-full">
                      First Time Right Approach
                    </h6>
                  </div>
                </div>
              </div>
              <div className="border-0  active:border-0">
                <div className="flex carousal bg-[#f2f2f2]">
                  <img
                    src={image3}
                    alt="carousal"
                    className="image-carousal_second  mr-0 md:mr-10"
                  />
                  <img
                    src={image1}
                    alt="carousal"
                    className="image-carousal_second  mr-0 md:mr-10 hidden md:block"
                  />
                  <img
                    src={image2}
                    alt="carousal"
                    className="image-carousal_second  hidden md:block"
                  />
                </div>
                <div className="w-full">
                  <div className="flex flex-col carousal-text text-[28px] md:text-[38px] bg-red-800 bottom-2/3 md:-bottom-20 text-white absolute z-20 text-left p-6 md:p-10">
                    <h6 className="w-48 sm:w-full">Experience and Expertise</h6>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="w-full relative">
          <img
            src={background}
            alt="background"
            className="relative z-0 w-full background-carousal h-screen"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 z-10">
            <div className="container py-8 mx-auto">
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <h2 className="xl:text-[45px] md:text-[30px] text-[26px] mx-6 md:mx-0 py-16 leading-10 font-semibold text-white">
                  What Clients Say
                </h2>
                <img
                  src={quotes}
                  alt="quotes"
                  className="hidden md:block w-20 h-20 mt-6 ml-8"
                />
              </div>
              <TestimonialsSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  homepageBannerlist: (payload) => dispatch(performGetHomeBannerList(payload)),
  homepageClientList: (payload) => dispatch(performGetClientList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
