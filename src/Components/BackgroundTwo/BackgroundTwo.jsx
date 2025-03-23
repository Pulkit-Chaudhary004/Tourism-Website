import home from './home.jpg'
import './BackgroundTwo.css'

function BackgroundTwo(props) {
  return (
    <div className="my-[6vw] flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-600 to-gray-300 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all ease-in-out">
      <div className="flex items-center justify-center w-full max-w-5xl">
        
        {/* Text Section */}
        <div className="text-center mx-4 flex flex-col justify-center items-center text-white">
          <h2 className="text-4xl font-extrabold mb-4 font-playfair">{props.heading}</h2>
          <p className="text-md opacity-80">{props.text}</p>
        </div>

        {/* Image Section */}
        <img
          src={props.image || home} // Default to home.jpg if no image is passed
          alt="Kashmir Image"
          className="w-[85%] h-[50%] object-cover rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:rotate-2 mx-4"
        />
      </div>
    </div>
  );
}

export default BackgroundTwo;
