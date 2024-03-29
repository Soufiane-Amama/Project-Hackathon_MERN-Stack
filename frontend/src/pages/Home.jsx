import React from 'react'
import Navbar from '../Components/home/Navbar'
import HomeC from '../Components/home/HomeC'

import hand from '../images/ssss.png';
import { GiFoldedPaper } from "react-icons/gi";
import { FaBottleWater } from "react-icons/fa6";
import { GiShatteredGlass } from "react-icons/gi";
import { GiMetalBar } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";
import Welcome from '../Components/home/Welcome';
import About from '../Components/home/About';
import Valunteer from '../Components/home/Valunter';
import Contact from '../Components/home/Contact';
import Footer from '../Components/home/Footer';
import Madinati from '../Components/home/Madinati';

const Home = () => {
  return (
    <>
      <Navbar/>
      <HomeC/>
      <Welcome/>
      <About/>
      <Valunteer/>
      <Madinati/>
      <Contact/>
      <Footer/>
      
    </>
  )

}


export default Home
