import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialCard from "../cards/TestimonialCard";

const TestimonialSlider = ({ testimonials }) => {
    return (
        <Box
            sx={(theme) => ({
                position: "relative",
                background: theme.palette.primary.light,
                p: { sx: 2, md: 3 },

                // Arrows
                "& .swiper-button-prev, & .swiper-button-next": {
                    color: theme.palette.primary.main,
                    "&::after": {
                        fontSize: "32px", // aumenta o tamanho
                        fontWeight: "bold",
                    },
                },

                // Bullets
                "& .swiper-pagination-bullet": {
                    width: 16,
                    height: 16,
                    backgroundColor: theme.palette.grey[400],
                    opacity: 1,
                },
                "& .swiper-pagination-bullet-active": {
                    backgroundColor: theme.palette.primary.main,
                },
            })}
        >
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={24}
                slidesPerView={5}
                loop
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true, dynamicBullets: true }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    600: { slidesPerView: 1 },
                    900: { slidesPerView: 1 },
                    1200: { slidesPerView: 1 },
                }}
                className="testimonial-swiper"
                style={{ width: "100%" }}
            >
                {testimonials.map((t, i) => (
                    <SwiperSlide key={i} style={{ height: "auto" }}>
                        <TestimonialCard
                            avatar={t.avatar}
                            name={t.name}
                            subtitle={t.subtitle}
                            testimonial={t.testimonial}
                            rating={t.rating}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default TestimonialSlider;
