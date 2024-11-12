// // src/context/AudioPlayerContext.tsx
// import React, { createContext, useState, useEffect, useContext } from "react";
// import { Howl } from "howler";
// import { Song, songs } from "../utils/constants";

// interface AudioPlayerContextType {
//   currentSong: Song;
//   howlInstance: Howl | null;
//   isPlaying: boolean;
//   isLooping: boolean;
//   isShuffling: boolean;
//   currentTime: number;
//   setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
//   playSong: (song: Song) => void;
//   togglePlayPause: () => void;
//   handleNextSong: () => void;
//   handlePreviousSong: () => void;
//   toggleLoop: () => void;
//   toggleShuffle: () => void;
// }

// const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(
//   undefined
// );

// export const AudioPlayerProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [songsList, setSongsList] = useState<Song[]>(songs);
//   const [currentSong, setCurrentSong] = useState<Song>(songsList[0]);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isLooping, setIsLooping] = useState(false);
//   const [isShuffling, setIsShuffling] = useState(false);
//   const [howlInstance, setHowlInstance] = useState<Howl | null>(null);
//   const [currentTime, setCurrentTime] = useState(0);

//   useEffect(() => {
//     if (howlInstance) {
//       howlInstance.unload();
//     }

//     if (currentSong) {
//       const newHowl = new Howl({
//         src: [currentSong.url],
//         loop: isLooping,
//         onend: () => handleNextSong(),
//         onplay: () => {
//           setInterval(() => {
//             if (howlInstance) {
//               setCurrentTime(howlInstance.seek());
//             }
//           }, 1000); // Update current time every second
//         },
//       });
//       setHowlInstance(newHowl);
//       if (isPlaying) newHowl.play();
//     }

//     // Cleanup on component unmount or song change
//     return () => {
//       if (howlInstance) howlInstance.unload();
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [currentSong, isLooping, isPlaying]);

//   const playSong = (song: Song) => {
//     setCurrentSong(song);
//     setIsPlaying(true);
//   };

//   const togglePlayPause = () => {
//     if (isPlaying && howlInstance) howlInstance.pause();
//     else if (!isPlaying && howlInstance) howlInstance.play();
//     setIsPlaying(!isPlaying);
//   };

//   const handleNextSong = () => {
//     const currentIndex = songsList.findIndex((song) => song === currentSong);
//     const nextIndex = (currentIndex + 1) % songsList.length;
//     setCurrentSong(songsList[nextIndex]);
//   };

//   const handlePreviousSong = () => {
//     const currentIndex = songs.findIndex((song) => song === currentSong);
//     const previousIndex =
//       (currentIndex - 1 + songsList.length) % songsList.length;
//     setCurrentSong(songsList[previousIndex]);
//   };

//   const toggleLoop = () => {
//     setIsLooping(!isLooping);
//   };

//   const toggleShuffle = () => {
//     setIsShuffling(!isShuffling);
//   };

//   return (
//     <AudioPlayerContext.Provider
//       value={{
//         currentSong,
//         howlInstance,
//         isPlaying,
//         isLooping,
//         isShuffling,
//         currentTime,
//         setCurrentTime,
//         playSong,
//         togglePlayPause,
//         handleNextSong,
//         handlePreviousSong,
//         toggleLoop,
//         toggleShuffle,
//       }}
//     >
//       {children}
//     </AudioPlayerContext.Provider>
//   );
// };

// // eslint-disable-next-line react-refresh/only-export-components
// export const useAudioPlayer = () => {
//   const context = useContext(AudioPlayerContext);
//   if (!context) {
//     throw new Error(
//       "useAudioPlayer must be used within an AudioPlayerProvider"
//     );
//   }
//   return context;
// };

import React, { createContext, useState, useEffect, useContext } from "react";
import { Howl } from "howler";
import { Song, songs } from "../utils/constants"; // Assuming Song type is already defined

interface AudioPlayerContextType {
  currentSong: Song;
  howlInstance: Howl | null;
  isPlaying: boolean;
  isLooping: boolean;
  isShuffling: boolean;
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  songsList: Song[]; // Dynamically stored songs list
  setSongsList: React.Dispatch<React.SetStateAction<Song[]>>; // Function to update song list
  playSong: (song: Song) => void;
  togglePlayPause: () => void;
  handleNextSong: () => void;
  handlePreviousSong: () => void;
  toggleLoop: () => void;
  toggleShuffle: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(
  undefined
);

export const AudioPlayerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [songsList, setSongsList] = useState<Song[]>(songs); // Store songs as state
  const [currentSong, setCurrentSong] = useState<Song>(songsList[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [howlInstance, setHowlInstance] = useState<Howl | null>(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setSongsList([...songs]); // Assume songs is imported from utils/constants

    if (howlInstance) {
      howlInstance.unload();
    }

    if (currentSong) {
      const newHowl = new Howl({
        src: [currentSong.url],
        loop: isLooping,
        onend: () => handleNextSong(),
        onplay: () => {
          setInterval(() => {
            if (howlInstance) {
              setCurrentTime(howlInstance.seek());
            }
          }, 1000);
        },
      });
      setHowlInstance(newHowl);
      if (isPlaying) newHowl.play();
    }

    return () => {
      if (howlInstance) howlInstance.unload();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong, isLooping, isPlaying]);

  const playSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (isPlaying && howlInstance) howlInstance.pause();
    else if (!isPlaying && howlInstance) howlInstance.play();
    setIsPlaying(!isPlaying);
  };

  const handleNextSong = () => {
    const currentIndex = songsList.findIndex((song) => song === currentSong);
    const nextIndex = (currentIndex + 1) % songsList.length;
    setCurrentSong(songsList[nextIndex]);
  };

  const handlePreviousSong = () => {
    const currentIndex = songsList.findIndex((song) => song === currentSong);
    const previousIndex =
      (currentIndex - 1 + songsList.length) % songsList.length;
    setCurrentSong(songsList[previousIndex]);
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
  };

  const toggleShuffle = () => {
    setIsShuffling(!isShuffling);
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        currentSong,
        howlInstance,
        isPlaying,
        isLooping,
        isShuffling,
        currentTime,
        setCurrentTime,
        songsList,
        setSongsList,
        playSong,
        togglePlayPause,
        handleNextSong,
        handlePreviousSong,
        toggleLoop,
        toggleShuffle,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error(
      "useAudioPlayer must be used within an AudioPlayerProvider"
    );
  }
  return context;
};
