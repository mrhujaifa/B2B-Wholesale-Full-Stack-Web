import React, { useContext } from "react";
import { useNavigate, Link } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarSwitcher from "../../Components/ScrollNavbar/NavbarSwicher";

const Register = () => {
  const { createUser, ProfileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const photoURL = formData.get("PhotoUrl");

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must have at least 6 characters, including uppercase and lowercase letters.",
      });
      return;
    }

    createUser(email, password)
      .then(() => {
        return ProfileUpdate({
          displayName: name,
          photoURL: photoURL,
        });
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Account Created!",
          text: `Welcome ${name}, your account has been successfully created.`,
          timer: 2500,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed!",
          text: err.message,
        });
      });
  };

  return (
    <div>
      <header  className=" text-black top-0 right-0 left-0 z-20">
        <Navbar></Navbar>
        <NavbarSwitcher></NavbarSwitcher>
      </header>

      <div className=" flex items-center mt-10 mb-10 justify-center  p-4">
        <div className="flex w-full max-w-7xl bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div
            className="w-1/2 hidden md:flex flex-col items-center justify-center bg-cover relative"
            style={{ backgroundImage: "url('https://i.postimg.cc/5NMfDN2B/133557.jpg')" }}
          >
            <div className="absolute inset-0 bg-opacity-60"></div>
            <div className="relative z-10 text-center px-6">
              
              <h2 className="text-orange-600 text-3xl font-bold mb-2">
                Join B2B Wholesale
              </h2>
              <p className="text-orange-500 text-sm">
                Create your business buying partner account.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center p-10">
            <div className="w-full space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 text-center">
                Create an Account
              </h2>
              <p className="text-gray-500 text-center text-sm">
                Register to start accessing wholesale products.
              </p>

              <form className="space-y-5" onSubmit={handleRegister}>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    name="PhotoUrl"
                    placeholder="https://your-photo-url.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>

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

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-xl transition"
                >
                  Register
                </button>
              </form>

              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link to="/SignIn" className="text-orange-400 hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
