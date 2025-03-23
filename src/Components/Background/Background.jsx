import './Background.css'

function Background(props) {
  return (
    <>
    <div className="my-[4vw] flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all ease-in-out">
      
      {/* Image */}
      <img
        src={props.image}
        alt="kashmir image"
        className="w-[40%] h-[50%] mx-[10vw] object-cover rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
      />
      
      {/* Text Section */}
      <div className="text-center my-[2vw] text-white">
        <h2 className="text-3xl font-extrabold mb-4 font-playfair">{props.heading}</h2>
        <p className="text-md opacity-80 leading-relaxed font-roboto">{props.text}</p>
      </div>
    </div>
    </>
  );
}

export default Background;
