import React from "react";
import Background from "../Components/Background/Background";
import BackgroundTwo from "../Components/BackgroundTwo/BackgroundTwo";
import KashmirImage from '../assets/KashmirImage.jpg';
import HomeVedio from '../Components/HomeVedio/HomeVedio';
import Explore from '../Components/Explore/Explore';
import Map from '../assets/Map.jpg';
import FestivalONe from '../assets/FestivalONe.webp'
import FestivalTwo from '../assets/FestivalTwo.jpg'
import Hemis from '../assets/Hemis.jpg'
import skiing2 from '../assets/skiing2.jpg'
import Kids from '../assets/Kids.webp';
import Market from '../assets/Market.jpg';

function HomePage(){
    return (
        <>
        <HomeVedio/>
        <Background 
        image={skiing2}
        heading="Skiing"
        text="Renowned for its world-class ski slopes, Gulmarg is a paradise for skiing enthusiasts. Whether you're a beginner or an experienced skier, the fresh powder snow and well-maintained slopes provide an exhilarating experience. The stunning vistas of snow-capped mountains add to the thrill."
        />

        <BackgroundTwo  
          image={Kids}
          heading="Explore the Valleys"
          text="Kashmir's valleys, like Pahalgam, Sonmarg, and Betaab Valley, offer unparalleled natural beauty with lush meadows, crystal-clear streams, and majestic mountains. Each valley boasts its own charm, perfect for trekking, picnics. Exploring these valleys is a journey into nature's tranquility and breathtaking vistas."
        />

       <Background 
        image={Market}
        heading="Kashmir Cloth Market"
        text="Kashmir's cloth markets are renowned for their exquisite Pashmina shawls, intricate Kashmiri embroidery, and fine woolen garments. The markets showcase handwoven fabrics, silk carpets, and traditional attire, reflecting the region's rich craftsmanship. Visiting these markets offers a glimpse into Kashmir's vibrant culture and heritage."
        />

<BackgroundTwo  
          image={KashmirImage}
          heading="Shikara Rides"
          text="A Shikara ride on the serene Dal or Nigeen Lake is a quintessential Kashmiri experience. Floating past blooming lotus gardens, vibrant houseboats, and stunning mountain views, the ride offers tranquility and a unique perspective of the region's beauty. It's a perfect way to relax and immerse in Kashmir's charm."
        />
    
    <Explore 
    explore="Scroll to Explore More"
    image={Map}
    redirect="https://www.google.com/maps/place/Srinagar/@34.1871861,74.7759507,122275m/data=!3m1!1e3!4m6!3m5!1s0x38e1855686e3c5ef:0x66244b7cc1e305c6!8m2!3d34.0836708!4d74.7972825!16zL20vMDFxXzIy?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D "
    image1={Hemis}
    festival1="Hemis"
    KashmirWebsite="https://www.holidify.com/pages/festivals-of-jammu-and-kashmir-21.html"

    image2={FestivalTwo}
    festival2="Shikara"
      />
        </>
    )
}
export default HomePage