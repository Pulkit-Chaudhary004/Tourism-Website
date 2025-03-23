import Vedio from './Vedio.mp4'

import './HomeVedio.css';

function HomeVedio() {
  return (
    <>
      {/* Text Section with Professional Font and Color */}
      <div className="flex justify-center my-[4vw] cursor-pointer">
        <h1 className="text-4xl font-extrabold text-gray-900 font-playfair tracking-wide leading-tight">Kashmir: Where Nature Meets Serenity</h1>
      </div>

      {/* Video Section with Professional Gradient and Shadow */}
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 via-transparent to-transparent">
        <video
          src={Vedio}
          autoPlay
          loop
          muted
          className="w-3/4 h-auto rounded-xl shadow-2xl transition-transform transform hover:scale-105"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default HomeVedio;
