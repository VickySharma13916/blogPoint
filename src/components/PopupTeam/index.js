import React from "react";
import { BACKEND_URL } from "../../services/constant";

const PopUpData = ({ data, handleHidePopup, showPopup }) => {
  return (
    <>
      {showPopup && (
        <div
          id="defaultModal"
          tabIndex={-1}
          aria-hidden="true"
          className={`fixed top-0 bottom-0 left-0 right-0 z-50 ${
            showPopup ? "block" : "hidden"
          } w-full h-full bg-gray-800 bg-opacity-80 overflow-y-scroll flex items-center justify-center`}
        >
          <div className="relative py-8 w-full max-w-2xl mx-auto max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <button
                type="button"
                className="text-gray-400 absolute top-2 right-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              <div className="p-6 space-y-6 flex flex-col justify-center text-center">
                <img
                  src={
                    data.turacozteamImage
                      ? BACKEND_URL + data?.turacozteamImage
                      : BACKEND_URL + data?.teamImage
                  }
                  alt={
                    data.turacozteamName
                      ? data?.turacozteamName
                      : data?.teamName
                  }
                  className="w-fit mx-auto mt-4"
                />
                <div className="text-2xl font-semibold ">
                  {data.turacozteamName
                    ? data?.turacozteamName
                    : data?.teamName}
                </div>
                <div className="text-red-800">
                  {data.turacozteamDesignation
                    ? data?.turacozteamDesignation
                    : data?.teamDesignation}
                </div>
                <div>
                  {data.turacozteamAbout
                    ? data?.turacozteamAbout
                    : data?.teamAbout}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpData;
