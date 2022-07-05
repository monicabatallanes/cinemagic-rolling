import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MoviesSlider from "../../components/MoviesSlider/MoviesSlider";
import "./CarouselSlider.css"

const CarouselSlider = ({pelis, genero}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  return ( 
    <div>
      <h2 className="titulo-slider text-center m-2 text-white">{genero}</h2>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true}
        infinite={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel slider-image-item w-100 mx-2"
        slidesToSlide={1}
        // centerMode={true}
      >
        {
          pelis.map(peli => <MoviesSlider peli={peli} key={peli._id} id={peli._id} /> )
        }
      </Carousel>
    </div>
  );
}

export default CarouselSlider;