import Home from "../assets/home.svg";
import Trend from "../assets/trends.svg";
import Lib from "../assets/music.svg";
import Discover from "../assets/discover.svg";

import Settings from "../assets/settings.svg";
import Logout from "../assets/logout.svg";

export const songs = [
  {
    id: 1,
    title: "Billie Jean",
    artist: "Michael Jackson",
    url: "/audio/billie_jean.mp3",
    duration: 273, // 4 minutes and 53 seconds
    radio: "1.040.811.084",
    album: "Thriller 25",
    timeStamp: 4.53,
  },
  {
    id: 2,
    title: "Beat It",
    artist: "Michael Jackson",
    url: "/audio/beat_it.mp3",
    duration: 258, // 4 minutes and 18 seconds
    radio: "643.786.045",
    album: "Thriller 25",
    timeStamp: 4.18,
  },
  {
    id: 3,
    title: "Smooth Criminal",
    artist: "Michael Jackson",
    url: "/audio/smooth_criminal.mp3",
    duration: 256, // 4 minutes and 16 seconds
    radio: "407.234.004",
    album: "Thriller 25",
    timeStamp: 4.16,
  },
  {
    id: 4,
    title: "Don't Stop 'Til You Get Enough",
    artist: "Michael Jackson",
    url: "/audio/dont_stop.mp3",
    duration: 351, // 5 minutes and 51 seconds
    radio: "316.391.952",
    album: "Bad 25th Anniversary",
    timeStamp: 5.51,
  },
  {
    id: 5,
    title: "Rock with You - Single Version",
    artist: "Michael Jackson",
    url: "/audio/rock_with_you.mp3",
    duration: 203, // 3 minutes and 23 seconds
    radio: "268.187.218",
    album: "Off The Wall",
    timeStamp: 3.23,
  },
];

export interface Song {
  id: number;
  title: string;
  artist: string;
  url: string;
  duration: number; // in seconds
  radio: string;
  album: string;
  timeStamp: number; // in minutes
}

export const menu: GeneralItem[] = [
  {
    id: "home-id",
    image: Home,
    label: "Home",
    alt: "Home Icon",
  },
  {
    id: "trend-id",
    image: Trend,
    label: "Trends",
    alt: "Trends Icon",
  },
  {
    id: "lib-id",
    image: Lib,
    label: "Library",
    alt: "Library Icon",
  },
  {
    id: "discover-id",
    image: Discover,
    label: "Discover",
    alt: "Discover Icon",
  },
];

export const general: GeneralItem[] = [
  {
    id: "settings-id",
    image: Settings,
    label: "Settings",
    alt: "Settings Icon",
  },
  {
    id: "logout-id",
    image: Logout,
    label: "Log Out",
    alt: "Log Out Icon",
  },
];

export interface GeneralItem {
  id: string;
  image: string;
  label: string;
  alt: string;
}
