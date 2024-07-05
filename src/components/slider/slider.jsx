import { useState } from "react";
import { Circle, ArrowLeft, ArrowRight } from "@phosphor-icons/react";

export const Slider = () => {
  const slides = [
    {
      url: "https://th.bing.com/th/id/R.3583678df9a2c04a778a1ddb33880795?rik=uUYcLxmfgtLH9Q&pid=ImgRaw&r=0",
    },
    {
      url: "https://th.bing.com/th/id/R.d28c579c9d7b1e34a694c91813a23df9?rik=bKEImCeLgYyacg&pid=ImgRaw&r=0",
    },
    {
      url: "https://storage.googleapis.com/eu.artifacts.grp-serv-digi-prod-pepafr-twp.appspot.com/pep-africa/uploads/assets/yhpe0763-wk-39-paid-mediababy-basics-desktop-ad-1300x500-114452d0.jpg",
    },

    {
      url: "https://th.bing.com/th/id/R.44fa5e8764e9ad572c87989694bb8a5f?rik=BwIx2HOh%2b%2bTVpg&pid=ImgRaw&r=0",
    },
    {
      url: "https://th.bing.com/th/id/R.1582be07b7b7830f1c3c1b5d2177a4a6?rik=IN2%2bozizzpFkMw&pid=ImgRaw&r=0",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-12 px-2 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-sky-blue-200 text-white cursor-pointer">
        <ArrowLeft onClick={prevSlide} size={32} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-sky-blue-200 text-white cursor-pointer">
        <ArrowRight onClick={nextSlide} size={32} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <Circle size={16} />
          </div>
        ))}
      </div>
    </div>
  );
};
