import { Grid, Typography } from "@mui/material";
import AboutSection from "./sections/AboutSection";
import TeamSection from "./sections/TeamSection";
import PageSection from "./sections/_PageSection";

const AboutPage = () => {
    return (
        <>
            <PageSection background="default">
                <AboutSection />
            </PageSection>

            <PageSection background="primaryLight">
                <TeamSection />
            </PageSection>
        </>
    )
}

export default AboutPage;