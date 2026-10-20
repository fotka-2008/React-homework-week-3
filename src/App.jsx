import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Peges/Home';
import Services from './Peges/Services';
import Careers from './Peges/Careers';
import CareerDetails from './Peges/CareerDetails';
import Contact from './Peges/Contact';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: "services",
          element: <Services/>,
        },
        {
          path: "careers",
          element: <Careers/>,
        },
        {
          path: "career-details",
          element: <CareerDetails/>,
        },
        {
          path: "contact",
          element: <Contact/>,
        },
      ]
    },
  ])

  return <RouterProvider router={router}/>
}

export default App;
