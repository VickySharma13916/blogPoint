import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import popupImage from "../../assets/images/popup_image.jpg";
import popupImage2 from "../../assets/images/popup_image1.png";
import { BACKEND_URL, BASE_URL } from "../../services/constant";
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
const PopUpForm = ({ handleHidePopup, showPopup, userData, setIsFetch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleFormSubmit = async (data) => {
    if (data.message) {
      data.message = data.message;
    } else {
      delete data.message;
    }
    let url = BACKEND_URL + userData?.categoryData;
    const newData = {
      ...data,
      categoryId: userData?.categoryId,
      categoryName: userData?.categoryName,
    };
    const id = userData?.categoryId;
    const name = userData?.categoryName;
    const result = await axios.post(
      `${BASE_URL}${name}/${id}/userdetails`,
      newData
    );
    if (result.status === 200) {
      localStorage.setItem(userData?.localStorageData, data.email);
      setIsFetch(true);
      enqueueSnackbar(
        `Form Send Successfully Enjoy ${userData?.categoryName}`,
        {
          variant: "success",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
          autoHideDuration: 3000,
        }
      );
      if (userData?.categoryData) {
        window.open(url, "_blank");
      }
      handleHidePopup();
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
                    <img
                      src={popupImage2}
                      alt="postimage"
                      className="lg:w-1/2"
                    />
                    <div className="flex flex-col p-4 bg-white">
                      <div className="md:text-3xl text-lg font-semibold text-center">
                        Fill Below Form To Download
                      </div>
                      <form
                        className="w-full px-4 py-6 md:px-6 newsletter-form"
                        onSubmit={handleSubmit(handleFormSubmit)}
                      >
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full  px-0 md:px-3 mb-6 md:mb-0">
                            <label
                              className="block text-left tracking-wide text-gray-700  mb-2"
                              htmlFor="grid-first-name"
                            >
                              First Name
                            </label>
                            <input
                              className="appearance-none block w-full  text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              id="grid-first-name"
                              type="text"
                              {...register("firstName", { required: true })}
                            />
                            {errors.firstName && (
                              <p className="py-2 text-red-600 text-sm">
                                First Name is required.
                              </p>
                            )}
                          </div>
                          <div className="w-full  px-0 md:px-3">
                            <label
                              className="block text-left tracking-wide text-gray-700 mb-2"
                              htmlFor="grid-last-name"
                            >
                              Last Name
                            </label>
                            <input
                              className="appearance-none block w-full text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-last-name"
                              type="text"
                              {...register("lastName", { require: true })}
                            />
                            {errors.lastName && (
                              <p className="py-2 text-red-600 text-sm">
                                Last Name is required.
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full px-0 md:px-3 flex flex-col justify-between ">
                            <label
                              className=" flex justify-start tracking-wide email text-left text-gray-700 mb-2"
                              htmlFor="grid-email"
                            >
                              Email
                            </label>
                            <input
                              className="appearance-none block w-full  text-gray-700 border border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                          <div className="w-full px-0 md:px-3 flex flex-col justify-between">
                            <label
                              className=" flex justify-start tracking-wide email text-gray-700 text-left mb-2"
                              htmlFor="grid-message"
                            >
                              Message
                            </label>
                            <textarea
                              className="appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none"
                              id="grid-message"
                              {...register("message", { required: true })}
                            />
                            {errors.message && (
                              <p className="py-2 text-red-600 text-sm">
                                Message is required.
                              </p>
                            )}
                          </div>
                        </div>
                        <button className="cursor-pointer w-full text-white bg-red-800 p-4">
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

export default PopUpForm;
