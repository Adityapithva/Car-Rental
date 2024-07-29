import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import LogIn from './components/User/LogIn/LogIn.jsx';
import SignIn from './components/User/SignIn/SignIn.jsx';
import Fleet from './components/User/Fleet/Fleet.jsx';
import DashBoard from './components/Admin/DashBoard/DashBoard.jsx';
import Home from './components/User/Home/Home.jsx';
import AddCar from './components/Admin/AddCar/AddCar.jsx';
import ViewCar from './components/Admin/ViewCar/ViewCar.jsx';
import ViewUsers from './components/Admin/ViewUsers/ViewUsers.jsx';
import ViewRentals from './components/Admin/ViewRentals/ViewRentals.jsx';
import Booking from './components/User/Booking/Booking.jsx';
const routes = createBrowserRouter([
  {path:'/',element:<SignIn></SignIn>},
  {path:'/login',element:<LogIn></LogIn>},
  {path:'/fleet',element:<Fleet></Fleet>},
  {path:'/dashboard',element:<DashBoard></DashBoard>},
  {path:'/home',element:<Home></Home>},
  {path:'/addcar',element:<AddCar></AddCar>},
  {path:'/viewcar',element:<ViewCar></ViewCar>},
  {path:'/viewusers',element:<ViewUsers></ViewUsers>},
  {path:'/home',element:<Home></Home>},
  {path:'/viewrentals',element:<ViewRentals></ViewRentals>},
  {path:'/booking',element:<Booking></Booking>},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
