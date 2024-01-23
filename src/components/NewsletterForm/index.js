import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Tooltip as ReactTooltip } from "react-tooltip";
import * as yup from "yup";
import { performUpdateNewsletterUserDetail } from "../../redux/actionCreators/userCreators";
import { enqueueSnackbar } from "notistack";

const schema = yup
  .object()
  .shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
  })
  .required();

const NewsletterForm = ({ setIsFetch, handleNewsletterForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleFormSubmit = async (data) => {
    const result = await handleNewsletterForm(data);
    if (result.status === 200) {
      localStorage.setItem("newsletterSubscriptionEmail", data.email);
      enqueueSnackbar("Subscription Added Successfully", {
        variant: "success",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
        autoHideDuration: 3000,
      });
      setIsFetch(true);
    }
  };

  return (
    <div className="mt-4 px-8 py-4">
      <div className="md:text-5xl text-2xl font-semibold mt-8 text-center">
        Subscribe to our newsletter
      </div>
      <div className=" md:text-lg px-8 text-center my-8">
        Welcome to our Newsletter Subscription Center. Sign up in the newsletter
        form below to receive the latest news and updates from our company.
      </div>
      <form
        className="w-full px-0 md:px-8 newsletter-form"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-0 md:px-3 mb-6 md:mb-0">
            <label
              className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
          <div className="w-full md:w-1/2 px-0 md:px-3">
            <label
              className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
          <div className="w-full px-0 md:px-3 flex md:flex-row flex-col justify-between items-start md:items-center">
            <label
              className=" flex justify-start tracking-wide email text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Email
              <span data-tooltip-id="email">
                <svg width="16" height="16" viewBox="0 0 25 25">
                  <path
                    d="m329 393l0-46c0-2-1-4-2-6-2-2-4-3-7-3l-27 0 0-146c0-3-1-5-3-7-2-1-4-2-7-2l-91 0c-3 0-5 1-7 2-1 2-2 4-2 7l0 46c0 2 1 5 2 6 2 2 4 3 7 3l27 0 0 91-27 0c-3 0-5 1-7 3-1 2-2 4-2 6l0 46c0 3 1 5 2 7 2 1 4 2 7 2l128 0c3 0 5-1 7-2 1-2 2-4 2-7z m-36-256l0-46c0-2-1-4-3-6-2-2-4-3-7-3l-54 0c-3 0-5 1-7 3-2 2-3 4-3 6l0 46c0 3 1 5 3 7 2 1 4 2 7 2l54 0c3 0 5-1 7-2 2-2 3-4 3-7z m182 119c0 40-9 77-29 110-20 34-46 60-80 80-33 20-70 29-110 29-40 0-77-9-110-29-34-20-60-46-80-80-20-33-29-70-29-110 0-40 9-77 29-110 20-34 46-60 80-80 33-20 70-29 110-29 40 0 77 9 110 29 34 20 60 46 80 80 20 33 29 70 29 110z"
                    transform="scale(0.046875 0.046875)"
                  ></path>
                </svg>
              </span>
              <ReactTooltip
                id="email"
                className="shadow-lg transition-transform duration-300"
                place="top"
              >
                N:B: We will send you an email describing how to activate your
                newsletter subscription.
              </ReactTooltip>
            </label>
            <input
              className="appearance-none block w-full md:w-4/5  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="py-2 text-red-600 text-sm">Email is required.</p>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <button className="border-blue-400 cursor-pointer border text-blue-400 bg-blue-100 px-4 py-2 rounded">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleNewsletterForm: (payload) =>
    dispatch(performUpdateNewsletterUserDetail(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsletterForm);
