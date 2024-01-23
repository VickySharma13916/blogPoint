import React, { useMemo, useRef, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import popupImage from "../../assets/images/popup_image.jpg";
import turacozlogo from "../../assets/images/turacoz-logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { connect } from "react-redux";
import {
  performPostRequestProposal,
  performPostRequestProposalFile,
} from "../../redux/actionCreators/requestProposalCreators";
import { enqueueSnackbar } from "notistack";
import { BACKEND_URL } from "../../services/constant";

const schema = yup
  .object()
  .shape({
    fullName: yup.string().required(),
    company: yup.string().required(),
    email: yup.string().required(),
  })
  .required();

const PopupShowRequest = ({
  handleHideRequest,
  showRequest,
  handleAddRequestProposal,
  handleAddFileRequestProposal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [country, setCountry] = useState([]);
  const [optionLink, setOptionLink] = useState("");
  const [countryError, setCountryError] = useState("");
  const [image, setImage] = useState(null);
  const [fileError, setFileError] = useState("");
  const [carrerFile, setcarrerFile] = useState(null);

  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const options = useMemo(() => countryList().getData(), []);
  const linkoption = [
    {
      value: "Phone Number",
      label: "Phone Number",
    },
    {
      value: "Email",
      label: "Email",
    },
    {
      value: "Meeting-link",
      label: "Virtual Meeting Link",
    },
  ];

  const handleChangeImages = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile?.size > 5242880) {
      return enqueueSnackbar("File Size is too Large", {
        variant: "error",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
        autoHideDuration: 3000,
      });
    }
    if (selectedFile?.size <= 5242880) {
      setFileError("");
      const formData = new FormData();
      formData.append("type", "FileUpload");
      formData.append("proposalFile", selectedFile, selectedFile?.name);
      const result = await handleAddFileRequestProposal(formData);
      if (result.status === 200) {
        setImage(selectedFile);
        enqueueSnackbar("File Upload Successfully", {
          variant: "success",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
          autoHideDuration: 3000,
        });
        setcarrerFile(result?.data?.fileUrl);
      }
    }
  };

  const handleRemoveFile = () => {
    setImage(null);
    setcarrerFile(null);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      height: "50px",
      border: "1px solid lightgray",
      borderRadius: "8px",
      backgroundColor: "white",
      color: "#fff",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#007BFF" : "white",
      color: state.isSelected ? "white" : "#333",
      ":hover": {
        backgroundColor: state.isSelected ? "#007BFF" : "#F5F5F5",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#aaa",
    }),
  };

  const handleFormSubmit = async (data) => {
    let valid = true;
    if (!country.label) {
      setCountryError("Country is required");
      valid = false;
    } else {
      setCountryError("");
    }
    if (!mobileNumber) {
      setMobileError("Contact Number is required");
      valid = false;
    } else {
      setMobileError("");
    }

    if (valid) {
      data.country = country.label;
      data.mobileNumber = mobileNumber;
      data.proposalFile = carrerFile;
      data.contactMode = optionLink?.value;
      const result = await handleAddRequestProposal(data);
      if (result.status === 200) {
        enqueueSnackbar("Request For Proposal Send Successfully", {
          variant: "success",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
          autoHideDuration: 3000,
        });
        handleHideRequest();
      }
    }
  };

  return (
    <>
      {showRequest && (
        <div
          id="defaultModal"
          tabIndex={-1}
          aria-hidden="true"
          className={`fixed top-0 bottom-0 left-0 right-0 z-50 ${
            showRequest ? "block" : "hidden"
          } w-full h-full bg-gray-800 bg-opacity-50 overflow-y-scroll flex items-center justify-center`}
        >
          <div className="relative md:px-8 px-4 xl:px-10 py-8 w-full max-w-6xl mx-auto max-h-full">
            <div
              className="relative h-full bg-white rounded-lg shadow "
              style={{
                backgroundSize: "cover",
                backgroundPosition: "left bottom 0px",
                backgroundImage: `url(${popupImage})`,
              }}
            >
              <button
                type="button"
                className="text-gray-400 absolute z-30 top-2 right-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
                onClick={() => handleHideRequest()}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="relative flex flex-col justify-center">
                <div className="relative z-20 top-0 left-0 right-0 bottom-0 xl:p-16 md:p-12 p-6">
                  <div className="flex lg:flex-row flex-col gap-4">
                    <div className="flex flex-col xl:w-1/2 text-white">
                      <img
                        src={turacozlogo}
                        alt="turacoz-logo"
                        className="w-40 h-16"
                      />
                      <div className="my-8 text-xl md:text-4xl font-semibold">
                        Let’s Chat
                      </div>
                      <div className="font-semibold">Hello!</div>
                      <div className="my-4 text-sm md:text-lg md:my-8">
                        Want your scientific documents to be developed according
                        to your specific requirements and objectives? We are
                        here to do it for you. Every project is assigned to a
                        dedicated team to ensure error-free deliverables and to
                        support your product life cycle.
                      </div>
                      <div className="border border-dashed border-white"></div>
                      <div className="font-semibold my-8 text-sm md:text-lg">
                        If you want us to help you, let’s begin with filling in
                        your details below.
                      </div>
                      <div>
                        Have any other queries? <br />
                        <span className="flex md:flex-row flex-col">
                          <Link
                            to="https://wa.me/7042166399"
                            className="flex font-semibold items-center gap-2"
                          >
                            <BsWhatsapp color="#fff" size={20} />
                            +91-7042166399
                          </Link>
                          <span className="md:ml-2">
                            (<i>Also available on WhatsApp</i>)
                          </span>
                        </span>
                      </div>
                      <div className="my-8">
                        You can also drop in your questions in the chat box at
                        the bottom right of this page.
                      </div>
                    </div>
                    <div className="flex flex-col xl:w-1/2 md:p-4 p-2 bg-white request-proposal">
                      <form
                        className="w-full px-4 py-6 md:px-6"
                        onSubmit={handleSubmit(handleFormSubmit)}
                      >
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full  px-0 md:px-3 mb-6 md:mb-0">
                            <div className="flex">
                              <label
                                className="block text-left tracking-wide text-gray-700 mb-2"
                                htmlFor="grid-first-name"
                              >
                                Full Name
                              </label>
                              <span className="requestspan">*</span>
                            </div>
                            <input
                              className="appearance-none block w-full rounded-lg text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              id="grid-first-name"
                              type="text"
                              {...register("fullName", { required: true })}
                            />
                            {errors.fullName && (
                              <p className="py-2 text-red-600 text-sm">
                                Full Name is required.
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full px-0 md:px-3 flex flex-col justify-between input-country">
                            <div className="flex">
                              <label
                                className=" flex justify-start tracking-wide email text-left text-gray-700 mb-2"
                                htmlFor="grid-country"
                              >
                                Country
                              </label>
                              <span className="requestspan">*</span>
                            </div>
                            <Select
                              styles={customStyles}
                              id="grid-country"
                              placeholder="Select Country"
                              options={options}
                              value={country}
                              onChange={(value) => {
                                setCountry(value);
                                setMobileNumber("");
                              }}
                            />
                            {!country && (
                              <p className="py-2 text-red-600 text-sm">
                                {countryError}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full px-0 md:px-3 flex flex-col justify-between input-country">
                            <div className="flex">
                              <label
                                className=" flex justify-start tracking-wide email text-left text-gray-700 mb-2"
                                htmlFor="grid-contact"
                              >
                                Contact Number
                              </label>
                              <span className="requestspan">*</span>
                            </div>
                            <PhoneInput
                              id="grid-contact"
                              className="appearance-none block w-full active:outline-none rounded-lg focus:outline-none text-gray-700 border border-gray-200 mb-3 leading-tight focus:bg-white focus:border-gray-500"
                              placeholder=""
                              defaultCountry={country.value || "IN"}
                              value={mobileNumber}
                              onChange={setMobileNumber}
                              maxLength={15}
                              countrySelectProps={{ disabled: true }}
                            />
                            {!mobileNumber && (
                              <p className="py-2 text-red-600 text-sm">
                                {mobileError}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full px-0 md:px-3 flex flex-col justify-between ">
                            <div className="flex flex-col">
                              <div className="flex">
                                <label
                                  className=" flex justify-start tracking-wide email text-left text-gray-700 mb-2"
                                  htmlFor="grid-email"
                                >
                                  Email
                                </label>
                                <span className="requestspan">*</span>
                              </div>
                              <div className="text-sm italic mb-2 text-gray-700">
                                A copy of your completed form will be sent to
                                you on this ID
                              </div>
                            </div>
                            <input
                              className="appearance-none block w-full  text-gray-700 border rounded-lg border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-email"
                              type="email"
                              {...register("email", { required: true })}
                            />
                            {errors.email && (
                              <p className="py-2 text-red-600 text-sm">
                                Email is required.
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full  px-0 md:px-3 mb-6 md:mb-0">
                            <div className="flex">
                              <label
                                className="block text-left tracking-wide text-gray-700  mb-2"
                                htmlFor="grid-first-name"
                              >
                                Company/Organization
                              </label>
                              <span className="requestspan">*</span>
                            </div>
                            <input
                              className="appearance-none block w-full rounded-lg text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              id="grid-first-name"
                              type="text"
                              {...register("company", { required: true })}
                            />
                            {errors.company && (
                              <p className="py-2 text-red-600 text-sm">
                                Company is required.
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full px-0 md:px-3 flex flex-col justify-between">
                            <label
                              className=" flex justify-start tracking-wide email text-gray-700 text-left mb-2"
                              htmlFor="grid-link"
                            >
                              Your Preferred Time And Mode Of Contact.
                            </label>
                            <div className="text-sm italic mb-2 text-gray-700">
                              We care about you! Knowing your time zone &
                              preferred contact mode would help us serve you
                              better. In case you prefer virtual meeting, please
                              mention a valid link/ID in the box below. E.g.,
                              Skype ID, Zoom link etc.
                            </div>
                            <Select
                              styles={customStyles}
                              id="grid-link"
                              placeholder="Please Select Your Opinion"
                              options={linkoption}
                              value={optionLink}
                              onChange={(value) => setOptionLink(value)}
                            />
                          </div>
                        </div>
                        {optionLink?.value === "Meeting-link" && (
                          <>
                            <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full  px-0 md:px-3 mb-6 md:mb-0">
                                <div className="flex">
                                  <label
                                    className="block text-left tracking-wide text-gray-700  mb-2"
                                    htmlFor="grid-link"
                                  >
                                    Link
                                  </label>
                                </div>
                                <input
                                  className="appearance-none block w-full rounded-lg text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                  id="grid-link"
                                  type="text"
                                  {...register("link")}
                                />
                              </div>
                            </div>
                          </>
                        )}
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full px-0 md:px-3 flex flex-col justify-between">
                            <label
                              className=" flex justify-start tracking-wide email text-gray-700 text-left mb-2"
                              htmlFor="grid-requirement"
                            >
                              Requirements Details
                            </label>
                            <div className="text-sm italic mb-2 text-gray-700">
                              Please Describe Your Requirement/ Scope Of Work
                              <br />
                              Word limit: *200 words
                            </div>
                            <textarea
                              className="appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-28 resize-none"
                              id="grid-requirement"
                              {...register("RequirementDetail")}
                              maxLength={200}
                            />
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full px-0 md:px-3 flex flex-col justify-between">
                            <label
                              className=" flex justify-start tracking-wide email text-gray-700 text-left mb-2"
                              htmlFor="grid-detail"
                            >
                              Please Highlight Any Other Details Such As
                              Tentative Budget, Expected Timeline Relating To
                              The Required Work.
                            </label>
                            <div className="text-sm italic mb-2 text-gray-700">
                              Word limit: *100 words
                            </div>
                            <textarea
                              className="appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-28 resize-none"
                              id="grid-detail"
                              {...register("RequirementHighlight")}
                              maxLength={100}
                            />
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full px-0 md:px-3 flex flex-col justify-between">
                            <label
                              className=" flex justify-start tracking-wide email text-gray-700 text-left mb-2"
                              htmlFor="grid-message"
                            >
                              Upload Your Documents
                            </label>
                            <div className="text-sm italic mb-2 text-gray-700">
                              (Accepted file formats: word, ppt, pdf, jpeg upto
                              5Mb)
                            </div>
                            <input
                              type="file"
                              ref={fileInputRef}
                              onChange={(e) => handleChangeImages(e)}
                              className="hidden"
                              accept=".pdf,.ppt,.pptx,image/jpeg"
                            />
                            {fileError && (
                              <p className="py-2 text-left text-red-600">
                                {fileError}
                              </p>
                            )}
                            <div className="relative">
                              <div
                                className="text-white rounded w-28 cursor-pointer text-center p-2 bg-green-700"
                                onClick={() => handleButtonClick()}
                              >
                                Choose File
                              </div>
                              {carrerFile && (
                                <div className="my-6">
                                  <div className="text-black flex gap-2 md:gap-4 border w-full border-gray-200 rounded-sm">
                                    {image && image?.type === "image/jpeg" ? (
                                      <img
                                        src={BACKEND_URL + carrerFile}
                                        alt="Preview"
                                        className="w-20 h-20 rounded-l-sm object-cover bg-slate-100"
                                      />
                                    ) : (
                                      <div className="w-20 h-20 flex justify-center items-center text-white text-xl font-semibold rounded-l-sm bg-slate-300">
                                        {image?.type === "application/pdf"
                                          ? "Pdf"
                                          : "Ppt"}
                                      </div>
                                    )}
                                    <div className="flex flex-col w-full p-2 overflow-hidden">
                                      <div className="flex justify-between w-full">
                                        <span className="text-sm line-clamp-1">
                                          {image?.name}
                                        </span>
                                        <button
                                          onClick={() => handleRemoveFile()}
                                        >
                                          <AiOutlineClose
                                            size={10}
                                            color="red"
                                          />
                                        </button>
                                      </div>
                                      <span className="text-sm">
                                        {image?.size / 1000} kB
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <button
                          className="cursor-pointer w-full text-white bg-red-800 p-4"
                          type="submit"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleAddFileRequestProposal: (payload) =>
    dispatch(performPostRequestProposalFile(payload)),
  handleAddRequestProposal: (payload) =>
    dispatch(performPostRequestProposal(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupShowRequest);
