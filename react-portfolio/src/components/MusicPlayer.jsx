import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function MusicPlayer({
  track = {
    title: "Do I Wanna Know?",
    artist: "Arctic Monkeys",
    cover: "/images/musicCover/ArcticMonkeysLogo.jpeg",
    src: "/music/DoIWannaKnow.mp3",
  },
}) {
  const audioRef = useRef(null);
  const [autoplayFailed, setAutoplayFailed] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = true; // allow autoplay
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setTimeout(() => {
              audio.muted = false; // unmute after playback begins
            }, 300);
          })
          .catch(() => {
            setAutoplayFailed(true); // autoplay was blocked
          });
      }
    }
  }, []);

  const handleManualPlay = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      audio.play();
      setAutoplayFailed(false);
    }
  };

  return (
    <motion.div
      className="fixed top-4 right-4 flex items-center gap-4 bg-[#121212] border border-neutral-700 rounded-2xl shadow-lg px-4 py-3 text-white backdrop-blur-md w-[320px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Album Cover */}
      <img
        src={track.cover}
        alt={track.title}
        className="w-16 h-16 rounded-md object-cover shadow-md"
      />

      {/* Track Info */}
      <div className="flex flex-col text-left">
        <span className="font-semibold text-sm">{track.title}</span>
        <span className="text-xs text-gray-400">{track.artist}</span>
        {autoplayFailed && (
          <button
            onClick={handleManualPlay}
            className="mt-2 px-3 py-1 bg-gray-600 rounded-md text-xs hover:bg-white hover:text-black transition" style={{ fontFamily: 'Helvetica' }}
          >
            Let's Vibe ✨
          </button>
        )}
      </div>

      {/* Hidden Audio Player */}
      <audio ref={audioRef} src={track.src} preload="auto" loop />
    </motion.div>
  );
}
