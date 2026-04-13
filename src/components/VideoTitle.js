import { MORE_INFO_ICON, PLAY_ICON } from "../utils/constants";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg max-w-sm">{overview}</p>
      <div className="my-4 md:m-0">
        <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-lg rounded-lg hover:bg-opacity-80">
          <img src={PLAY_ICON} alt="play" className="inline w-6 h-6 mr-2" />Play

        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg hover:bg-opacity-80">
          <img src={MORE_INFO_ICON} alt="play" className="inline w-6 h-6 mr-2" />More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;