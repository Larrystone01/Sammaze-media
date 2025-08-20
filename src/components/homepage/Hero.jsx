import HeroShowCaseImages from "./images";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <motion.section
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
        className="h-[100vsh]"
      >
        <div className="container mx-auto md:px-6 px-4">
          <div className="hero-section md:py-10 py-5">
            <h1 className="hero-text md:text-[60px] text-[30px] text-center leading-none">
              Framing Emotions, One Beautiful{" "}
              <span className="block">Moment at a Time</span>
            </h1>
            <p className="text-center mt-3 md:text-[20px] text-[14px] leading-none md:mb-0 mb-5">
              From quiet glances to joyous celebration, we capture the essence
              of your <span className="md:block">story-frame by frame</span>
            </p>
            <HeroShowCaseImages />
            <p className="text-center mt-12 text-[30px] md:hidden">
              Welcome To Sammaze's World
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
}
