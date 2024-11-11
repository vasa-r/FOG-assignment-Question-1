import { general, menu } from "../../utils/constants";
import SideBarCard from "./SideBarCard";
import AppLogo from "/logo.png";

const SideBar = () => {
  return (
    <div className="w-1/4 h-full bg-sidebar pt-6 px-8 flex flex-col justify-between">
      <div className="flex gap-5">
        <img src={AppLogo} alt="logo" className="w-11 h-14" />
        <h1 className="text-4xl leading-[54px]">
          <span className="text-[#FF5656] font-semibold">Dream</span>
          <span className="text-white font-medium">Music</span>
        </h1>
      </div>
      <div className="flex flex-col justify-between h-full my-12">
        <SideBarCard title="MENU" items={menu} />
        <SideBarCard title="GENERAL" items={general} />
      </div>
    </div>
  );
};

export default SideBar;
