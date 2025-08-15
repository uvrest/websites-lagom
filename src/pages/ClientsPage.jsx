import PageSection from "./sections/_PageSection";
import ClientsSection from "./sections/ClientsSection";
import TestimonialsSection from "./sections/TestimonialsSection";

const ClientsPage = () => {
    return (
        <>
            <PageSection>
                <ClientsSection />
            </PageSection>
            <PageSection bgColor="default" container={true} py={12} position="relative">
                <TestimonialsSection />
            </PageSection>
        </>
    )
}

export default ClientsPage;