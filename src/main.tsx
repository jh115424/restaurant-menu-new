import HomePage from "./Pages/RestaurantHomePage";
import ReservationPage from "./Pages/ReservationPage";
import EList from "./Pages/EList";
import ContactUs from "./Pages/ContactUs";
import Menus from "./Pages/Menus";
import Interior from "./Pages/Interior";
import PrivateEvents from "./Pages/PrivateEvents";

import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/reservation/",
    element: <ReservationPage />,
  },
  {
    path: "/e-list",
    element: <EList />,
  },
  {
    path: "/contact-us",
    element: (
      <ContactUs
        setUserData={function (_data: {
          name: string;
          email: string;
          message: string;
        }): void {
          // throw new Error('Function not implemented.');
        }}
        userData={undefined}
      />
    ),
  },
  {
    path: "/menus",
    element: <Menus />,
  },
  {
    path: "/interior",
    element: <Interior />,
  },
  {
    path: "/private-events",
    element: <PrivateEvents />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
