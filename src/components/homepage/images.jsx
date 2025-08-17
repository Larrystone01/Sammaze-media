import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "../context/GlobalContext";

export default function HeroShowCaseImages() {
  const { images } = useGlobalContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const Interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(Interval);
  }, [isPlaying, currentIndex]);
  // The object in view, ("currentImage" is the entire object while the image itself is "currentImage.imgUrl")
  const currentImage = images[currentIndex];

  const togglePauseAndPlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Images on smaller and medium screen */}
      <motion.div
        className="flex justify-center lg:hidden md:my-9"
        onClick={togglePauseAndPlay}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <img
          src={currentImage.imgUrl}
          alt=""
          className="rounded-[15px] w-[300px]"
        />
      </motion.div>
      <div className="flex justify-center mt-5 gap-2 lg:hidden">
        {images.map((image, index) => {
          return (
            <button
              key={image.id}
              onClick={() => {
                setCurrentIndex(index);
              }}
              className={`${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              } w-3 h-3 rounded-full`}
            ></button>
          );
        })}
      </div>
      {/* Images on larger screen */}
      <div className="image-collage hidden lg:flex items-center gap-4 overflow-hidden">
        {images.map((image) => {
          return (
            <img
              src={image.imgUrl}
              alt=""
              className={`${image.sizes} rounded-[15px]`}
              key={image.id}
            />
          );
        })}
      </div>
    </>
  );
}
