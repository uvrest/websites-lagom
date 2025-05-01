import HeroSlider from "../components/hero/swiper-slider/HeroSlider";
import PageSection from "./sections/_PageSection";
import FeaturesSection from "./sections/FeaturesSection";
import AboutSection from "./sections/AboutSection";
import WhyUsSection from "./sections/WhyUsSection";
import ServiceSection from "./sections/ServiceSection";
import FaqSection from "./sections/FaqSection";

const HomePage = () => {
    return (
        <>
            <HeroSlider />

            <PageSection background="default" container={true} paddingY={0}>
                <FeaturesSection />
            </PageSection>

            <PageSection
                background="default"
                container={true}
                paddingY={0}
                sx={{ pt: { xs: 2, md: 7 }, pb: { xs: 2, md: 12 } }}
            >
                <AboutSection />
            </PageSection>

            <PageSection background="paper" container={true} paddingY={0} position="relative">
                <WhyUsSection />
            </PageSection>

            <PageSection background="customDarkGreen" container={true}>
                <ServiceSection mode="dark" />
            </PageSection>

            <PageSection background="default" container={true} paddingY={{ xs: 8, md: 8 }}>
                <FaqSection />
            </PageSection>
        </>
    )
}

export default HomePage;