import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';
import './Explore.css';

function Explore(Props){
    return (
        <>
         <h className="text-4xl font-playfair font-bold my-[4vw] flex items-center justify-center">{Props.explore}<FontAwesomeIcon icon={faArrowDown} className="ml-[0.5vw]"></FontAwesomeIcon></h>
        <div className="  my-[4vw] flex justify-center items-center justify-start " id="mapCont">
    <a href={Props.redirect}
    className="flex items-center justify-center">
      
      <img
        src={Props.image}
        alt="kashmir image" id="map"
        className="w-1/2 h-1/2 mx-[10vw] object-cover rounded-lg shadow-lg transform -translate-y-4"
      />
      
    </a>
</div>

<div>

  <div className="bg-blue-200 rounded-lg p-4 border border-blue-500 shadow-md w-[90vw] h-[30vw] mx-auto">
  <h className="text-4xl font-playfair  font-bold flex items-center justify-center">Trending In Kashmir</h>
  <div className="flex flex-wrap justify-center items-start gap-10 my-[4vw]">
    <div className="text-center w-full sm:w-1/2 md:w-1/3">
    <div className="w-full h-1/2">
    <a href={Props.KashmirWebsite}>
      <img
        src={Props.image1}
        alt="Festivals of Kashmir"
        className=" FestivalImage w-full h-auto object-cover rounded-lg"
      />
      </a>
      </div>
      <p className="mt-4">{Props.festival1}</p>
    </div>
    <div className="text-center w-full sm:w-1/2 md:w-1/3">
    <div className="w-full h-1/2">
    <a href={Props.KashmirWebsite}>
      <img id="shikara"
        src={Props.image2}
        alt="Festivals of Kashmir"
        className="FestivalImage w-full h-[18.5vw] object-cover rounded-lg"
      />
      </a>
      </div>
      <p className="mt-4">{Props.festival2}</p>
    </div>
  </div>
</div>
</div>







        </>
    )
}

export default Explore;

