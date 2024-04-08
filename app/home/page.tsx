'use client'
import { useSelector } from "react-redux";
import { GlobalComponents } from "../components/global";
import { HomeComponents } from "../components/home";
import { State } from "../controller/reducers/root.reducer";

export default function Home() {
  const { products } = useSelector((state:State) => state.api)
  return (
    <div className="home">
      <GlobalComponents.CarouselComponents.Carousel />
      <div className="container">
        <GlobalComponents.Title title="Explore Elegance" className="green-purple" />
        <HomeComponents.Categories />
        <GlobalComponents.Title title="Products" className="purple-green" />
        <div className="home-product md:flex md:justify-between md:items-start md:flex-wrap">
          {products.map((p)=> <GlobalComponents.Product product={p} />)}
        </div>
      </div>
    </div>
  );
}
