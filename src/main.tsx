import HomePage from './Pages/RestaurantHomePage';
import ReservationPage from './Pages/ReservationPage';
import EList from './Pages/EList';
import ContactUs from './Pages/ContactUs';





import  ReactDOM  from 'react-dom/client'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'

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
    element: <ContactUs />,
  }

 
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)