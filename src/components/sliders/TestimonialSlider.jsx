import { useTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialCard from "../cards/TestimonialCard";

const TestimonialSlider = ({ testimonials }) => {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={5}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
                0: { slidesPerView: 1 },
                600: { slidesPerView: 1 },
                900: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
            }}
        >
            {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} style={{ paddingBottom: "8px", }}>
                    <TestimonialCard
                        avatar={testimonial.avatar}
                        name={testimonial.name}
                        subtitle={testimonial.subtitle}
                        testimonial={testimonial.testimonial}
                        rating={testimonial.rating}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default TestimonialSlider;