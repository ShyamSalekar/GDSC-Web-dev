import React from "react";

const Register = () => {
  return (
    <div className="flex flex-col  bg-gray-500 items-center justify-center h-screen">
      <div className="flex flex-col border-2 border-black p-10 rounded-lg">
        <h1 className="text-5xl font-semibold flex intem-center justify-center">
          Sign Up
        </h1>
        <p className="my-5 flex intem-center justify-center">
          Create an Account
        </p>

        <input
          className="border-b-2 outline-none bg-transparent border-gray-300 hover:border-teal-500 text-xl m-2 p-2"
          type="text"
          placeholder="Name"
        />

        <input
          className="border-b-2 outline-none bg-transparent border-gray-300 hover:border-teal-500 text-xl m-2 p-2"
          type="email"
          placeholder="Email"
        />

        <input
          className="border-b-2 outline-none bg-transparent border-gray-300 hover:border-teal-500 text-xl m-2 p-2"
          type="password"
          placeholder="Password"
        />

        <button className="rounded-2xl mx-5 my-5 p-1 bg-teal-500">
          Create Account
        </button>

        <p className="my-5 flex intem-center justify-center">
          Already have an account?
          <a className="text-teal-500" href="http://localhost:3000/">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
