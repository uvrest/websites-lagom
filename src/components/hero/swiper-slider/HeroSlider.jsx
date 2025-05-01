import { useTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HeroSlide1 from "./slides/HeroSlide1";
import HeroSlide2 from "./slides/HeroSlide2";

const HeroSlider = () => {

    const theme = useTheme();

    return (
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            centeredSlides={true}
            navigation={true}
            loop={false}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            style={{
                width: "100%",
                height: "100%",
                "--swiper-navigation-color": theme.palette.primary.main,
                "--swiper-pagination-color": theme.palette.primary.main,
                "--swiper-pagination-bottom": "48px",
                "--swiper-pagination-bullet-inactive-color": theme.palette.grey[500],
                "--swiper-pagination-bullet-inactive-opacity": "0.6",
                "--swiper-pagination-bullet-size": "16px",
                "--swiper-pagination-bullet-horizontal-gap": "4px",
            }}
        >
            <SwiperSlide>
                <HeroSlide1 />
            </SwiperSlide>
            <SwiperSlide>
                <HeroSlide2 />
            </SwiperSlide>
        </Swiper>
    );
};

export default HeroSlider;
