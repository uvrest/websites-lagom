import TestimonialSlider from "../../components/sliders/TestimonialSlider";
import PageSectionTitle from "./_PageSectionTitle";

const testimonials = [
    {
        id: 1,
        avatar: undefined,
        name: "Gabriel Coelho",
        subtitle: "Desenvolvedor",
        rating: 5,
        testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        id: 2,
        avatar: undefined,
        name: "Luana Sperry",
        subtitle: "Sócia",
        rating: 5,
        testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        id: 3,
        avatar: undefined,
        name: "Gabriela",
        subtitle: "Sócia",
        rating: 5,
        testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        id: 4,
        avatar: undefined,
        name: "Nome da pessoa",
        subtitle: "Curitiba / PR",
        rating: 4.5,
        testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        id: 5,
        avatar: undefined,
        name: "Nome da pessoa",
        subtitle: "CEO",
        rating: 4,
        testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
];

const TestimonialsSection = () => {
    return (
        <>
            <PageSectionTitle
                overline="Depoimentos"
                title="O que os nossos clientes e parceiros têm a dizer?"
                align="center"
                color="common.white"
            />

            <TestimonialSlider testimonials={testimonials} />
        </>
    )
}

export default TestimonialsSection;