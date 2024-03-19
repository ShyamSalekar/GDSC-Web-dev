import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col bg-gray-500 items-center justify-center h-screen">
      <div className="flex flex-col border-2 border-black p-10 rounded-lg">
        <h1 className="text-5xl font-semibold flex intem-center justify-center">
          Login
        </h1>
        <p className="my-5 flex intem-center justify-center">
          Enter your details below
        </p>

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
          Log in
        </button>
        <p className="my-5 flex intem-center justify-center">
          Dont have an account?
          <a className="text-teal-500" href="http://localhost:3000/register">
          Sign up
          </a>
          </p>
      </div>
    </div>
  );
};

export default Login;
