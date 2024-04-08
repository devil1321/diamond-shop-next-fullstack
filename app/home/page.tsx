import Image from "next/image";
import { GlobalComponents } from "../components/global";
import { HomeComponents } from "../components/home";

export default function Home() {
  return (
    <div className="home">
      <GlobalComponents.CarouselComponents.Carousel />
      <div className="container">
        <GlobalComponents.Title title="Explore Elegance" className="green-purple" />
        <HomeComponents.Categories />
      </div>
    </div>
  );
}
