import PageSection from "./sections/_PageSection";
import AboutSection from "./sections/AboutSection";
import WhyUsSection from "./sections/WhyUsSection";

const AboutPage = () => {
    return (
        <>
            <PageSection background="default" container={true} paddingY={8}>
                <AboutSection />
            </PageSection>
            <PageSection background="paper" container={true} paddingY={0} position="relative">
                <WhyUsSection />
            </PageSection>
        </>
    )
}

export default AboutPage;