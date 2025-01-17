import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import "./css/base/reset.css"

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomePage />,
    errorElement: "That pathway does not exist, go back please"
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>
);


