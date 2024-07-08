import { useState, useEffect } from "react";
import { Circle, ArrowLeft, ArrowRight } from "@phosphor-icons/react";

export const Slider = () => {
  const slides = [
    {
      src: "./assets/slides/slide-1.jpg",
      text: "Descubra as últimas tendências e renove seu guarda-roupa com estilo!",
    },
    {
      src: "./assets/slides/slide-2.jpg",
      text: "Está na hora de renovar seu guarda-roupa com estilo e economia! ",
    },
    {
      src: "./assets/slides/slide-3.jpg",
      text: "É hora de renovar o guarda-roupa dos pequenos com peças lindas e confortáveis!",
    },
    {
      src: "./assets/slides/slide-4.jpg",
      text: "Chegou a hora de renovar seu estoque de calçados com estilo e conforto!",
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-12 px-2 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative"
      >
        <div className="absolute left-0 top-0 bottom-0 bg-sky-blue-200 bg-opacity-50 text-cream-100 font-bold text-lg p-4 w-[300px] text-center flex items-center justify-center">
          {slides[currentIndex].text}
        </div>
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-sky-blue-200 text-cream-100 cursor-pointer">
        <ArrowLeft onClick={prevSlide} size={32} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-sky-blue-200 text-cream-100 cursor-pointer">
        <ArrowRight onClick={nextSlide} size={32} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              currentIndex === slideIndex ? "text-blue-600" : "text-gray-400"
            }`}
          >
            <Circle size={16} />
          </div>
        ))}
      </div>
    </div>
  );
};
