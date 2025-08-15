import PageSection from "./sections/_PageSection";
import ContactCardList from "../components/shared/ContactCardList";
import MapSection from "./sections/MapSection";

const ContactPage = () => {
    return (
        <>
            <PageSection bgColor="paper" container={true} py={8} aria-labelledby="contact-cards">
                <ContactCardList />
            </PageSection>
            <PageSection bgColor="paper" container={false} py={0} aria-labelledby="contact-map">
                <MapSection />
            </PageSection>
        </>
    )
}

export default ContactPage;