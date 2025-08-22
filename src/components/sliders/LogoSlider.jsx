import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const LogoSlider = ({ logos }) => {
    return (
        <Box
            sx={(theme) => ({
                position: "relative",
                background: theme.palette.background.paper,
                px: 0,
                zIndex: 1,
                "& .logo-swiper": {
                    padding: "0 24px", // espaço pras setas ficarem dentro
                },
                // Arrows
                "& .logo-swiper .swiper-button-prev, & .logo-swiper .swiper-button-next": {
                    color: theme.palette.primary.main,
                    "&::after": { fontSize: "32px", fontWeight: "bold" },
                },
                "& .logo-swiper .swiper-button-prev": { left: 8 },
                "& .logo-swiper .swiper-button-next": { right: 8 },

                // Bullets
                "& .logo-swiper .swiper-pagination-bullet": {
                    width: 16,
                    height: 16,
                    backgroundColor: theme.palette.grey[400],
                    opacity: 1,
                },
                "& .logo-swiper .swiper-pagination-bullet-active": {
                    backgroundColor: theme.palette.primary.main,
                },
            })}
        >
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={12}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true, dynamicBullets: true }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    600: { slidesPerView: 3 },
                    900: { slidesPerView: 4 },
                    1200: { slidesPerView: 5 },
                }}
                className="logo-swiper"
                style={{ width: "100%" }}
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index} style={{ height: "auto", display: 'flex', justifyContent: 'center' }}>
                        <img src={logo.src} alt={logo.alt} style={{ height: 180 }} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}

export default LogoSlider;