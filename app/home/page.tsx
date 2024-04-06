import Image from "next/image";
import { GlobalComponents } from "../components/global";


export default function Home() {
  return (
    <div className="home">
      <GlobalComponents.CarouselComponents.Carousel />
    </div>
  );
}
