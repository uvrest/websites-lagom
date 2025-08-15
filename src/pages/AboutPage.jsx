import AboutSection from "./sections/AboutSection";
import TeamSection from "./sections/TeamSection";
import PageSection from "./sections/_PageSection";
import teamBackground from "../assets/images/abstract/bg-abstract1.png";

const AboutPage = () => {
    return (
        <>
            <PageSection bgColor="paper">
                <AboutSection />
            </PageSection>

            <PageSection header={{ title: "Quem somos", align: "center" }} overlayColor="primary" overlayOpacity={0.85} bgImage={teamBackground}>
                <TeamSection />
            </PageSection>
        </>
    )
}

export default AboutPage;