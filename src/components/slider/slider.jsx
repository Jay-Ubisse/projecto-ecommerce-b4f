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

  const [currentSlide, setcurrentSlide] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setcurrentSlide(newSlide);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newSlide = isLastSlide ? 0 : currentSlide + 1;
    setcurrentSlide(newSlide);
  };

  const goToSlide = (slideIndex) => {
    setcurrentSlide(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="w-screen h-[720px] m-auto mb-12 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentSlide].src})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <div className="absolute left-0 top-0 bottom-0 bg-sky-blue-200 bg-opacity-50 text-cream-100 font-bold text-lg p-4 w-[300px] text-center flex items-center justify-center">
          {slides[currentSlide].text}
        </div>
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[80px] text-2xl rounded-full p-2 bg-sky-blue-200 text-cream-100 cursor-pointer">
        <ArrowLeft onClick={prevSlide} size={32} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-sky-blue-200 text-cream-100 cursor-pointer">
        <ArrowRight onClick={nextSlide} size={32} />
      </div>
      <div className="flex top-4 justify-center py-4">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              currentSlide === slideIndex
                ? "text-sky-blue-200"
                : "text-sky-blue-100"
            }`}
          >
            <Circle size={16} />
          </div>
        ))}
      </div>
    </div>
  );
};
