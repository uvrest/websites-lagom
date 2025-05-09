import PageSection from "./sections/_PageSection";
import ClientsSection from "./sections/ClientsSection";
import TestimonialsSection from "./sections/TestimonialsSection";

const ClientsPage = () => {
    return (
        <>
            <PageSection>
                <ClientsSection />
            </PageSection>
            <PageSection background="default" container={true} paddingY={12} position="relative">
                <TestimonialsSection />
            </PageSection>
        </>
    )
}

export default ClientsPage;