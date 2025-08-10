import { useGlobalContext } from "../context/GlobalContext";

export default function ImageGrid() {
  const { images } = useGlobalContext();
  const firstRow = images.slice(0, 3);
  const secondRow = images.slice(3, 7);
  return (
    <>
      <div className="freeze-time my-5">
        <h1 className="capitalize text-center text-[40px] md:leading-normal leading-none">
          Freeze time with frames
        </h1>
        <p className="text-center py-3">
          A curated collection of timeless moments - from candid portraits to
          cinematic frames. Every photo and video tell a story and this is where
          it begins
        </p>
        <div className="photo-grid flex flex-col gap-2">
          <div className="first-row-grid md:grid md:grid-cols-3 md:gap-2 flex flex-col gap-4">
            {firstRow.map((img) => {
              return (
                <img
                  src={img.imgUrl}
                  alt=""
                  className="w-full h-[300px] rounded-[15px]"
                  key={img.id}
                />
              );
            })}
          </div>
          <div className="second-row-grid hidden md:grid md:grid-cols-4 gap-2">
            {secondRow.map((img) => {
              return (
                <img
                  src={img.imgUrl}
                  alt=""
                  key={img.id}
                  className="w-full h-[300px] rounded-[15px]"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
