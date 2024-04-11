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
        <GlobalComponents.Title title="Explore Elegance" className="green-purple" start="-=350px" end="-=350px" />
        <HomeComponents.Categories />
        <GlobalComponents.Title title="Products" className="purple-green" start="-=350px" end="-=350px" />
        <div className="home-product md:flex md:justify-between md:items-start md:flex-wrap">
          {products.map((p)=> <GlobalComponents.Product product={p} />)}
        </div>
        <GlobalComponents.Title title="Events" className="green-purple" start="-=800px" end="-=800px" />
      </div>
      <div className="container-fluid">
        <HomeComponents.EventsComponents.Events />
      </div>
      <div className="container">
        <GlobalComponents.Title title="About Our Company" className="green-purple" start="-=350px" end="-=350px" />
        <GlobalComponents.Feature 
          img="/assets/about-1.png"
          isLeft={true}
          title="Harmony"
          paragraph_1="In the tapestry of life, harmony is the gentle melody that soothes the soul and brings order to chaos. It is the seamless blending of disparate elements into a symphony of beauty and grace. From the soft hues of dawn breaking over the horizon to the tranquil flow of a meandering river, harmony surrounds us, offering a sense of peace and tranquility in a world often fraught with discord."
          paragraph_2=" In art and design, embracing harmony allows us to create compositions that resonate with balance and unity, inviting viewers to immerse themselves in a world of serenity and wonder."
        />
        <GlobalComponents.Feature 
          img="/assets/about-2.png"
          isLeft={false}
          title="Contrast"
          paragraph_1="Contrast is the bold stroke that adds drama and depth to the canvas of existence. It is the sharp juxtaposition of light and dark, of rough and smooth, that commands attention and ignites the imagination."
          paragraph_2="From the stark silhouette of a lone tree against the fiery hues of a sunset to the striking clash of colors in a modern masterpiece, contrast infuses life with energy and excitement, challenging us to see the world in new and unexpected ways. In the realm of creativity, harnessing contrast allows us to create compositions that dazzle the senses and provoke thought, leaving a lasting impression on those who behold them."
        />
      </div>
    </div>
  );
}
