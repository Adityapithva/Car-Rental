import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import LogIn from './components/User/LogIn/LogIn.jsx';
import SignIn from './components/User/SignIn/SignIn.jsx';
import Fleet from './components/User/Fleet/Fleet.jsx';
import Main from './components/User/Main/Main.jsx';
import AddCar from './components/Admin/AddCar/AddCar.jsx';
import ViewCar from './components/Admin/ViewCar/ViewCar.jsx';
import ViewUsers from './components/Admin/ViewUsers/ViewUsers.jsx';
import ViewRentals from './components/Admin/ViewRentals/ViewRentals.jsx';
import Booking from './components/User/Booking/Booking.jsx';
import AboutUs from './components/User/AboutUs/AboutUs.jsx';
import Team from './components/User/Team/Team.jsx';
import ContactUs from './components/User/ContactUs/ContactUs.jsx';
import MyRentals from './components/User/MyRentals/MyRentals.jsx';
const routes = createBrowserRouter([
  {path:'/',element:<SignIn></SignIn>},
  {path:'/login',element:<LogIn></LogIn>},
  {path:'/fleet',element:<Fleet></Fleet>},
  {path:'/home',element:<Main></Main>},
  {path:'/addcar',element:<AddCar></AddCar>},
  {path:'/viewcar',element:<ViewCar></ViewCar>},
  {path:'/viewusers',element:<ViewUsers></ViewUsers>},
  {path:'/viewrentals',element:<ViewRentals></ViewRentals>},
  {path:'/booking',element:<Booking></Booking>},
  {path:'/aboutus',element:<AboutUs></AboutUs>},
  {path:'/team',element:<Team></Team>},
  {path:'/contactus',element:<ContactUs></ContactUs>},
  {path:'/myrentals',element:<MyRentals></MyRentals>},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
