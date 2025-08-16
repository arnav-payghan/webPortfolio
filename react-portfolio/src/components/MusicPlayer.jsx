import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
} from "react-icons/fa";

export default function MusicPlayer() {
  const playlist = [
    {
      title: "blue",
      artist: "yung kai",
      cover: "/images/musicCover/blueCover.jpeg",
      src: "/music/blueYungKai.mp3",
    },
    {
      title: "505",
      artist: "Arctic Monkeys",
      cover: "/images/musicCover/505.jpeg",
      src: "/music/505.mp3",
    },
    {
      title: "Kill Bill",
      artist: "SZA",
      cover: "/images/musicCover/KillBill-SZA.jpeg",
      src: "/music/KillBill-SZA.mp3",
    },
    {
      title: "Eastside",
      artist: "benny blanco, Halsey, Khalid",
      cover: "/images/musicCover/Eastside.jpeg",
      src: "/music/Eastside.mp3",
    },
    {
      title: "1 AM",
      artist: "Civ",
      cover: "/images/musicCover/1AM.jpeg",
      src: "/music/1AMCiv.mp3",
    },
  ];

  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayFailed, setAutoplayFailed] = useState(false);
  const [IsVisible, setIsVisible] = useState(false);

  const currentTrack = playlist[currentIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.2;
    audio.muted = true;
    audio.src = currentTrack.src;

    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setTimeout(() => {
            audio.muted = false;
            setIsPlaying(true);
          }, 300);
        })
        .catch(() => {
          setAutoplayFailed(true);
        });
    }

    return () => {
      audio.pause();
      setIsPlaying(false);
    };
  }, [currentIndex]);

  const handleManualPlay = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      audio.play();
      setIsPlaying(true);
      setAutoplayFailed(false);
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const playNext = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  };

  const playPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? playlist.length - 1 : prev - 1
    );
  };
  
  {/* Made it hidden for mobile => hidden sm:flex */}
  return (
    <motion.div
      className="fixed top-4 z-500000 right-4 flex items-center gap-4 bg-[#121212]/10 border border-neutral-700 rounded-2xl shadow-lg px-4 py-3 text-white backdrop-blur-md w-[340px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Album Cover */}
      <img
        src={currentTrack.cover}
        alt={currentTrack.title}
        className="w-16 h-16 rounded-md object-cover shadow-md border border-white/30"
      />

      {/* Info + Controls */}
      <div className="flex flex-col text-left flex-grow">
        <span className="font-semibold text-sm">{currentTrack.title}</span>
        <span className="text-xs text-gray-400">{currentTrack.artist}</span>

        <div className={`controls flex items-center gap-2 mt-2 ${IsVisible ? "" : "hidden"}`}>
          <button onClick={playPrev} className="flex transition-transform duration-200 hover:scale-120">
            <FaStepBackward />
          </button>
          <button onClick={togglePlay} className="flex transition-transform duration-200 hover:scale-120">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={playNext} className="flex transition-transform duration-200 hover:scale-120">
            <FaStepForward />
          </button>
        </div>

        {autoplayFailed && (
          <button
            onClick={() => { handleManualPlay(); setIsVisible(!IsVisible); }}
            className="mt-2 px-3 py-1 bg-gray-600 rounded-md text-xs hover:bg-white hover:text-black transition"
            style={{ fontFamily: "Helvetica" }}
          >
            Let's Vibe ✨
          </button>
        )}
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} preload="auto" loop />
    </motion.div>
  );
}
