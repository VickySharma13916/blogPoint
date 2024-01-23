import axios from "axios";
import { enqueueSnackbar } from "notistack";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { connect } from "react-redux";
import popupImage from "../../assets/images/popup_image.jpg";
import { performPostRequestProposalFile } from "../../redux/actionCreators/requestProposalCreators";
import { BACKEND_URL, BASE_URL } from "../../services/constant";
import Select from "react-select";

const RegisterForm = ({
  handlehideRegister,
  showRegister,
  userData,
  handleAddFileRequestProposal,
}) => {
  const [inputData, setInputData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const fetchInputData = async () => {
    try {
      const Link = userData.link;
      const result = await axios.get(`${BASE_URL}inputField`);
      const filterData = result?.data?.filter(
        (item) => item.inputLink === Link && item.status
      );
      setStatus(filterData[0]?.status);
      setInputData(filterData[0]?.inputField);
    } catch (error) {
      console.error("Error fetching input data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInputData();
  }, []);

  // const schema = generateYupSchema(inputData);
  const { handleSubmit, control, register, setValue, getValues } = useForm({
    defaultValues: {
      registerForm: Object.fromEntries(
        (inputData ?? []).map((field) => [field.name, ""])
      ),
    },
    // resolver: yupResolver(schema),
  });
  const [image, setImage] = useState(null);
  const [fileError, setFileError] = useState("");
  const [carrerFile, setcarrerFile] = useState(null);
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleChangeImages = async (e, field, setValue, index) => {
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
        setValue(`registerForm[${index}].${field.name}`, result?.data?.fileUrl);
        setcarrerFile(result?.data?.fileUrl);
      }
    }
  };

  const handleRemoveFile = () => {
    setImage(null);
    setcarrerFile(null);
  };

  const checkEmptyFields = (data, prefix = "") => {
    const emptyFields = [];

    Object.entries(data).forEach(([key, value]) => {
      const fieldName = prefix ? `${prefix}.${key}` : key;

      if (
        value === "" ||
        value === null ||
        (typeof value === "boolean" && !value)
      ) {
        emptyFields.push(fieldName);
      }

      if (typeof value === "object" && value !== null) {
        const nestedFields = checkEmptyFields(value, fieldName);
        emptyFields.push(...nestedFields);
      }
    });

    return emptyFields;
  };

  const onSubmit = async (data) => {
    const emptyFields = checkEmptyFields(data?.registerForm);
    if (emptyFields.length > 0) {
      // Display error messages for empty fields
      emptyFields.forEach((field) => {
        enqueueSnackbar(`${field} is required`, {
          variant: "error",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
          autoHideDuration: 3000,
        });
      });
      enqueueSnackbar(`File is required`, {
        variant: "error",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
        autoHideDuration: 3000,
      });
    } else {
      // Proceed with form submission
      const newData = {
        ...data,
        Link: userData?.link,
      };

      const result = await axios.post(
        `${BASE_URL}dynamicRegisterForm`,
        newData
      );
      if (result.status === 200) {
        enqueueSnackbar("Register Form Send Successfully", {
          variant: "success",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
          autoHideDuration: 3000,
        });
        handlehideRegister();
      }
    }
  };

  return (
    <>
      {showRegister && (
        <div
          id="defaultModal"
          tabIndex={-1}
          aria-hidden="true"
          className={`fixed top-0 bottom-0 left-0 right-0 z-50 ${
            showRegister ? "block" : "hidden"
          } w-full h-full bg-gray-800 bg-opacity-50 overflow-y-scroll flex items-center justify-center`}
        >
          {loading ? (
            <div>Loading...</div>
          ) : (
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
                  onClick={() => handlehideRegister()}
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
                  <div className="relative z-20 top-0 left-0 right-0 bottom-0 xl:p-12 p-8">
                    <div className="flex flex-col p-4 bg-white rounded">
                      <div className="md:text-3xl text-lg font-semibold text-center">
                        Fill Below Form To Register
                      </div>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-4"
                      >
                        {inputData?.map((field, index) => (
                          <div
                            key={field.id}
                            className=" flex flex-col justify-start items-start gap-4"
                          >
                            {field.type === "file" ||
                            field.type === "checkbox" ? (
                              ""
                            ) : (
                              <div className="flex">
                                <label
                                  className="block text-left tracking-wide font-semibold text-gray-700 mb-2"
                                  htmlFor={field.name}
                                >
                                  {field.label}
                                </label>
                                <span className="requestspan">*</span>
                              </div>
                            )}
                            {field.type === "text" ? (
                              <>
                                <input
                                  className="appearance-none block w-full rounded-lg text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                  id={field.name}
                                  type="text"
                                  placeholder={field.placeholder}
                                  {...register(
                                    `registerForm[${index}].${field.name}`
                                  )}
                                />
                              </>
                            ) : field.type === "email" ? (
                              <>
                                <input
                                  type="email"
                                  className="appearance-none block w-full rounded-lg text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                  id={field.name}
                                  placeholder={field.placeholder}
                                  {...register(
                                    `registerForm[${index}].${field.name}`
                                  )}
                                />
                              </>
                            ) : field.type === "number" ? (
                              <>
                                <input
                                  type="number"
                                  className="appearance-none block w-full rounded-lg text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                  id={field.name}
                                  placeholder={field.placeholder}
                                  {...register(
                                    `registerForm[${index}].${field.name}`
                                  )}
                                />
                              </>
                            ) : field.type === "file" ? (
                              <>
                                <div className="flex flex-wrap w-full -mx-3 mb-6">
                                  <div className="w-full px-0 md:px-3 flex flex-col justify-between">
                                    <label
                                      className=" flex justify-start tracking-wide email text-gray-700 text-left mb-2"
                                      htmlFor="grid-message"
                                    >
                                      {field?.label}
                                    </label>
                                    <input
                                      type="file"
                                      ref={fileInputRef}
                                      onChange={(e) =>
                                        handleChangeImages(
                                          e,
                                          field,
                                          setValue,
                                          index
                                        )
                                      }
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
                                            {image &&
                                            image?.type === "image/jpeg" ? (
                                              <img
                                                src={BACKEND_URL + carrerFile}
                                                alt="Preview"
                                                className="w-20 h-20 rounded-l-sm object-cover bg-slate-100"
                                              />
                                            ) : (
                                              <div className="w-20 h-20 flex justify-center items-center text-white text-xl font-semibold rounded-l-sm bg-slate-300">
                                                {image?.type ===
                                                "application/pdf"
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
                                                  onClick={() =>
                                                    handleRemoveFile()
                                                  }
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
                              </>
                            ) : field.type === "date" ? (
                              <>
                                <input
                                  className="appearance-none block w-full rounded-lg text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                  id={field.name}
                                  placeholder={field.placeholder}
                                  type="date"
                                  {...register(
                                    `registerForm[${index}].${field.name}`
                                  )}
                                />
                              </>
                            ) : field.type === "checkbox" ? (
                              <div className=" flex gap-2 items-center justify-centers">
                                <input
                                  id={field.name}
                                  type="checkbox"
                                  checked={getValues(
                                    `registerForm[${index}].${field.name}`
                                  )}
                                  onChange={() => {
                                    setValue(
                                      `registerForm[${index}].${field.name}`,
                                      !getValues(
                                        `registerForm[${index}].${field.name}`
                                      )
                                    );
                                  }}
                                />
                                <div className="flex">
                                  <label
                                    className="block text-left tracking-wide font-semibold text-gray-700"
                                    htmlFor={field.name}
                                  >
                                    {field.label}
                                  </label>
                                  <span className="requestspan">*</span>
                                </div>
                              </div>
                            ) : field.type === "password" ? (
                              <>
                                <input
                                  type="password"
                                  className="appearance-none block w-full rounded-lg text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                  id={field.name}
                                  placeholder={field.placeholder}
                                  {...register(
                                    `registerForm[${index}].${field.name}`
                                  )}
                                />
                              </>
                            ) : field.type === "radio" ? (
                              <>
                                {field.options.map((option) => (
                                  <div key={option}>
                                    <input
                                      type="radio"
                                      className="mr-2"
                                      id={`${field.name}-${option}`}
                                      value={option}
                                      {...register(
                                        `registerForm[${index}].${field.name}`
                                      )}
                                    />
                                    <label htmlFor={`${field.name}-${option}`}>
                                      {option}
                                    </label>
                                  </div>
                                ))}
                              </>
                            ) : field.type === "options" ? (
                              <>
                                <Select
                                  className="mr-2 w-full"
                                  options={field.options.map((option) => ({
                                    value: option,
                                    label: option,
                                  }))}
                                  onChange={(selectedOption) => {
                                    setValue(
                                      `registerForm[${index}].${field.name}`,
                                      selectedOption.value
                                    );
                                  }}
                                  id={`${field.name}`}
                                  placeholder={field.name}
                                />
                              </>
                            ) : (
                              <div>Unsupported field type</div>
                            )}
                          </div>
                        ))}
                        {status && (
                          <button
                            className="cursor-pointer w-full text-white bg-red-800 py-3 rounded font-semibold text-xl"
                            type="submit"
                          >
                            Submit
                          </button>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleAddFileRequestProposal: (payload) =>
    dispatch(performPostRequestProposalFile(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
