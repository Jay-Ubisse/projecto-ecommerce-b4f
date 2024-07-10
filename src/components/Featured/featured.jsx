import { useState } from "react";
import Slider from "react-slick";
import { Minus } from "@phosphor-icons/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Featured = () => {
  const [showAll, setShowAll] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const products = [
    {
      image:
        "https://www.annlouisebridal.com/wp-content/uploads/2021/09/Badgley_Mischka_19_Soc_Christy_Fro_Web.jpeg",
      name: "Vestido branco de renda",
      price: "20.000,00 MZN",
    },
    {
      image:
        "https://miamifashionspotlight.org/wp-content/uploads/2016/05/ph.Geometria385-001.jpg",
      name: "Vestido preto de gala",
      price: "22.000,00 MZN",
    },

    {
      image: "https://pbs.twimg.com/media/E7ngSj8WYAASpQZ.jpg",
      name: "Terno",
      price: "15.000,00 MZN",
    },
    {
      image:
        "https://www.soqueriaterum.com.br/wp-content/uploads/2018/08/1000.jpeg",
      name: "Vestido de Festa branco",
      price: "2.000,00 MZN",
    },
    {
      image:
        "https://i.pinimg.com/originals/38/76/c8/3876c849a4588a36f61d9014f0d86fd5.jpg",
      name: "Calções",
      price: "1.000,00 MZN",
    },
    {
      image:
        "https://i.pinimg.com/originals/38/76/c8/3876c849a4588a36f61d9014f0d86fd5.jpg",
      name: "Calções",
      price: "1.000,00 MZN",
    },
    {
      image:
        "https://th.bing.com/th/id/R.a7a1c83a28a96b485cc9626fd72bd2f4?rik=jTnSQO4R9s7YVA&pid=ImgRaw&r=0",
      name: "Calções",
      price: "1.000,00 MZN",
    },
    {
      image:
        "uhttps://th.bing.com/th/id/R.8f37021144d7271c64e31d2f10293835?rik=%2b8XAe1PzUL0o%2bQ&pid=ImgRaw&r=0",
      name: "Conjunto para praia",
      price: "1.800,00 MZN",
    },
  ];

  return (
    <>
      <div className="bg-cream-200">
        <h1 className="font-bold text-center text-2xl pt-4 text-sky-blue-200">
          PRODUTOS DE DESTAQUE
        </h1>
        <p>
          <Minus size={32} className="m-auto text-sky-blue-200" />
        </p>
        <p className="text-center pb-4 font-light">
          Confira as mais recentes tendências em todas as lojas de Moçambique!
        </p>

        <div className="gap-4 py-4 max-w-[1200px] m-auto hover:font-bold hover:text-orange">
          <Slider {...settings}>
            {showAll
              ? products.map((product, index) => (
                  <div key={index} className="rounded-2xl px-4 h-110 w-100">
                    <img
                      className="h-90 w-full object cover rounded-2xl"
                      src={product.image}
                      alt=""
                    />
                    <p className="text-center mt-2">{product.name}</p>
                    <p className="text-center pb-2 font-bold">
                      {product.price}
                    </p>
                  </div>
                ))
              : products.slice(0, 3).map((product, index) => (
                  <div key={index} className="rounded-2xl px-4 h-110 w-100">
                    <img
                      className="h-90 w-full object cover rounded-2xl "
                      src={product.image}
                      alt=""
                    />
                    <p className="text-center mt-2">{product.name}</p>
                    <p className="text-center pb-2 font-bold">
                      {product.price}
                    </p>
                  </div>
                ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} block fill-sky-blue-200 top-[50%]`}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} block fill-sky-blue-200 top-[50%]`}
      onClick={onClick}
    />
  );
};
