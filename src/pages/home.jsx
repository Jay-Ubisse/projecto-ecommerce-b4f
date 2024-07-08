import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Slider } from "../components/slider/slider";
import { Categories } from "../components/products-category/categories";
import { ImageCard } from "../components/image-card/image-card";

export const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Categories />
      <ImageCard />
      <Footer />
    </>
  );
};
