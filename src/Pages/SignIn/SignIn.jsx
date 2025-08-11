import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarSwitcher from "../../Components/ScrollNavbar/NavbarSwicher";

const Login = () => {
  const { singInUser, signInwithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    singInUser(email, password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: `Welcome back, ${result.user.email}`,
          timer: 2000,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: err.message,
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInwithGoogle()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Google Login Successful!",
          text: `Welcome, ${result.user.displayName}`,
          timer: 2000,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Google Login Failed!",
          text: err.message,
        });
      });
  };

  return (
    <div>
      <header className=" text-black top-0 right-0 left-0 z-20">
        <Navbar></Navbar>
        <NavbarSwitcher></NavbarSwitcher>
      </header>
      <div className=" flex items-center mt-10 mb-12  lg:mt-20 justify-center  p-4">
        <div className="flex w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div
            className="w-1/2 hidden md:flex flex-col items-center justify-center bg-cover relative"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/zffhWkmG/1140554-OQRG4-U0.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-opacity-60"></div>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center p-10">
            <div className="w-full space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 text-center">
                Sign In
              </h2>
              <p className="text-gray-500 text-center text-sm">
                Only for registered wholesale partners.
              </p>

              <form className="space-y-5" onSubmit={handleSignIn}>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="checkbox validator"
                      required
                    />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <a
                    href="#"
                    className="text-sm text-orange-400 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-xl transition"
                >
                  Sign In
                </button>
              </form>

              <button
                onClick={handleGoogleSignIn}
                className="btn bg-white w-full text-black border-[#e5e5e5] flex items-center justify-center gap-3"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>

              <p className="text-center text-sm text-gray-500">
                Don’t have an account?{" "}
                <Link
                  to={"/register"}
                  className="text-orange-400 hover:underline"
                >
                  Contact Sales
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-20">
        <Footer />
      </footer>
    </div>
  );
};

export default Login;
