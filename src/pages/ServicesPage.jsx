import PageSection from "./sections/_PageSection";
import ServiceSection from "./sections/ServiceSection";

const ServicesPage = () => {
    return (
        <>
            <PageSection background="paper" container={true}>
                <ServiceSection />
            </PageSection>
        </>
    )
}

export default ServicesPage;