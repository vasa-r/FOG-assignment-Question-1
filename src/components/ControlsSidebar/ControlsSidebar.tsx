import MJ from "../../assets/mj-music.png";
import Shuffle from "../../assets/shuffle.svg";
import Loop from "../../assets/loop.svg";
import Play from "../../assets/play.svg";
import Pause from "../../assets/pause.svg";
import Previous from "../../assets/prev.svg";
import Next from "../../assets/next.svg";
import { useState } from "react";

const ControlsSidebar = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <aside className="w-[20%] bg-custom-dark-gradient p-4 px-6 flex flex-col justify-end">
      <div className="flex flex-col gap-3 shadow-custom bg-[#6B0000] rounded-[15px] p-5">
        <p className="text-[#F6F6F6] font-semibold text-sm text-center">
          Now Playing
        </p>
        <img src={MJ} alt="artist image" />
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold text-[#F6F6F6]">Beat It</h2>
          <p className="text-main font-normal text-[13px]">Michael Jackson</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium text-[#F6F6F6] text-[13px]">2:15</p>
          <hr className="w-[100%] bg-white" />
          <p className="font-medium text-[#F6F6F6] text-[13px]">5:15</p>
        </div>
        {/* controls */}
        <div className="flex items-center justify-between w-full">
          <img
            src={Loop}
            alt="loop song"
            className="cursor-pointer hover:scale-110"
          />
          <img
            src={Previous}
            alt="previous song"
            className="cursor-pointer hover:scale-110"
          />
          <div className="bg-[#480000] rounded-[10px] flex justify-center items-center p-2">
            <img
              src={isPlaying ? Pause : Play}
              alt="play/pause"
              onClick={togglePlay}
              className="transition-all duration-300 transform cursor-pointer size-7 hover:scale-110"
            />
          </div>
          <img
            src={Next}
            alt="next song"
            className="cursor-pointer hover:scale-110"
          />
          <img
            src={Shuffle}
            alt="shuffle song"
            className="cursor-pointer hover:scale-110"
          />
        </div>
      </div>
    </aside>
  );
};

export default ControlsSidebar;
