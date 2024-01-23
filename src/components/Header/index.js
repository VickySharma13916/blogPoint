import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { LiaSearchSolid } from "react-icons/lia";
import {
  RiArrowDownSFill,
  RiArrowDropDownLine,
  RiArrowRightSFill,
} from "react-icons/ri";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/images/turacoz-logo-1.png";
import { performGetHeader } from "../../redux/actionCreators/headerCreators";
import DisplayText from "../DisplayHtmlText";
import HeaderAdvertise from "../HeaderAdvertise";
import PopupShowRequest from "../PopupRequest";
import SearchResult from "../SearchResult";

const Header = ({ getHeader }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  const [show, setShow] = useState(false);
  const [searchbar, setSearchbar] = useState(false);
  const [Header, setHeader] = useState(null);
  const fetchHeaderData = async () => {
    const result = await getHeader();
    if (result.status === 200) {
      const filteredHeader = result?.data?.docs?.data?.filter(
        (item) => item.status === true
      );
      setHeader(filteredHeader);
    }
  };

  useEffect(() => {
    fetchHeaderData();
  }, []);
  const handleShowRequest = () => {
    setShowRequest(true);
  };
  const handleHideRequest = () => {
    setShowRequest(false);
  };
  const mouseEnter = (type) => {
    if (type === "training") {
      setShow(true);
    } else if (type === "Solutions") {
      setShowDropdown(true);
    } else if (type === "About") {
      setShowDrop(true);
    }
  };
  const mouseLeave = (type) => {
    if (type === "training") {
      setShow(false);
    } else if (type === "Solutions") {
      setShowDropdown(false);
    } else if (type === "About") {
      setShowDrop(false);
    }
  };
  const handleDropdownShow = (type) => {
    if (type === "training") {
      setShow(!show);
      setShowDrop(false);
      setShowDropdown(false);
    } else if (type === "Solutions") {
      setShow(false);
      setShowDrop(false);
      setShowDropdown(!showDropdown);
    } else if (type === "About") {
      setShowDrop(!showDrop);
      setShow(false);
      setShowDropdown(false);
    }
  };

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };
  const handleLink = () => {
    setShowMenu(false);
  };
  const Trainingitems = [
    { title: "courses", link: "courses" },
    { title: "Webinars", link: "webinars" },
    { title: "Workshops", link: "Workshops" },
    { title: "Institutional Training", link: "institutional-training" },
  ];
  const Aboutitems = [
    { title: "About Us", link: "" },
    { title: "Our values", link: "/our-values" },
    { title: "Our Team", link: "/our-team" },
    { title: "Life At Turacoz", link: "/life-at-turacoz" },
  ];

  // Search Bar Functionality
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false); //Controlling Search Div behaviour
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setShowSearch(true);
  };

  return (
    <>
      <HeaderAdvertise />
      <header
        className={`w-full p-0 sticky top-0 md:h-32 lg:h-24 ${
          searchbar ? "h-44" : "h-36"
        } bg-white z-50`}
      >
        <div className="container mx-auto">
          <div className="py-0 flex justify-center md:justify-between items-start">
            <Link to="/" className="p-0">
              <img src={logo} className="logo-image" alt="turacoz logo" />
            </Link>
            <div className="md:flex hidden flex-col mt-2">
              <div className="flex justify-end">
                <ul className="flex list-unstyled m-0 gap-4">
                  {Header && Header?.length > 0 && (
                    <li className="font-weight">
                      {Header?.map((head) => {
                        return (
                          <div
                            className="container mx-auto relative"
                            key={head?._id}
                          >
                            <div className="absolute top-0 -right-1.5 w-3 h-3 bg-red-500 rounded-full glow_header"></div>
                            <div className="h-8 overflow-hidden">
                              <DisplayText htmlContent={head?.headerName} />
                            </div>
                          </div>
                        );
                      })}
                    </li>
                  )}
                  <li className="font-weight">
                    <Link to="/news-media">News & Media</Link>
                  </li>
                  <li className="font-weight">
                    <Link to="/events">Events</Link>
                  </li>
                  <li
                    className="font-weight relative group"
                    onMouseLeave={() => mouseLeave("training")}
                  >
                    <button
                      onClick={() => handleDropdownShow("training")}
                      onMouseEnter={() => mouseEnter("training")}
                      className="flex items-center font-semibold"
                    >
                      Trainings
                      <RiArrowDropDownLine
                        size={20}
                        className="dropdown-icon"
                      />
                    </button>
                    {show && (
                      <div className=" absolute shadow-md top-full left-0 z-20 w-48 bg-[#e2e2e2] border border-[#eee] shadowBox">
                        <ul>
                          {Trainingitems?.map((item, index) => (
                            <li
                              key={index}
                              className="py-3 px-4 font-semibold text-black hover:bg-[#00000008] hover:text-[#800E17]  cursor-pointer"
                            >
                              <Link to={"/training/" + item.link}>
                                <div className="capitalize">{item.title}</div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                  <li className="font-weight">
                    <Link to="/career">Career</Link>
                  </li>
                  <li className="font-weight">
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                  <li
                    className="text-white font-semibold h-[22px] request px-[10px] text-[14px] cursor-pointer"
                    onClick={handleShowRequest}
                  >
                    Request For Proposal
                  </li>
                </ul>
              </div>
              <div
                className={`flex ${showSearch && "flex-col"} ${
                  searchbar ? "justify-between w-full" : "justify-end"
                } mt-2`}
              >
                <ul
                  className={`flex list-unstyled m-0 ${
                    searchbar && "w-full"
                  } gap-4`}
                >
                  {searchbar ? (
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={handleInputChange}
                      placeholder="Search Blogs, Courses, Webinar, Workshops"
                      className="md:block hidden appearance-none w-full  text-gray-700 border rounded border-gray-500 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                  ) : (
                    <>
                      <li className="font-weight">
                        <div id="google_translate_element"></div>
                      </li>
                      <li className="font-weight">
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        className="font-weight relative group"
                        onMouseLeave={() => mouseLeave("About")}
                      >
                        <button
                          onClick={() => handleDropdownShow("About")}
                          onMouseEnter={() => mouseEnter("About")}
                          className="flex items-center font-semibold"
                        >
                          About
                          <RiArrowDropDownLine
                            size={20}
                            className="dropdown-icon"
                          />
                        </button>
                        {showDrop && (
                          <div className="absolute top-full left-0 z-20 w-52 bg-[#e2e2e2] border border-[#eee] shadowBox">
                            <ul>
                              {Aboutitems?.map((item, index) => (
                                <li
                                  key={index}
                                  className="py-3 px-4 font-semibold text-black hover:bg-[#00000008] hover:text-[#800E17]  cursor-pointer"
                                >
                                  <Link to={"/about" + item.link}>
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                      <li className="font-weight">
                        <div
                          onClick={() => handleDropdownShow("Solutions")}
                          onMouseEnter={() => mouseEnter("Solutions")}
                          onMouseLeave={() => mouseLeave("Solutions")}
                        >
                          <div className="flex items-center group">
                            Solutions
                            <RiArrowDropDownLine
                              size={20}
                              className="dropdown-icon"
                            />
                          </div>
                          {showDropdown && (
                            <div className="flex flex-col w-full lg:w-auto lg:flex-row solution-dropdown">
                              <ul className="p-0 lg:flex-1 gap-1">
                                <li className="font-weight flex items-center">
                                  <RiArrowDownSFill color="#811619" size={25} />
                                  <Link to="/solutions/scientific-and-medical-communication">
                                    Scientific and Medical Communication
                                  </Link>
                                </li>
                                <li className="text-drop font-normal">
                                  <Link to="/solutions/scientific-and-medical-communication/medical-communication-strategy">
                                    <span />
                                    Medical Communication Strategy
                                  </Link>
                                </li>
                                <li className="text-drop font-normal">
                                  <Link to="/solutions/scientific-and-medical-communication/patient-centric-communication">
                                    <span />
                                    Patient-Centric Communication
                                  </Link>
                                </li>
                                <li className="text-drop font-normal">
                                  <Link to="/solutions/scientific-and-medical-communication/medical-information">
                                    <span />
                                    Medical Information
                                  </Link>
                                </li>
                                <li className="text-drop font-normal">
                                  <Link to="/solutions/scientific-and-medical-communication/medical-education">
                                    <span />
                                    Medical Education
                                  </Link>
                                </li>
                                <li className="text-drop font-normal">
                                  <Link to="/solutions/scientific-and-medical-communication/other-communications">
                                    <span />
                                    Other Communications
                                  </Link>
                                </li>
                                <li className="text-drop font-normal">
                                  <Link to="/solutions/scientific-and-medical-communication/referencing-and-annotation">
                                    <span />
                                    Referencing and Annotation
                                  </Link>
                                </li>
                              </ul>
                              <ul className="px-0 lg:px-4 lg:flex-1 gap-1">
                                <li className="font-weight flex items-start">
                                  <RiArrowDownSFill color="#811619" size={25} />
                                  <Link to="/solutions/journal-publications-conference-presentation">
                                    Journal Publications & Conference
                                    Presentation
                                  </Link>
                                </li>
                                <li className="text-drop font-normal">
                                  <Link to="/solutions/journal-publications-conference-presentation/journal-publications">
                                    <span />
                                    Journal Publications
                                  </Link>
                                </li>
                                <li className="text-drop font-normal">
                                  <Link to="/solutions/journal-publications-conference-presentation/publication-planning">
                                    <span />
                                    Publication Planning
                                  </Link>
                                </li>
                                <li className="text-drop font-normal">
                                  <Link to="/solutions/journal-publications-conference-presentation/publication-development">
                                    <span />
                                    Publication Development
                                  </Link>
                                </li>
                                <li className="text-drop font-normal">
                                  <Link to="/solutions/journal-publications-conference-presentation/publication-support">
                                    <span />
                                    Publication Support
                                  </Link>
                                </li>
                                <li className="text-drop font-normal">
                                  <Link to="/solutions/journal-publications-conference-presentation/reformatting-and-resubmission">
                                    <span />
                                    Reformatting and Resubmission
                                  </Link>
                                </li>
                                <li className="text-drop font-normal">
                                  <Link to="/solutions/journal-publications-conference-presentation/addressing-journal-review-comments">
                                    <span />
                                    Addressing Journal Review Comments
                                  </Link>
                                </li>
                                <li className="text-drop font-normal">
                                  <Link to="/solutions/journal-publications-conference-presentation/conference-activities">
                                    <span />
                                    Conference Activities
                                  </Link>
                                </li>
                                <li className="text-drop font-normal">
                                  <Link to="/solutions/journal-publications-conference-presentation/systematic-literature-review-and-targeted-literature-review">
                                    <span />
                                    Systematic Literature Review and Targeted
                                    Literature Review
                                  </Link>
                                </li>
                              </ul>
                              <ul className="px-0 lg:px-4 lg:flex-1">
                                <li className="font-weight dropdown_text flex items-center">
                                  <RiArrowRightSFill
                                    color="#811619"
                                    size={25}
                                  />
                                  <Link to="/solutions/real-world-evidence-clinical-trial-services">
                                    Real-World Evidence & Clinical Trial
                                    Services
                                  </Link>
                                </li>
                                <li className="font-weight dropdown_text flex items-center">
                                  <RiArrowRightSFill
                                    color="#811619"
                                    size={25}
                                  />
                                  <Link to="/solutions/kol-engagement-advocacy-building">
                                    Kol Engagement & Advocacy Building
                                  </Link>
                                </li>
                                <li className="font-weight dropdown_text flex items-center">
                                  <RiArrowRightSFill
                                    color="#811619"
                                    size={25}
                                  />
                                  <Link to="/solutions/regulatory-writing">
                                    Regulatory Writing
                                  </Link>
                                </li>
                                <li className="font-weight dropdown_text flex items-center">
                                  <RiArrowRightSFill
                                    color="#811619"
                                    size={25}
                                  />
                                  <Link to="/solutions/qc-reviewcopy-editing">
                                    QC Review & Copy Editing
                                  </Link>
                                </li>
                                <li className="font-weight dropdown_text flex items-center">
                                  <RiArrowRightSFill
                                    color="#811619"
                                    size={25}
                                  />
                                  <Link to="/solutions/content-lab-management">
                                    Content Lab Management
                                  </Link>
                                </li>
                                <li className="font-weight dropdown_text flex items-center">
                                  <RiArrowRightSFill
                                    color="#811619"
                                    size={25}
                                  />
                                  <Link to="/solutions/learning-and-development">
                                    Learning and Development
                                  </Link>
                                </li>
                                <li className="font-weight dropdown_text flex items-center">
                                  <RiArrowRightSFill
                                    color="#811619"
                                    size={25}
                                  />
                                  <Link to="/solutions/consultancy">
                                    Consultancy
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                      <li className="font-weight">
                        <Link to={"/resources"}>Resources</Link>
                      </li>
                      <li className="font-weight">
                        <Link to={"https://turatrunk.turacoz.com/"}>
                          Our Work
                        </Link>
                      </li>
                    </>
                  )}
                  <li className="flex items-center">
                    {searchbar ? (
                      <svg
                        className="w-3 h-3 cursor-pointer"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                        onClick={() => {
                          setShowSearch(false);
                          setSearchbar(false);
                        }}
                      >
                        <path
                          stroke="#a11b1f"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                    ) : (
                      <LiaSearchSolid
                        size={20}
                        color="#991b1b"
                        className="cursor-pointer"
                        onClick={() => setSearchbar(true)}
                      />
                    )}
                  </li>
                </ul>
                {showSearch && (
                  <SearchResult
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    showSearch={showSearch}
                    setShowSearch={setShowSearch}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center justify-between mt-4 mx-6">
            <ul className="flex list-unstyled m-0 gap-4">
              <li
                className="text-white font-semibold h-[22px] request px-[10px] text-[14px] cursor-pointer"
                onClick={handleShowRequest}
              >
                Request For Proposal
              </li>
            </ul>
            <div className="flex gap-4">
              {searchbar ? (
                <svg
                  className="w-3 h-3 cursor-pointer"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                  onClick={() => {
                    setShowSearch(false);
                    setSearchbar(false);
                  }}
                >
                  <path
                    stroke="#a11b1f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              ) : (
                <>
                  <LiaSearchSolid
                    size={20}
                    color="#991b1b"
                    onClick={() => setSearchbar(true)}
                    className="cursor-pointer"
                  />
                  <AiOutlineMenu
                    size={20}
                    color="#991b1b"
                    onClick={() => toggleMenu()}
                    className="cursor-pointer"
                  />
                </>
              )}
            </div>
          </div>
        {searchbar && (
          <div className="px-6 py-2 md:hidden block">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search Blogs, Courses, Webinar, Workshops"
              className="appearance-none block w-full  text-gray-700 border rounded border-gray-500  py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            {showSearch && (
              <SearchResult
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                showSearch={showSearch}
                setShowSearch={setShowSearch}
              />
            )}
          </div>
        )}
        {showMenu && (
          <div className="flex md:hidden bg-white">
            <div className="menu-container w-full px-4 my-4 max-h-[75vh] overflow-y-auto">
              <ul className="list-inside text-[14px]">
                {Header && Header?.length > 0 && (
                  <li className={`font-weight ${Header && "py-[11px] px-4"}`}>
                    {Header?.map((head) => {
                      return (
                        <div
                          className="container mx-auto relative"
                          key={head?._id}
                        >
                          <div className="absolute top-0 -right-1.5 w-3 h-3 bg-red-500 rounded-full glow_header"></div>
                          <DisplayText htmlContent={head?.headerName} />
                        </div>
                      );
                    })}
                  </li>
                )}
                <li className="py-[11px] px-4 border-b border-[#00000008]">
                  <Link to="/" onClick={handleLink}>
                    Home
                  </Link>
                </li>
                <li className="py-[11px] px-4 border-b border-[#00000008] font-semibold bg-[#00000008]">
                  About
                </li>
                <ul className="list-inside pl-4">
                  <li className="py-[11px] px-4 border-b border-[#00000008]">
                    <Link to="/about" onClick={handleLink}>
                      About Us
                    </Link>
                  </li>
                  <li className="py-[11px] px-4 border-b border-[#00000008]">
                    <Link to="/about/our-values" onClick={handleLink}>
                      Our Values
                    </Link>
                  </li>
                  <li className="py-[11px] px-4 border-b border-[#00000008]">
                    <Link to="/about/our-team" onClick={handleLink}>
                      Our Team
                    </Link>
                  </li>
                  <li className="py-[11px] px-4 border-b border-[#00000008]">
                    <Link to="/about/life-at-turacoz" onClick={handleLink}>
                      Life At Turacoz
                    </Link>
                  </li>
                </ul>
                <li className="py-[11px] px-4 border-b border-[#00000008] font-semibold bg-[#00000008]">
                  Solutions
                </li>
                <ul className="list-inside pl-4">
                  <li className="py-[11px] pl-4 border-b border-[#00000008] font-semibold">
                    <Link
                      to="/solutions/scientific-and-medical-communication"
                      onClick={handleLink}
                    >
                      Scientific and Medical Communication
                    </Link>
                  </li>
                  <ul className="pt-[11px] pl-4">
                    <li className="py-[11px] px-4 border-b border-[#00000008]">
                      <Link
                        to="/solutions/scientific-and-medical-communication/medical-communication-strategy"
                        onClick={handleLink}
                      >
                        Medical Communication Strategy
                      </Link>
                    </li>
                    <li className="py-[11px] px-4 border-b border-[#00000008]">
                      <Link
                        to="/solutions/scientific-and-medical-communication/patient-centric-communication"
                        onClick={handleLink}
                      >
                        Patient-Centric Communication
                      </Link>
                    </li>
                    <li className="py-[11px] px-4 border-b border-[#00000008]">
                      <Link
                        to="/solutions/scientific-and-medical-communication/medical-information"
                        onClick={handleLink}
                      >
                        Medical Information
                      </Link>
                    </li>
                    <li className="py-[11px] px-4 border-b border-[#00000008]">
                      <Link
                        to="/solutions/scientific-and-medical-communication/medical-education"
                        onClick={handleLink}
                      >
                        Medical Education
                      </Link>
                    </li>
                    <li className="py-[11px] px-4 border-b border-[#00000008]">
                      <Link
                        to="/solutions/scientific-and-medical-communication/other-communications"
                        onClick={handleLink}
                      >
                        Other Communications
                      </Link>
                    </li>
                    <li className="py-[11px] px-4 border-b border-[#00000008]">
                      <Link
                        to="/solutions/scientific-and-medical-communication/referencing-and-annotation"
                        onClick={handleLink}
                      >
                        Referencing and Annotation
                      </Link>
                    </li>
                  </ul>
                  <li className="py-[11px] pl-4 border-b border-[#00000008] font-semibold">
                    <Link
                      to="/solutions/journal-publications-conference-presentation"
                      onClick={handleLink}
                    >
                      Journal Publications & Conference Presentation
                    </Link>
                  </li>
                  <ul className="pl-4">
                    <li className="py-[11px] pl-4 border-b border-[#00000008]">
                      <Link
                        to="/solutions/journal-publications-conference-presentation/journal-publications"
                        onClick={handleLink}
                      >
                        Journal Publications
                      </Link>
                    </li>
                    <li className="py-[11px] px-4 border-b border-[#00000008]">
                      <Link
                        to="/solutions/journal-publications-conference-presentation/publication-planning"
                        onClick={handleLink}
                      >
                        Publication Planning
                      </Link>
                    </li>
                    <li className="py-[11px] px-4 border-b border-[#00000008]">
                      <Link
                        to="/solutions/journal-publications-conference-presentation/publication-development"
                        onClick={handleLink}
                      >
                        Publication Development
                      </Link>
                    </li>
                    <li className="py-[11px] px-4 border-b border-[#00000008]">
                      <Link
                        to="/solutions/journal-publications-conference-presentation/publication-support"
                        onClick={handleLink}
                      >
                        Publication Support
                      </Link>
                    </li>
                    <li className="py-[11px] px-4 border-b border-[#00000008]">
                      <Link
                        to="/solutions/journal-publications-conference-presentation/reformatting-and-resubmission"
                        onClick={handleLink}
                      >
                        Reformatting and Resubmission
                      </Link>
                    </li>
                    <li className="py-[11px] px-4 border-b border-[#00000008]">
                      <Link
                        to="/solutions/journal-publications-conference-presentation/addressing-journal-review-comments"
                        onClick={handleLink}
                      >
                        Addressing Journal Review Comments
                      </Link>
                    </li>
                    <li className="py-[11px] px-4 border-b border-[#00000008]">
                      <Link
                        to="/solutions/journal-publications-conference-presentation/conference-activities"
                        onClick={handleLink}
                      >
                        Conference Activities
                      </Link>
                    </li>
                    <li className="py-[11px] px-4 border-b border-[#00000008]">
                      <Link
                        to="/solutions/journal-publications-conference-presentation/systematic-literature-review-and-targeted-literature-review"
                        onClick={handleLink}
                      >
                        Systematic Literature Review and Targeted Literature
                        Review
                      </Link>
                    </li>
                  </ul>
                  <li className="py-[11px] px-4 border-b border-[#00000008]">
                    <Link
                      to="/solutions/real-world-evidence-clinical-trial-services"
                      onClick={handleLink}
                    >
                      Real-World Evidence & Clinical Trial Services
                    </Link>
                  </li>
                  <li className="py-[11px] px-4 border-b border-[#00000008]">
                    <Link
                      to="/solutions/kol-engagement-advocacy-building"
                      onClick={handleLink}
                    >
                      Kol Engagement & Advocacy Building
                    </Link>
                  </li>
                  <li className="py-[11px] px-4 border-b border-[#00000008]">
                    <Link
                      to="/solutions/regulatory-writing"
                      onClick={handleLink}
                    >
                      Regulatory Writing
                    </Link>
                  </li>
                  <li className="py-[11px] px-4 border-b border-[#00000008]">
                    <Link
                      to="/solutions/qc-reviewcopy-editing"
                      onClick={handleLink}
                    >
                      QC Review & Copy Editing
                    </Link>
                  </li>
                  <li className="py-[11px] px-4 border-b border-[#00000008]">
                    <Link
                      to="/solutions/content-lab-management"
                      onClick={handleLink}
                    >
                      Content Lab Management
                    </Link>
                  </li>
                  <li className="py-[11px] px-4 border-b border-[#00000008]">
                    <Link
                      to="/solutions/learning-and-development"
                      onClick={handleLink}
                    >
                      Learning and Development
                    </Link>
                  </li>
                  <li className="py-[11px] px-4 border-b border-[#00000008]">
                    <Link to="/solutions/consultancy" onClick={handleLink}>
                      Consultancy
                    </Link>
                  </li>
                </ul>
                <li className="py-[11px] px-4 border-b border-[#00000008]">
                  <Link to="/resources" onClick={handleLink}>
                    Resources
                  </Link>
                </li>
                <li className="py-[11px] px-4 border-b border-[#00000008]">
                  <Link to="/news-media" onClick={handleLink}>
                    News & Media
                  </Link>
                </li>
                <li className="py-[11px] px-4 border-b border-[#00000008]">
                  <Link to="/events" onClick={handleLink}>
                    Events
                  </Link>
                </li>
                <li className="py-[11px] px-4 border-b border-[#00000008] font-semibold bg-[#00000008]">
                  Trainings
                </li>
                <ul className="pl-4">
                  <li className="py-[11px] px-4 border-b border-[#00000008]">
                    <Link to="/training/webinars" onClick={handleLink}>
                      Webinars
                    </Link>
                  </li>
                  <li className="py-[11px] px-4 border-b border-[#00000008]">
                    <Link to="/training/courses" onClick={handleLink}>
                      Courses
                    </Link>
                  </li>
                  <li className="py-[11px] px-4 border-b border-[#00000008]">
                    <Link to="/training/Workshops" onClick={handleLink}>
                      Workshops
                    </Link>
                  </li>
                  <li className="py-[11px] px-4 border-b border-[#00000008]">
                    <Link
                      to="/training/institutional-training"
                      onClick={handleLink}
                    >
                      Institutional Training
                    </Link>
                  </li>
                </ul>
                <li className="py-[11px] px-4 border-b border-[#00000008]">
                  <Link to="/career" onClick={handleLink}>
                    Career
                  </Link>
                </li>
                <li className="py-[11px] px-4 border-b border-[#00000008]">
                  <Link to="/contact-us" onClick={handleLink}>
                    Contact Us
                  </Link>
                </li>
                <li className="py-[11px] px-4 border-b border-[#00000008]">
                  <Link
                    to={"https://turatrunk.turacoz.com/"}
                    onClick={handleLink}
                  >
                    Our Work
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        </div>
      </header>
      {showRequest && (
        <PopupShowRequest
          handleHideRequest={handleHideRequest}
          showRequest={showRequest}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getHeader: (payload) => dispatch(performGetHeader(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
