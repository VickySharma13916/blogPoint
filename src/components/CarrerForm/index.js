import { yupResolver } from "@hookform/resolvers/yup";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { connect } from "react-redux";
import * as yup from "yup";
import popupImage from "../../assets/images/popup_image.jpg";
import {
  performPostCarrerFile,
  performPostCarrer,
} from "../../redux/actionCreators/carrerCreators";
import { enqueueSnackbar } from "notistack";

const schema = yup
  .object()
  .shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    message: yup.string(),
    email: yup.string().required(),
  })
  .required();
const CarrerForm = ({
  handleHidePopup,
  handleAddFileCarrer,
  showPopup,
  handleAddCarrer,
  userData,
}) => {
  const { carrerAccordionTitle } = userData;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const [carrerFile, setcarrerFile] = useState(null);
  const [image, setImage] = useState(null);
  const [fileError, setFileError] = useState("");

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
      formData.append("carrerFile", selectedFile, selectedFile?.name);
      const result = await handleAddFileCarrer(formData);
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
  const handleFormSubmit = async (data) => {
    let valid = true;
    if (carrerFile === null) {
      setFileError("File is required");
      valid = false;
    } else {
      setFileError("");
    }
    if (valid) {
      data.carrerFile = carrerFile;
      data.id = userData?._id;
      const result = await handleAddCarrer(data);
      if (result.status === 200) {
        enqueueSnackbar("Apply Successfully", {
          variant: "success",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
          autoHideDuration: 3000,
        });
        handleHidePopup();
      }
    }
  };
  return (
    <>
      {showPopup && (
        <div
          id="defaultModal"
          tabIndex={-1}
          aria-hidden="true"
          className={`fixed top-0 bottom-0 left-0 right-0 z-50 ${
            showPopup ? "block" : "hidden"
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
                onClick={() => handleHidePopup()}
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
              <div className="relative flex flex-col justify-center text-center">
                <div className="relative z-20 top-0 left-0 right-0 bottom-0 xl:p-16 md:p-12 p-8">
                  <div className="flex lg:flex-row flex-col">
                    <div className="w-full">
                      <div className="container px-6 md:px-0 mx-auto">
                        <div className="text-center md:text-4xl my-4 text-white font-semibold md:my-12">
                          Apply Here - ({carrerAccordionTitle})
                        </div>
                        <div className="my-16">
                          <form
                            className="w-full px-0 md:px-8 newsletter-form"
                            onSubmit={handleSubmit(handleFormSubmit)}
                          >
                            <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full md:w-1/2 px-0 md:px-3 mb-6 md:mb-0">
                                <div className="flex">
                                  <label
                                    className="block text-left tracking-wide text-white mb-2"
                                    htmlFor="grid-first-name"
                                  >
                                    First Name
                                  </label>
                                  <span className="requestspan">*</span>
                                </div>
                                <input
                                  className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                  id="grid-first-name"
                                  type="text"
                                  {...register("firstName", { required: true })}
                                />
                                {errors.firstName && (
                                  <p className="py-2 text-left text-red-600">
                                    First Name is required.
                                  </p>
                                )}
                              </div>
                              <div className="w-full md:w-1/2 px-0 md:px-3">
                                <div className="flex">
                                  <label
                                    className="block text-left tracking-wide text-white mb-2"
                                    htmlFor="grid-last-name"
                                  >
                                    Last Name
                                  </label>
                                  <span className="requestspan">*</span>
                                </div>
                                <input
                                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                  id="grid-last-name"
                                  type="text"
                                  {...register("lastName", { require: true })}
                                />
                                {errors.lastName && (
                                  <p className="py-2 text-left text-red-600">
                                    Last Name is required.
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full px-0 md:px-3 flex flex-col justify-between">
                                <div className="flex">
                                  <label
                                    className=" flex justify-start tracking-wide email text-white text-left mb-2"
                                    htmlFor="grid-message"
                                  >
                                    Message
                                  </label>
                                </div>
                                <textarea
                                  className="appearance-none block rounded w-full border text-gray-700 border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none"
                                  id="grid-message"
                                  {...register("message", { required: true })}
                                />
                                {errors.message && (
                                  <p className="py-2 text-left text-red-600">
                                    Message is required.
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full px-0 md:px-3 flex flex-col justify-between">
                                <div className="flex">
                                  <label
                                    className=" flex justify-start tracking-wide email text-white text-left mb-2"
                                    htmlFor="grid-message"
                                  >
                                    File Upload
                                  </label>
                                  <span className="requestspan">*</span>
                                </div>
                                <input
                                  type="file"
                                  ref={fileInputRef}
                                  onChange={(e) => handleChangeImages(e)}
                                  className="hidden"
                                  accept=".pdf,.docx"
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
                                  <div className="text-sm text-white text-left mt-2">
                                    File Size Upto 5Mb
                                  </div>
                                  {carrerFile && (
                                    <div className="my-6">
                                      <div className="text-black bg-white flex gap-2 md:gap-4 border w-full border-gray-200 rounded-sm">
                                        {image && (
                                          <div className="w-20 h-20 flex justify-center items-center text-white text-xl font-semibold rounded-l-sm bg-slate-300">
                                            {image?.type === "application/pdf"
                                              ? "Pdf"
                                              : "Doc"}
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
                                          <span className="text-sm text-left">
                                            {image?.size / 1000} kB
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full px-0 md:px-3 flex flex-col items-start md:items-center">
                                <div className="flex w-full">
                                  <label
                                    className=" flex justify-start tracking-wide email text-left text-white mb-2"
                                    htmlFor="grid-password"
                                  >
                                    Email
                                  </label>
                                  <span className="requestspan">*</span>
                                </div>
                                <input
                                  className="appearance-none block w-full border text-gray-700 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                  id="grid-password"
                                  type="email"
                                  {...register("email", { required: true })}
                                />
                                {errors.email && (
                                  <p className="py-2 w-full text-left text-red-600 text-sm">
                                    Email is required.
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="flex justify-start">
                              <button className="border-blue-400 cursor-pointer border text-blue-400 bg-blue-100 px-4 py-2 rounded">
                                Submit Form
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
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
  handleAddFileCarrer: (payload) => dispatch(performPostCarrerFile(payload)),
  handleAddCarrer: (payload) => dispatch(performPostCarrer(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarrerForm);
