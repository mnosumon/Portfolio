import React from 'react'
import Navbar from './components/navbar/Navbar'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import RouteLayout from './RouteLayout';
import Profile from './section/profile/Profile';
import Projects from './section/Projects';
import About from './section/about/About';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RouteLayout/>}>
        <Route path='/' element={<Profile/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
      </Route>
    )
  );
  return (
    <RouterProvider router={router}/>
  )
}

export default App
