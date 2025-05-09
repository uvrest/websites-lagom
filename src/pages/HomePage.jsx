//import HeroSlider from "../components/hero/swiper-slider/HeroSlider";
import VideoBoxSection from "./sections/VideoBoxSection";
import PageSection from "./sections/_PageSection";
import FeaturesSection from "./sections/FeaturesSection";
import ClientsSection from "./sections/ClientsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import FaqSection from "./sections/FaqSection";

const HomePage = () => {
    return (
        <>
            <VideoBoxSection />

            <PageSection background="default" container={true} paddingY={12}>
                <FeaturesSection />
            </PageSection>

            <PageSection background="paper" container={true} paddingY={8} position="relative">
                <ClientsSection />
            </PageSection>

            <PageSection background="customDarkGreen" container={true} paddingY={12} position="relative">
                <TestimonialsSection />
            </PageSection>

            <PageSection background="default" container={true} paddingY={{ xs: 8, md: 8 }}>
                <FaqSection />
            </PageSection>
        </>
    )
}

export default HomePage;