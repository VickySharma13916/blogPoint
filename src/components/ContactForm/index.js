import { yupResolver } from "@hookform/resolvers/yup";
import { enqueueSnackbar } from "notistack";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { connect } from "react-redux";
import Select from "react-select";
import * as yup from "yup";
import { performPostContact } from "../../redux/actionCreators/contactCreators";

const schema = yup
  .object()
  .shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    title: yup.string().required(),
    company: yup.string().required(),
    message: yup.string().required(),
    email: yup.string().required(),
    country: yup.string().required(),
    therapyInterest: yup
      .object()
      .shape({
        value: yup.string().required(),
        label: yup.string().required(),
      })
      .required(),
    serviceInterest: yup
      .object()
      .shape({
        value: yup.string().required(),
        label: yup.string().required(),
      })
      .required(),

    referalInterest: yup
      .object()
      .shape({
        value: yup.string().required(),
        label: yup.string().required(),
      })
      .required(),

    outsourcingTimeline: yup
      .object()
      .shape({
        value: yup.string().required(),
        label: yup.string().required(),
      })
      .required(),
  })
  .required();
const ContactForm = ({ handleAddContact }) => {
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const serviceInterestOptions = [
    { value: "Adaptive Design", label: "Adaptive Design" },
    { value: "Biometrics", label: "Biometrics" },
    {
      value: "Clinical Operations/Monitoring",
      label: "Clinical Operations/Monitoring",
    },
    { value: "Data Management", label: "Data Management" },
    { value: "Full Service", label: "Full Service" },
    { value: "Medical Monitoring", label: "Medical Monitoring" },
    { value: "Medical Writing", label: "Medical Writing" },
    { value: "Project Management", label: "Project Management" },
    { value: "Regulatory Consulting", label: "Regulatory Consulting" },
    { value: "Regulatory Submissions", label: "Regulatory Submissions" },
    {
      value: "Safety Management/Pharmacovigilance",
      label: "Safety Management/Pharmacovigilance",
    },
    { value: "Statistics & Programming", label: "Statistics & Programming" },
    { value: "Strategic Consulting", label: "Strategic Consulting" },
    { value: "Other", label: "Other" },
  ];

  const therapeuticInterestOptions = [
    { value: "Allergy", label: "Allergy" },
    { value: "Autoimmune/immunology", label: "Autoimmune/Immunology" },
    { value: "Cardiovascular", label: "Cardiology / Vascular" },
    { value: "Dermatology", label: "Dermatology" },
    { value: "Endocrinology / Metabolic", label: "Endocrinology / Metabolic" },
    { value: "ENT/Dental", label: "ENT/Dental" },
    {
      value: "Gastroenterology (Non Inflammatory Bowel Disease)",
      label: "Gastroenterology",
    },
    { value: "Genetic Disease", label: "Genetic Disease" },
    { value: "Hematology", label: "Hematology" },
    { value: "Infectious Disease", label: "Infectious Disease" },
    { value: "Nephrology", label: "Nephrology" },
    { value: "Neurology", label: "Neurology" },
    { value: "Obstetrics/Gynecology", label: "Obstetrics/Gynecology" },
    { value: "Oncology", label: "Oncology" },
    { value: "Ophthalmology", label: "Ophthalmology" },
    { value: "Orthopedics", label: "Orthopedics" },
    { value: "Other", label: "Other" },
    { value: "Pediatrics", label: "Pediatrics" },
    { value: "Psychiatry", label: "Psychiatry / Psychology" },
    { value: "Rare and Orphan Diseases", label: "Rare and Orphan Diseases" },
    { value: "Renal", label: "Renal" },
    { value: "Respiratory", label: "Pulmonary / Respiratory" },
    { value: "Rheumatology", label: "Rheumatology (Non Autoimmune)" },
    { value: "Urology", label: "Urology" },
    { value: "Veterinary", label: "Veterinary" },
  ];

  const referralSourceOptions = [
    {
      value: "Social Media",
      label: "Social Media",
    },
    {
      value: "Referral",
      label: "Referral",
    },
    {
      value: "Web Search",
      label: "Web Search",
    },
    {
      value: "Current Client",
      label: "I am a Current Client",
    },
    {
      value: "Former Client",
      label: "I am a Former Client",
    },
    {
      value: "Conference",
      label: "Conference",
    },
    {
      value: "Other",
      label: "Other",
    },
    {
      value: "Received Email",
      label: "I Received an Email",
    },
  ];

  const outsourcingTimelineOptions = [
    {
      value: "In 0-6 months",
      label: "In 0-6 months",
    },
    {
      value: "In 6-12 months",
      label: "In 6-12 months",
    },
    {
      value: "In 12-24 months",
      label: "In 12-24 months",
    },
    {
      value: "Unknown",
      label: "Unknown",
    },
    {
      value: "Never",
      label: "Never",
    },
  ];

  const initialFormValues = {
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    company: "",
    country: "",
    email: "",
    message: "",
    phone: "",
    state: "",
    title: "",
    zip: "",
    serviceInterest: null,
    therapeuticInterest: null,
    referalInterest: null,
    outsourcingTimeline: null,
  };

  const handleFormSubmit = async (data) => {
    const newData = {
      ...data,
      outsourcingTimeline: data?.outsourcingTimeline?.value,
      referalInterest: data?.referalInterest?.value,
      serviceInterest: data?.serviceInterest?.value,
      therapyInterest: data?.therapyInterest?.value,
    };
    const result = await handleAddContact(newData);
    if (result.status === 200) {
      enqueueSnackbar("Contact Form Details Send Successfully", {
        variant: "success",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
        autoHideDuration: 3000,
      });
      reset(initialFormValues);
    }
  };
  return (
    <div className="flex flex-col">
      <h2 className="lg:text-[45px] md:text-[30px] text-[26px] mx-4 md:mx-0 pb-4 border-b-4 font-semibold border-green-800">
        How Can We Help You?
      </h2>
      <div className="form">
        <form
          className="w-full px-4 md:px-0 py-6 md:mx-0 newsletter-form"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="flex flex-col gap-4 md:gap-6 md:flex-row">
            <div className="w-full mb-0">
              <input
                className="appearance-none block w-full rounded text-gray-700 border  py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                placeholder="First Name*"
                type="text"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <p className="py-2 text-red-600 text-sm">
                  First Name is required.
                </p>
              )}
            </div>
            <div className="w-full">
              <input
                className="appearance-none block w-full rounded text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                placeholder="Last Name*"
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
          <div className="flex flex-wrap">
            <div className="w-full flex flex-col justify-between py-3">
              <input
                className="appearance-none rounded block w-full text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                placeholder="Email*"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="py-2 text-red-600 text-sm">Email is required.</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6 md:flex-row">
            <div className="w-full">
              <input
                className="appearance-none rounded block w-full  text-gray-700 border  py-3 px-4  leading-tight focus:outline-none focus:bg-white"
                id="grid-title"
                placeholder="Title*"
                type="text"
                {...register("title", { required: true })}
              />
              {errors.firstName && (
                <p className="py-2 text-red-600 text-sm">Title is required.</p>
              )}
            </div>
            <div className="w-full">
              <input
                className="appearance-none rounded block w-full text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-company"
                placeholder="Company*"
                type="text"
                {...register("company", { require: true })}
              />
              {errors.lastName && (
                <p className="py-2 text-red-600 text-sm">
                  Company is required.
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap my-4 ">
            <div className="w-full flex flex-col justify-between ">
              <input
                className="appearance-none block w-full  text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 rounded"
                id="grid-phone"
                placeholder="Phone"
                type="number"
                {...register("phone")}
              />
            </div>
          </div>
          <div className="flex flex-wrap my-4 ">
            <div className="w-full flex flex-col justify-between ">
              <input
                className="appearance-none rounded block w-full  text-gray-700 border border-gray-200  py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-streetAddress"
                {...register("addressLine1")}
                placeholder="Street Address"
              />
            </div>
          </div>
          <div className="flex flex-wrap my-4 ">
            <div className="w-full flex flex-col justify-between">
              <input
                className="appearance-none block w-full  text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none rounded focus:bg-white focus:border-gray-500"
                id="grid-Address2"
                placeholder="Address Line 2"
                {...register("addressLine2")}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6 md:flex-row">
            <div className="w-full ">
              <input
                className="appearance-none block w-full rounded text-gray-700 border  py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-city"
                placeholder="City"
                type="text"
                {...register("city")}
              />
            </div>
            <div className="w-full">
              <input
                className="appearance-none block rounded w-full text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                placeholder="State/Province/Region"
                type="text"
                {...register("state")}
              />
            </div>
          </div>
          <div className="flex flex-col my-4 gap-4 md:gap-6 md:flex-row">
            <div className="w-full ">
              <input
                className="appearance-none block w-full rounded text-gray-700 border  py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-zip"
                placeholder="Zip/Postal Code"
                type="text"
                {...register("zip")}
              />
            </div>
            <div className="w-full">
              <input
                className="appearance-none rounded block w-full text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-Country"
                placeholder="Country*"
                type="text"
                {...register("country", { required: true })}
              />
              {errors.country && (
                <p className="py-2 text-red-600 text-sm">
                  Country is required.
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full flex flex-col justify-between">
              <Controller
                name="serviceInterest"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="Service Interest*"
                    options={serviceInterestOptions}
                  />
                )}
              />
              {errors.serviceInterest && (
                <p className="py-2 text-red-600 text-sm">
                  Service Interest is required.
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap my-4 md:my-6">
            <div className="w-full flex flex-col justify-between">
              <Controller
                name="therapyInterest"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="Therapeutic Interest*"
                    options={therapeuticInterestOptions}
                  />
                )}
              />
              {errors.therapyInterest && (
                <p className="py-2 text-red-600 text-sm">
                  Therapy Interest is required.
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full flex flex-col justify-between">
              <Controller
                name="referalInterest"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="How did you hear about Turacoz?*"
                    options={referralSourceOptions}
                  />
                )}
              />
              {errors.referalInterest && (
                <p className="py-2 text-red-600 text-sm">
                  Referal Interest is required.
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap my-4 md:my-6">
            <div className="w-full flex flex-col justify-between">
              <label
                className=" flex justify-start tracking-wide email text-gray-700 text-left mb-2"
                htmlFor="grid-message"
              >
                HOW CAN WE HELP YOU TODAY?
                <span className="text-red-700">*</span>
              </label>
              <textarea
                className="appearance-none block rounded w-full text-gray-700 border border-gray-200 py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-40 resize-none"
                id="grid-message"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <p className="py-2 text-red-600 text-sm">
                  Please fill this required field.
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-full flex flex-col justify-between">
              <Controller
                name="outsourcingTimeline"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="Tell Us When You Anticipate An Outsourcing Need?**"
                    options={outsourcingTimelineOptions}
                  />
                )}
              />
              {errors.outsourcingTimeline && (
                <p className="py-2 text-red-600 text-sm">
                  Outsourcing Timeline is required.
                </p>
              )}
            </div>
          </div>
          <button className="cursor-pointer w-auto rounded my-8 text-white border-red-800 hover:font-semibold hover:text-red-800 border-2 hover:border-red-800 hover:bg-white transition-all bg-red-800 py-2 px-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleAddContact: (payload) => dispatch(performPostContact(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
