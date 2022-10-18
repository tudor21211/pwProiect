import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import PopularAnnouncement from '../components/PopularAnnouncement'
import Product from '../components/Product'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Announcement2 from '../components/Announcement2'
import Navbar2 from '../components/Navbar2'



const Home = () => {
  return (
    <div >

      <Announcement2/>
        <Navbar2/>
        <Slider/>
        <Categories/>
        <PopularAnnouncement/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home