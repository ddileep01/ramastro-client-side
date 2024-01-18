// SignUp.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

const clientId =
  "391009188824-nonh55ejjoiv94usp8bh7i83j3rjqa9g.apps.googleusercontent.com";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log("Signing up with:", {
      name,
      email,
      contactNumber,
      createPassword,
    });
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS!! curresnt user:", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED!! res:", res);
  };

  const handleGoogleSignIn = () => {
    console.log("Signing in with Google");
  };

  return (
    <>
      <div className="md:flex justify-center items-center h-screen bg-white">
        <div className="bg-white p-8 rounded-lg md:shadow-md">
          <img
            src="https://i.ibb.co/c8pFKNw/ramastro-logo-copy.png"
            className="mb-2"
            alt="logo"
            height={120}
            width={120}
          ></img>
          <h2 className="text-2xl font-bold mb-2">Sign up</h2>
          <p className="text-gray-400">
            Book an astrologer in seconds. Already have an account?{" "}
            <span
              className="text-center text-blue-500 cursor-pointer mt-2 font-semibold"
              onClick={handleLogin}
            >
              Sign in.
            </span>
          </p>
          <div className="md:flex mt-4 mb-4">
            <div className="mr-2">
              <label>Email</label>
              <input
                required
                type="text"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="md:ml-2">
              <label>Full Name</label>
              <input
                required
                type="text"
                placeholder="example name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="md:flex mt-4 mb-4">
            <div className="mr-2">
              <label>Contact Number</label>
              <input
                required
                type="tel"
                placeholder="XX XXXXX XXXXX"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="md:ml-2">
              <label>Password</label>
              <input
                required
                type="password"
                placeholder="........"
                value={createPassword}
                onChange={(e) => setCreatePassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center my-6">
            <div className="flex-grow h-0.5 bg-gray-300"></div>
            <span className="mx-4 text-gray-700">or</span>
            <div className="flex-grow h-0.5 bg-gray-300"></div>
          </div>
          <GoogleLogin
            onClick={handleGoogleSignIn}
            className="w-full p-3 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 text-black"
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          ></GoogleLogin>
          <div className="mt-4 mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2 border border-gray-300 rounded focus:outline-none"
              />
              <label htmlFor="rememberMe" className="text-gray-400">
                Remember me
              </label>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSignUp}
            className="w-full bg-blue-500 text-white p-3 rounded cursor-pointer hover:bg-blue-600 focus:outline-none"
          >
            Sign up to your account
          </button>
          <p className="text-sm mt-4">
            By Signing up, you agree to our{" "}
            <span className="text-blue-500 cursor-pointer">
              <a href="/">Terms of Use</a>
            </span>{" "}
            and{" "}
            <span className="text-blue-500 cursor-pointer">
              <a href="/">Privacy Policy</a>
            </span>
            .
          </p>
        </div>
        <div className="ml-4">
          {/* <img
      src="https://i.ibb.co/c8pFKNw/ramastro-logo-copy.png"
      className="mb-2"
      alt="logo"
      height={120}
      width={120}
    ></img> */}
          <h1 className="text-4xl font-bold mb-2">
            Explore the world’s <br></br> leading online astrology.
          </h1>
          <p>
            Countless astrology enthusiasts and seekers turn to our platform{" "}
            <br></br>the hub for the most skilled and insightful astrologers and
            online <br></br>astrology services globally.
          </p>
          <div className="mt-4 flex">
            <img
              src="https://i.ibb.co/zxvyQTC/testimonial-set-of-ppl-copy.png"
              className="mb-2"
              alt="happy customers"
              height={120}
              width={120}
            ></img>
            <p className="pt-2">
              | &nbsp; Over <span className="font-bold">15.7k</span> Happy
              Customers
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
