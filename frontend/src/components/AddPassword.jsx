import { useState, useEffect } from "react";
import ApiConnection from "../config/Api.config";
import ShowPassword from "./ShowPassword";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";

const AddPassword = () => {
  const [data, setData] = useState({});
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [showContent, setShowContent] = useState([]);

  useEffect(() => {
    async function getPassword() {
      const response = await ApiConnection.get("/password");
      setShowContent(response.data);
    }
    getPassword();
  }, []);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await ApiConnection.post("/password/add", {
      ...data,
    });
    console.log(res);
    setShowContent((prev) => [...prev, res.data.response]);
    e.target.reset();
    toast("Successfully added");
  };

  // Toggle visibility of password input
  const handleVisible = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <>
      <ToastContainer />
      <div className="container-body pt-20">
        <form onSubmit={handleSubmit}>
          <div className="bg-white py-2 px-5 rounded-2xl border-2 border-green-700">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="border-none outline-none w-full"
              required
            />
          </div>

          <div className="flex items-center mt-5">
            <div className="bg-white py-2 px-5 grow rounded-2xl border-2 mr-5 border-green-700">
              <input
                type="text"
                id="userName"
                name="username"
                placeholder="Enter your userName"
                onChange={handleChange}
                className="border-none outline-none w-full"
                required
              />
            </div>

            <div className="bg-white py-2 px-5 flex items-center rounded-2xl border-2 border-green-700">
              <input
                name="password"
                type={visiblePassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                onChange={handleChange}
                required
                className="border-none outline-none w-full"
              />
              <button
                type="button"
                onClick={handleVisible}
                className="ml-2 text-green-700 font-semibold"
              >
                {visiblePassword ? <RxEyeOpen /> : <GoEyeClosed />}
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 text-xl cursor-pointer py-2 px-15 mt-5 rounded-3xl border-2 border-green-700 hover:bg-green-600 active:bg-green-700"
            >
              Add
            </button>
          </div>
        </form>

        <ShowPassword
          showContent={showContent}
          setShowContent={setShowContent}
        />
      </div>
    </>
  );
};

export default AddPassword;
