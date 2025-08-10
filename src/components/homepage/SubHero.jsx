import ImageGrid from "./ImageGrid";

export default function HeroSubSection() {
  return (
    <>
      <section className="md:my-10">
        <div className="container mx-auto md:px-6 px-4">
          <div className="section-container md:grid md:grid-cols-2">
            <div className="images relative flex justify-center items-center min-h-[400px]">
              <img
                src="/images-videos/img4.jpg"
                alt=""
                className="w-[150px] absolute left-40 rotate-[-15deg] rounded-[8px]"
              />
              <img
                src="/images-videos/img5.jpg"
                alt=""
                className="w-[150px] absolute right-40 rotate-[15deg] rounded-[8px]"
              />
              <img
                src="/images-videos/img6.jpg"
                alt=""
                className="w-[150px] absolute bottom-0 rotate-[-5deg] rounded-[8px]"
              />
            </div>
            <div className="text-section flex flex-col justify-center mt-6 md:mt-0">
              <h1 className="font-bold text-[30px] mb-2 text-center md:text-left leading-none">
                Caputring Stories Through Every Frame
              </h1>
              <p>
                With <span>Sammaze Media Production</span>, we don't just take
                photos - we capture emotions, moments, and memories that last a
                lifetime.
              </p>
              <p>
                From joyful glances to quiet tears, our lens tells your story in
                the most authentic way.
              </p>
              <p>
                Our goal? To preserve the magic of your special day, frame by
                frame
              </p>
              <button className="bg-orange-400 text-white text-[12px] py-1 px-3 rounded-[15px] w-fit my-5 self-center md:self-start">
                Learn More
              </button>
            </div>
          </div>
          <ImageGrid />
          {/* <div className="freeze-time my-5">
            <h1 className="capitalize text-center text-[40px]">
              Freeze time with frames
            </h1>
            <p className="text-center">
              A curated collection of timeless moments - from candid portraits
              to cinematic frames. Every photo and video tell a story and this
              is where it begins
            </p>
            <div className="photo-grid">
              {images.map((img) => {
                return <img src={img.imgUrl} alt="" key={img.id} />;
              })}
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
