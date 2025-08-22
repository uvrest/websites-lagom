import AboutSection from "./sections/AboutSection";
import TeamSection from "./sections/TeamSection";
import PageSection from "./sections/_PageSection";
import teamBackground from "../assets/images/abstract/bg-abstract1.png";
import AboutHeroSection from "./sections/AboutHeroSection";

const AboutPage = () => {
    return (
        <>
            <PageSection bgColor="paper" container={false} py={0}>
                <AboutSection />
            </PageSection>

            <PageSection bgColor="default" container={false} py={0} overlayColor="primary">
                <AboutHeroSection />
            </PageSection>

            <PageSection header={{ title: "Quem somos", align: "center" }} overlayColor="primary" overlayOpacity={0.85} bgImage={teamBackground}>
                <TeamSection />
            </PageSection>
        </>
    )
}

export default AboutPage;