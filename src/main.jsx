import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/Layout/MainLayout';
import Home from './Components/Pages/Home/Home';
import Donation from './Components/Pages/Donation/Donation';
import Statistics from './Components/Pages/Statistics/Statistics';
// import SingleCard from './Components/Pages/SingleCard/SingleCard';
import CardShow from './Components/Pages/SingleCard/CardShow';

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element:<Home></Home>,

        // loader:() => fetch('Cards.json')

      },
      {
        path: '/donation',
        element:<Donation></Donation>
      },
      {
        path: '/statistice',
        element:<Statistics></Statistics>
      },
      {
        path:'/cards/:id',
        element:<CardShow></CardShow>,
        loader:() => fetch('/public/Cards.json')
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
