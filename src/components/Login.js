import React, { useState } from "react";
import { Route } from "react-router-dom";
import dose from "../utils/images/Dose.jpg";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //   const [redirectToHome, setRedirectToHome] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation
    if (username === "") {
      setError("Please enter your username.");
      return;
    }

    if (password === "") {
      setError("Please enter your password.");
      return;
    }

    if (username !== "" && password !== "") {
      onLogin(username);
      <Route to="/" />;
      //   setRedirectToHome(true);
    }
    // Validation passed, perform login logic here
    // For demonstration, just log the username and password
    console.log("Username:", username);
    console.log("Password:", password);

    // Reset form fields and error message
    setUsername("");
    setPassword("");
    setError("");
  };

  //   if (redirectToHome) {
  //     // Redirect to home page if authentication is successful
  //     return <Route to="/" />;
  //   }

  return (
    <div className="mx-auto flex flex-col align-middle justify-center gap-5 h-[70%]">
      <div className="w-9/12 mx-auto shadow-lg hover:shadow-2xl transition-shadow">
        <h2 className="text-center text-lg px-6 py-3 bg-orange-500 text-white mt-5 rounded-md md:text-3xl">
          Login
        </h2>
        {error && (
          <div
            className="text-center text-lg my-2 font-bold"
            style={{ color: "red" }}
          >
            {error}
          </div>
        )}
        <div className="flex flex-col-reverse md:flex-row gap-5">
          <div className="w-full md:w-4/12 p-4 h-[80%]">
            <img src={dose} alt="" className="rounded-md" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-[80%] px-4 my-5 mt-5 flex flex-col"
          >
            <label className="text-lg font-bold text-center text-orange-500">
              Username
            </label>
            <div className="my-2">
              <input
                type="text"
                value={username}
                className="border-orange-600 border-solid border-2 w-full p-2 rounded-md"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <label className="text-lg font-bold text-center text-orange-500">
              Password
            </label>
            <div className="my-2">
              <input
                type="password"
                value={password}
                className="border-orange-600 border-solid border-2 w-full p-2 rounded-md"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-orange-600 text-white shadow-md rounded-md py-2 px-5 font-bold my-5"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
