import { useTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const LogoSlider = ({ logos }) => {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={5}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
                0: { slidesPerView: 2 },
                600: { slidesPerView: 3 },
                900: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
            }}
        >
            {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                    <img src={logo.src} alt={logo.alt} style={{ height: 180, margin: "auto" }} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default LogoSlider;