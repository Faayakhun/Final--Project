import React from 'react'
import CarouselSlider  from '../components/CarouselSlider';
import Vision from '../components/Vision'
import Banner from '../components/Banner';
import BannerAboutUs from '../components/BannerAboutUs';
import BannerBlog from '../components/BannerBlog';
import BannerService from '../components/BannerService';
import Footer from  '../components/Footer'

function Home() {
    return (
        <div className="App d-flex flex-column justify-content-between">
        <>
            <CarouselSlider/>
            <Vision/>
            <Banner/>
            <BannerAboutUs/>
            {/* <BannerBlog/> */}
            <BannerService/>
        </>
        <Footer/>

        </div>
    )
}

export default Home
