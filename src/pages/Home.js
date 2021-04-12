import React from 'react'
import CarouselSlider  from '../components/CarouselSlider';
import Vision from '../components/Vision'
import Banner from '../components/Banner';
import BannerAboutUs from '../components/BannerAboutUs';
import BannerBlog from '../components/BannerBlog';

function Home() {
    return (
        <div>
        <CarouselSlider/>
        <Vision/>
        <Banner/>
        <BannerAboutUs/>
        <BannerBlog/>

        </div>
    )
}

export default Home
