import { useState } from "react";
import ApiConnection from "../config/Api.config";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { FaRegCopy } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";

const ShowPassword = ({ showContent, setShowContent }) => {
  const [defaultPassword, setDefaultPassword] = useState("...........");
  const [visibility, setVisibility] = useState(false);
  const [visibleId, setVisibleId] = useState(null);

  const handleDelete = (_id) => {
    const newList = showContent.filter((item) => item._id !== _id);
    setShowContent(newList);
    ApiConnection.delete(`/password/delete/${_id}`);
    toast("Deleted successfully");
  };

  const handleVisibility = (_id) => {
    setVisibleId(_id);
    setVisibility((prev) => !prev);
  };

  const handleCopyUsername = (_id) => {
    const result = showContent.find((item) => item._id === _id);
    navigator.clipboard.writeText(result.username);
    toast("Copied username");
  };

  const handleCopyEmail = (_id) => {
    const result = showContent.find((item) => item._id === _id);
    navigator.clipboard.writeText(result.email);
    toast("Copied email");
  };

  return (
    <>
      <ToastContainer />

      <div className="mb-4 sm:mb-6 md:mb-8 mt-10">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center px-4">
          Your Password
        </h1>
      </div>
      {showContent.length > 0 ? (
        <div className="px-4 sm:px-0">
          <div className="border-0 md:border-2 border-black">
            {/* Table with integrated header */}
            {showContent.map((content, index) => (
              <div key={content._id}>
                {/* Header row - only show for first item and on desktop */}
                {index === 0 && (
                  <div className="hidden md:flex bg-green-500">
                    <div className="w-1/4 p-3 md:p-4 lg:p-5 border-r-2 border-black text-white font-bold text-center text-sm md:text-base">
                      User Name
                    </div>
                    <div className="w-1/4 p-3 md:p-4 lg:p-5 border-r-2 border-black text-white font-bold text-center text-sm md:text-base">
                      Email
                    </div>
                    <div className="w-1/4 p-3 md:p-4 lg:p-5 border-r-2 border-black text-white font-bold text-center text-sm md:text-base">
                      Password
                    </div>
                    <div className="w-1/4 p-3 md:p-4 lg:p-5 text-white font-bold text-center text-sm md:text-base">
                      Delete
                    </div>
                  </div>
                )}

                {/* Data row */}
                <div className="flex flex-col md:flex-row bg-white md:bg-green-200 border-2 md:border-t-2 border-gray-300 md:border-black md:border-b-0 md:border-l-0 md:border-r-0 mb-4 md:mb-0 rounded-lg md:rounded-none shadow-md md:shadow-none">
                  {/* Username column */}
                  <div className="w-full md:w-1/4 p-3 sm:p-4 md:p-4 lg:p-5 border-b-2 md:border-b-0 md:border-r-2 border-gray-200 md:border-black flex items-center justify-between relative">
                    <div className="block md:hidden absolute top-2 left-3 text-xs font-semibold text-green-700 uppercase">
                      Username
                    </div>
                    <h1 className="text-black text-left mt-5 md:mt-0 text-sm sm:text-base break-all pr-2 flex-1">
                      {content.username}
                    </h1>
                    <button
                      className="cursor-pointer p-2 md:p-1 rounded-md md:rounded-none bg-gray-100 md:bg-transparent hover:bg-gray-200 md:hover:bg-transparent transition-colors flex-shrink-0"
                      onClick={() => handleCopyUsername(content._id)}
                    >
                      <FaRegCopy className="text-sm md:text-base" />
                    </button>
                  </div>

                  {/* Email column */}
                  <div className="w-full md:w-1/4 p-3 sm:p-4 md:p-4 lg:p-5 border-b-2 md:border-b-0 md:border-r-2 border-gray-200 md:border-black flex items-center justify-between relative">
                    <div className="block md:hidden absolute top-2 left-3 text-xs font-semibold text-green-700 uppercase">
                      Email
                    </div>
                    <h1 className="text-black text-left mt-5 md:mt-0 text-sm sm:text-base break-all pr-2 flex-1">
                      {content.email}
                    </h1>
                    <button
                      className="cursor-pointer p-2 md:p-1 rounded-md md:rounded-none bg-gray-100 md:bg-transparent hover:bg-gray-200 md:hover:bg-transparent transition-colors flex-shrink-0"
                      onClick={() => handleCopyEmail(content._id)}
                    >
                      <FaRegCopy className="text-sm md:text-base" />
                    </button>
                  </div>

                  {/* Password column */}
                  <div className="w-full md:w-1/4 p-3 sm:p-4 md:p-4 lg:p-5 border-b-2 md:border-b-0 md:border-r-2 border-gray-200 md:border-black flex items-center justify-between relative">
                    <div className="block md:hidden absolute top-2 left-3 text-xs font-semibold text-green-700 uppercase">
                      Password
                    </div>
                    <h1 className="text-black text-left mt-5 md:mt-0 text-sm sm:text-base break-all pr-2 flex-1">
                      {visibility && visibleId === content._id ? (
                        content.password
                      ) : (
                        <p className="text-lg sm:text-xl">{defaultPassword}</p>
                      )}
                    </h1>
                    <button
                      className="p-2 md:p-1 rounded-md md:rounded-none bg-gray-100 md:bg-transparent hover:bg-gray-200 md:hover:bg-transparent transition-colors flex-shrink-0"
                      onClick={() => handleVisibility(content._id)}
                    >
                      {visibility && visibleId === content._id ? (
                        <RxEyeOpen className="text-lg sm:text-xl cursor-pointer" />
                      ) : (
                        <GoEyeClosed className="text-lg sm:text-xl cursor-pointer" />
                      )}
                    </button>
                  </div>

                  {/* Delete column */}
                  <div className="w-full md:w-1/4 p-3 sm:p-4 md:p-4 lg:p-5 flex justify-center items-center">
                    <button
                      onClick={() => handleDelete(content._id)}
                      className="bg-green-500 cursor-pointer py-2 px-4 sm:py-2 sm:px-6 md:py-2 md:px-5 lg:py-3 lg:px-6 rounded-3xl border-2 border-green-700 hover:bg-green-600 active:bg-green-700 text-white font-medium text-sm sm:text-base w-full md:w-auto transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500 text-base sm:text-lg py-8 px-4">
          No data to show
        </div>
      )}
    </>
  );
};

export default ShowPassword;
