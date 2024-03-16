// Create nested React Elements

import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Body from "../src/components/Body";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import RestaurantMenu from "./components/RestaurantMenu";
import Store from "./redux/Store";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (name) => {
    setUsername(name);
    setIsLoggedIn(true);
  };
  return (
    <Provider store={Store}>
      <div className="wrapper">
        <Header userName={username} status={isLoggedIn} />
        {isLoggedIn ? <Link to="/" /> : <Login onLogin={handleLogin} />}
        {isLoggedIn && <Outlet />}
        <Footer />
      </div>
    </Provider>
  );
};

const About = lazy(() => import("./components/About"));
// to create a routing Config
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {" "}
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// router provider provide routing config to our App
root.render(<RouterProvider router={appRouter} />);
