import TestimonialSlider from "../../components/sliders/TestimonialSlider";
import PageSectionTitle from "./_PageSectionTitle";

import Tonolher from "../../assets/images/testimonials/tonolher.jpg";
import Marini from "../../assets/images/testimonials/marini.jpg";

const testimonials = [
    {
        id: 1,
        avatar: Marini,
        name: "Marini",
        subtitle: "Construções",
        rating: 5,
        testimonial: `
            Gostaria de expressar minha sincera satisfação com os serviços prestados pela Lagom Engenharia.
            Desde o início da escolha do terreno, a equipe demonstrou um profundo conhecimento e comprometimento com o licenciamento ambiental.
            A atenção aos detalhes e a capacidade de responder a todas as nossas dúvidas foram fundamentais para o sucesso do processo.
            Além disso, a Lagom se destacou pela sua transparência e ética, sempre nos mantendo informados sobre cada etapa.
            Recomendo a Lagom Engenharia a qualquer empresa que busque um parceiro confiável e competente!
        `,
    },
    {
        id: 2,
        avatar: Tonolher,
        name: "Tonolher",
        subtitle: "Construtora",
        rating: 5,
        testimonial: `
            Precisávamos de uma empresa solida e com expertise em licenças ambientais e acabamos escolhendo a Lagon para tomar frente a um
            dos nossos principais empreendimentos, o Sky Shopping Camboriu. Estamos contentes com o andamento do processo já iniciado e
            sabemos que temos ainda um longo caminho pela frente, mas a certeza que juntos vamos desenvolver um ótimo trabalho e atender
            todas as necessidades do projeto e de nossos clientes.
        `,
    },
];

const TestimonialsSection = ({ theme = "light" }) => {
    return (
        <>
            <PageSectionTitle
                overline="Depoimentos"
                title="O que os nossos clientes e parceiros têm a dizer?"
                align="center"
                color={theme === "light" ? "common.black" : "common.white"}
            />

            <TestimonialSlider testimonials={testimonials} />
        </>
    )
}

export default TestimonialsSection;