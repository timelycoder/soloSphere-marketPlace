import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import bgImg1 from "../assets/images/carousel1.jpg";
import bgImg2 from "../assets/images/carousel2.jpg";
import bgImg3 from "../assets/images/carousel3.jpg";
import Slide from "./Slide";

export default function Carousel() {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bgImg1}
            text="Get your web Development Project Done in minutes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImg2}
            text="Get your Graphics Design Project Done in minutes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImg3}
            text="Start your Digital Marketing Compaings up running"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
