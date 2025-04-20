import PageSection from "./sections/_PageSection";
import ContactCardList from "../components/shared/ContactCardList";
import MapSection from "./sections/MapSection";

const ContactPage = () => {
    return (
        <>
            <PageSection background="paper" container={true} paddingY={8} aria-labelledby="contact-cards">
                <ContactCardList />
            </PageSection>
            <PageSection background="paper" container={false} paddingY={0} aria-labelledby="contact-map">
                <MapSection />
            </PageSection>
        </>
    )
}

export default ContactPage;