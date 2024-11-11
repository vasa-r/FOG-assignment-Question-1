import React from "react";
import MainNav from "./MainNav";
import ArtistCard from "./ArtistCard";
import MusicList from "./MusicList";

const MainBody = () => {
  return (
    <main className="w-[55%] bg-custom-gradient">
      <MainNav />
      <ArtistCard />
      <MusicList />
    </main>
  );
};

export default MainBody;
