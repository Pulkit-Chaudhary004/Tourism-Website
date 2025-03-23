import React from "react";
import Intro from "../Components/Intro/Intro";
import Tourist from "../Components/Tourist/Tourist";
import Pricing from "../Components/Pricing/Pricing";

import GulmargImage from '../assets/gulmarg.jpg';
import ShalimarBaghImage from '../assets/shalimar.jpg';
import DalLakeImage from '../assets/dallake.jpg';
import AmarnathImage from '../assets/amarnath.jpg';
import PahalgamImage from '../assets/pahalgam.jpg';
import NishatBaghImage from '../assets/nishat.jpg';
import HemisMonestryImage from '../assets/HemisMonestry.jpg';
import SonmargImage from '../assets/sonmarg.jpg';
import BetabImage from '../assets/betab.jpg';
import VaishnoDeviImage from '../assets/VaishnoDevi.jpg'
import shankaracharyaImage from '../assets/shankaracharya.jpeg';
import yusmargImage from '../assets/yusmarg.jpg';
import tulipImage from '../assets/tulip.jpg';
import zanskarImage from '../assets/zanskar.jpeg';
import KhanqahOfShahHamadanImage from  '../assets/Khanqah-of-Shah-Hamadan.jpg';




function AboutKashmir() {
   const touristPlaces = [
      {
        id: 1,
        name: 'Skiing in Gulmarg',
        category: 'Adventure',
        image: GulmargImage, 
        description: 'Experience thrilling skiing adventures in the snow-covered slopes of Gulmarg.',
        redirectLink: 'https://skigulmarg.com/blog'
      },
      {
        id: 2,
        name: 'Shalimar Bagh',
        category: 'Garden',
        image: ShalimarBaghImage,
        description: 'A beautiful Mughal garden, known for its stunning landscapes and water fountains.',
        redirectLink: 'https://www.incredibleindia.gov.in/en/jammu-and-kashmir/srinagar/shalimar-bagh-in-srinagar-jammu-and',
      },
      {
        id: 3,
        name: 'Dal Lake',
        category: 'Water',
        image: DalLakeImage , 
       description: 'Enjoy the serene beauty of Dal Lake and stay in the famous houseboats.',
        redirectLink: 'https://www.incredibleindia.gov.in/en/jammu-and-kashmir/srinagar/dal-lake'
      },
      {
        id: 4,
        name: 'Amarnath Cave',
        category: 'Spiritual',
        image: AmarnathImage,
        description: 'A holy pilgrimage site dedicated to Lord Shiva, located in the Himalayas.',
        redirectLink: 'https://jksasb.nic.in/'
      },
      {
        id: 5,
        name: 'Pahalgam Trekking',
        category: 'Adventure',
        image: PahalgamImage,
        description: 'Discover the breathtaking trails and picturesque valleys of Pahalgam.',
        redirectLink: 'https://theroamingshoes.com/2023/08/experiencing-pahalgam-an-unconventional-guide/'
      },
      {
        id: 6,
        name: 'Nishat Bagh',
        category: 'Garden',
        image: NishatBaghImage,
        description: 'A  Mughal garden on the shores of Dal Lake, offering magnificent views of the Himalayas.',
        redirectLink: 'https://www.incredibleindia.gov.in/en/jammu-and-kashmir/srinagar/nishat-bagh-in-srinagar-kashmir'
      },
      {
        id: 7,
        name: 'Hemis Monastery',
        category: 'Spiritual',
        image: HemisMonestryImage,
        description: 'A significant Buddhist monastery located in Ladakh, known for its annual festival.',
        redirectLink: 'https://www.incredibleindia.gov.in/en/ladakh/leh/hemis-national-park'
      },
      {
        id: 8,
        name: 'Sonamarg Valley',
        category: 'Adventure',
        image: SonmargImage,
        description: 'Known for its meadows and adventure activities like camping, trekking, and fishing.',
        redirectLink: 'https://vargiskhan.com/log/sonamarg/'
      },
      {
        id: 9,
        name: 'Betab Valley',
        category: 'Adventure',
        image: BetabImage,
        description: 'A picturesque valley known for its stunning natural beauty and adventure activities.',
        redirectLink: 'https://www.exoticmiles.com/attractions/betaab-valley/'
      },
      {
        id: 10,
        name: 'Jammu Vaishno Devi Temple',
        category: 'Spiritual',
        image:VaishnoDeviImage,
        description: 'A famous Hindu temple dedicated to Goddess Vaishno Devi, located on the Trikuta Mountains.',
        redirectLink: 'https://example.com/vaishno-devi-temple'
      },
      {
        id: 11,
        name: 'Shankaracharya Temple',
        category: 'Spiritual',
        image: shankaracharyaImage,
        description: 'A historic temple dedicated to Lord Shiva, offering panoramic views of Srinagar.',
        redirectLink: 'https://jatinchhabra.com/vaishno-devi-travel-blog/'
      },
      {
        id: 12,
        name: 'Yusmarg',
        category: 'Adventure',
        image: yusmargImage,
        description: 'A serene place surrounded by mountains and pine forests, ideal for nature walks and photography.',
        redirectLink: 'https://theroamingshoes.com/2023/08/yusmarg-a-guide-to-kashmirs-lesser-known-gem/'
      },
      {
        id: 13,
        name: 'Tulip Garden',
        category: 'Garden',
        image: tulipImage,
        description: 'Asia’s largest tulip garden, blooming with vibrant colors in the spring.',
        redirectLink: 'https://example.com/tulip-garden'
      },
      {
        id: 14,
        name: 'Zanskar Valley',
        category: 'Adventure',
        image: zanskarImage,
        description: 'A remote and rugged valley, offering activities like trekking, rafting, and camping.',
        redirectLink: 'https://www.tripadvisor.in/Attraction_Review-g297623-d1220203-Reviews-Indira_Gandhi_Tulip_Garden-Srinagar_Srinagar_District_Kashmir_Jammu_and_Kashmir.html'
      },
      {
        id: 15,
        name: 'Khanqah of Shah Hamdan',
        category: 'Spiritual',
        image: KhanqahOfShahHamadanImage,
        description: 'A historical mosque and shrine, known for its unique wooden architecture and spiritual significance.',
        redirectLink: 'https://www.trawell.in/jammu-kashmir/srinagar/khanqah-of-shah-hamdan'
      }
    ];
    

  return (
    <>
      <Intro />
      <Tourist places={touristPlaces} />
      <Pricing/>
    </>
  );
}

export default AboutKashmir;
