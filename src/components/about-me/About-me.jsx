import { Camera, Film, Clapperboard, Focus } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutMe() {
  const fullText = `My journey into visual storytelling began not with a career
                  plan, but with a simple curiosity: how do you hold onto a
                  moment? I discovered my answer four years ago with a camera in
                  hand, learning to freeze the fleeting emotions, vibrant
                  colors, and subtle details of life one still frame at a time.
                  Photography became my foundation, teaching me the power of
                  light and composition to not just document, but to truly
                  preserve a feeling. Over time, that passion evolved. I
                  realized that some stories demanded movement and sound,
                  leading me to delve into the dynamic world of videography. In
                  the span of four years, I've honed my skills in both mediums,
                  blending my photographer's eye for detail with a
                  videographer's sense of rhythm and flow. Today, I'm a visual
                  creative dedicated to producing compelling content that
                  resonates, whether it's a powerful photograph or an engaging
                  film.`;
  return (
    <>
      <section>
        <div className="container mx-auto md:px-6 px-4">
          <div className="about-me md:flex lg:grid md:grid-cols-2 md:gap-9 lg:gap-0 mt-8 md:relative">
            <div className="details md:flex-1/2">
              <div className="upper-details md:absolute lg:static md:top-0">
                <h1 className="font-bold md:text-[20px] uppercase text-center">
                  Hello, I'm Udomah Samuel Ayomide (Sammaze)
                </h1>
                <p className="font-bold text-center">
                  Visual Storyteller | Photographer | Videographer
                </p>
                <p className="text-center">
                  Welcome to my world of visual storytelling. I'm passionate
                  about capturing life's most precious moments and transforming
                  them into timeless memories that speak to the heart.
                </p>
                <div className="button flex gap-2 justify-center mt-4">
                  <button className="bg-orange-400 px-3 py-1 rounded-[6px] text-white text-[14px]">
                    Get in Touch
                  </button>
                  <button className="bg-orange-400 px-3 py-1 rounded-[6px] text-white text-[14px]">
                    View My Work
                  </button>
                </div>
              </div>
              <div className="my-journey md:mt-40 lg:my-5">
                <h1 className="text-[20px] font-bold text-center mb-5 pb-1 relative after:content-[''] after:absolute after:bottom-0 after:bg-orange-400 after:w-10 after:h-0.5 after:left-[46%]">
                  My Journey
                </h1>
                <p className="text-center md:text-justify">
                  My journey into visual storytelling began not with a career
                  plan, but with a simple curiosity: how do you hold onto a
                  moment? I discovered my answer four years ago with a camera in
                  hand, learning to freeze the fleeting emotions, vibrant
                  colors, and subtle details of life one still frame at a time.
                  Photography became my foundation, teaching me the power of
                  light and composition to not just document, but to truly
                  preserve a feeling. Over time, that passion evolved. I
                  realized that some stories demanded movement and sound,
                  leading me to delve into the dynamic world of videography. In
                  the span of four years, I've honed my skills in both mediums,
                  blending my photographer's eye for detail with a
                  videographer's sense of rhythm and flow. Today, I'm a visual
                  creative dedicated to producing compelling content that
                  resonates, whether it's a powerful photograph or an engaging
                  film.
                </p>
              </div>
            </div>
            <div className="imgg lg:h-[500px] md:h-full md:flex-1/2 self-end">
              <img
                src="/images-videos/img1.jpg"
                alt=""
                className="h-full justify-self-end rounded-[15px]"
              />
            </div>
          </div>
          <h1 className="text-[20px] font-bold text-center mt-5 mb-5 pb-1 relative after:content-[''] after:absolute after:bottom-0 after:bg-orange-400 after:w-10 after:h-0.5 md:after:left-[48%] after:left-[44%]">
            My Approach
          </h1>
          <p className="font-bold">Photography Philosophy</p>
          <ul className="list-disc">
            <li className="">
              <span className="font-bold">
                Authentic moments over posed perfection
              </span>{" "}
              – I seek out genuine emotions and spontaneous interactions
            </li>
            <li>
              <span className="font-bold">Natural light enthusiast</span> – I
              love working with golden hour and soft, natural lighting
            </li>
            <li>
              <span className="font-bold">Details matter</span> – From the way
              light falls on a subject's face to the subtle gestures that reveal
              character
            </li>
          </ul>
          <p className="font-bold mt-5">Videography Vision</p>
          <ul className="list-disc">
            <li>
              <span className="font-bold">Cinematic storytelling</span> – Every
              video should feel like a beautiful short film
            </li>
            <li>
              <span className="font-bold">Audio excellence</span> – Great
              visuals deserve equally compelling sound
            </li>
            <li>
              <span className="font-bold">Emotional resonance</span> – Creating
              content that moves people and stays with them
            </li>
          </ul>
          <h1 className="text-[20px] font-bold text-center mb-5 pb-1 relative after:content-[''] after:absolute after:bottom-0 after:bg-orange-400 after:w-10 after:h-0.5 md:after:left-[48%] after:left-[45%] mt-5">
            My Style
          </h1>
          <p className="mb-3">
            My work is characterized by warm, natural tones that feel timeless
            rather than trendy. I blend candid authenticity with carefully
            crafted compositions, always seeking the perfect balance between
            artistic vision and genuine emotion.
          </p>
          <p>Warm, natural tones that feel timeless</p>
          <p>Candid authenticity mixed with careful composition</p>
          <p>Attention to light and shadow for depth</p>
          <p>Emotional depth that connects viewers</p>
          <h1 className="text-[20px] font-bold text-center mb-5 pb-1 relative after:content-[''] after:absolute after:bottom-0 after:bg-orange-400 after:w-10 after:h-0.5 md:after:left-[48%] after:left-[45%] mt-5">
            Technical Expertise
          </h1>
          <div className="other-sub-section grid md:grid-cols-4 gap-2">
            <div className="expertise bg-white px-3 py-2 rounded-[10px]">
              <h2 className="font-bold flex items-center gap-2">
                Camera Systems <Camera size={16} />
              </h2>
              <p className="text-[]">Sony and Nikon series</p>
            </div>
            <div className="lenses bg-white px-3 py-2 rounded-[10px]">
              <h2 className="font-bold flex items-center gap-2">
                Lenses <Focus size={16} />
              </h2>
              Prime and zoom lenses
            </div>
            <div className="video-equipment bg-white px-3 py-2 rounded-[10px]">
              <h2 className="font-bold flex items-center gap-2">
                Video Equipment <Clapperboard size={16} />
              </h2>
              <p> 4K recording, professional audio, stabilization</p>
            </div>
            <div className="post-production bg-white px-3 py-2 rounded-[10px]">
              <h2 className="font-bold flex items-center gap-2">
                Post-Production <Film size={16} />
              </h2>
              <p>Adobe Creative Cloud mastery and After effects </p>
            </div>
          </div>
          <div className="prefooter bg-orange-500 px-4 py-3 my-5 rounded-[10px] text-white">
            <h1 className="text-[25px] font-bold text-center text-white">
              Let's Create Together
            </h1>
            <p className="">
              Every project begins with understanding your vision. Whether
              you're planning a wedding, need corporate headshots, want to
              document a special event, or have a creative project in mind, I'm
              here to help bring your story to life.
            </p>
            <kbd>-Sammaze</kbd>
            <div className="button flex gap-2 justify-center mt-4">
              <Link
                to={"/contact"}
                className="bg-orange-400 px-3 py-1 rounded-[6px] text-white text-[14px]"
              >
                Get in Touch
              </Link>
              <Link
                to={"/portfolio"}
                className="bg-orange-400 px-3 py-1 rounded-[6px] text-white text-[14px]"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
