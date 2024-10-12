import HomePage from './Pages/RestaurantHomePage';
import ReservationPage from './Pages/ReservationPage';
import EList from './Pages/EList';
import ContactUs from './Pages/ContactUs';
import Menu from './Pages/Menu';





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
    element: <ContactUs setUserData={function (data: { name: string; email: string; message: string; }): void {
      // throw new Error('Function not implemented.');
    } } userData={undefined} />,
  },
  {
    path: "/menu",
    element: <Menu/>,
  },
  

 
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)