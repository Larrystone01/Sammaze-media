import { useState } from "react";
import { X, Camera, Videotape } from "lucide-react";

const mediaFiles = [
  { id: 1, src: "/images-videos/img1.jpg", title: "An Image", type: "photo" },
  { id: 2, src: "/images-videos/img2.jpg", title: "An Image", type: "photo" },
  { id: 3, src: "/images-videos/img3.jpg", title: "An Image", type: "photo" },
  { id: 4, src: "/images-videos/img4.jpg", title: "An Image", type: "photo" },
  { id: 5, src: "/images-videos/img5.jpg", title: "An Image", type: "photo" },
  { id: 6, src: "/images-videos/img6.jpg", title: "An Image", type: "photo" },
  { id: 7, src: "/images-videos/img8.jpg", title: "An Image", type: "photo" },
  { id: 8, src: "/images-videos/video1.mp4", title: "A Video", type: "video" },
  { id: 9, src: "/images-videos/video2.mp4", title: "A Video", type: "video" },
  { id: 10, src: "/images-videos/video3.mp4", title: "A Video", type: "video" },
  { id: 11, src: "/images-videos/video4.mp4", title: "A Video", type: "video" },
  { id: 12, src: "/images-videos/video5.mp4", title: "A Video", type: "video" },
  { id: 13, src: "/images-videos/video6.mp4", title: "A Video", type: "video" },
];

export default function PortfolioSection() {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  function isVideo(src) {
    return src.includes(".mp4") || src.includes(".mov") || src.includes(".avi");
  }

  const mediaItems = mediaFiles.map((item) => {
    return {
      id: item.id,
      src: item.src,
      title: item.title,
    };
  });

  // const itemsToShow = mediaFiles.filter((item) => {
  //   if (filter === "photo") {
  //     return item.type === "photo";
  //   } else if (filter === "video") {
  //     return item.type === "video";
  //   }
  // });

  let itemsToShow = mediaFiles;
  if (filter === "photo") {
    itemsToShow = mediaFiles.filter((item) => item.type === "photo");
  } else if (filter === "video") {
    itemsToShow = mediaFiles.filter((item) => item.type === "video");
  }

  return (
    <>
      <section>
        <div className="container mx-auto md:px-6 px-4">
          <div className="sectiom-container text-center">
            <h1 className="text-[40px] text-center font-bold relative">
              My Portfolio
            </h1>
            {/* Filter Buttom */}
            <div className="filter-btn text-[14px] flex gap-3 justify-center mb-5">
              <button
                className={`px-3 py-1 cursor-pointer rounded-[5px] ${
                  filter === "all" ? "bg-orange-400 text-white" : "bg-white"
                }`}
                onClick={() => setFilter("all")}
              >
                All <span className="text-[12px]">({mediaFiles.length})</span>
              </button>
              <button
                className={`px-3 py-1 cursor-pointer flex gap-1 items-center rounded-[5px] ${
                  filter === "photo" ? "bg-orange-400 text-white" : "bg-white"
                }`}
                onClick={() => setFilter("photo")}
              >
                <Camera size={16} />
                Photography{" "}
                <span className="text-[12px]">
                  ({mediaFiles.filter((item) => item.type === "photo").length})
                </span>
              </button>
              <button
                className={`px-3 py-1 cursor-pointer flex gap-1 items-center rounded-[5px] ${
                  filter === "video" ? "bg-orange-400 text-white" : "bg-white"
                }`}
                onClick={() => setFilter("video")}
              >
                <Videotape size={14} />
                Videography{" "}
                <span className="text-[12px]">
                  ({mediaFiles.filter((item) => item.type === "video").length})
                </span>
              </button>
            </div>
            {/* Grid Display */}
            <div className="grid md:grid-cols-3 gap-4">
              {itemsToShow.map((item) => {
                return (
                  <div key={item.id} className="">
                    {item.type === "photo" ? (
                      <div
                        className="relative group overflow-hidden rounded-[15px]  cursor-pointer"
                        onClick={() => handleModal(item)}
                      >
                        <img
                          src={item.src}
                          alt=""
                          className="w-full h-[400px]"
                        />
                        <div className="absolute inset-0 bg-white/50 translate-x-full translate-y-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-1000"></div>
                      </div>
                    ) : (
                      <div className="w-full">
                        <video
                          src={item.src}
                          controls
                          muted
                          title={item.title}
                          className="w-full h-[400px] object-cover rounded-[15px]"
                        ></video>
                        <p>{item.title}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {/* Modal */}
            {selectedItem && (
              <div
                className="fixed inset-0 h-[100vsh] flex flex-col justify-center items-center bg-black/70"
                onClick={closeModal}
              >
                <button
                  className="text-white cursor-pointer ml-[270px] mb-[20px]"
                  onClick={closeModal}
                >
                  <X />
                </button>
                <img
                  src={selectedItem.src}
                  alt=""
                  className="w-[300px] rounded-[15px]"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
