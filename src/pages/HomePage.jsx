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

            <PageSection bgColor="default" container={true} py={12}>
                <FeaturesSection />
            </PageSection>

            <PageSection bgColor="paper" container={true} py={8} position="relative">
                <ClientsSection />
            </PageSection>

            <PageSection bgColor="primary" container={true} py={12} position="relative">
                <TestimonialsSection theme="light" />
            </PageSection>

            {/*}
            <PageSection background="default" container={true} paddingY={0}>
                <FaqSection />
            </PageSection>
            {*/}
        </>
    )
}

export default HomePage;