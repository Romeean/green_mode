import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Error } from './components/UI components/Error';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ServicePage } from './pages/ServicePage';
import { ContactUsPage } from './pages/ContactUsPage';

import "./css/base/reset.css"
import "./css/base/variables.css"

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomePage />,
    errorElement: <Error />
  },
  {
    
    path:'/servicepage',
    element: <ServicePage />
  },
  {
    path:'/aboutuspage',
    element: <AboutUsPage />
  },
  {
    path:'/contactuspage',
    element: <ContactUsPage />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>
);


