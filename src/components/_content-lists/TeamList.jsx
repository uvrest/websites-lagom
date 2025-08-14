import { Grid } from "@mui/material";
import TeamCard from "../cards/TeamCard";
import GabrielaImg from "../../assets/images/team/gabriela.png";
import LuanaImg from "../../assets/images/team/luana.png";

const people = [
    {
        id: 1,
        image: GabrielaImg,
        name: "Gabriela Antunes",
        role: "Engenheira Sanitarista e Ambiental | Especialista em Análise Ambiental",
        description: `
            Sócia e responsável pela gestão comercial da Lagom Consultoria Ambiental, Gabriela Antunes é Engenheira Sanitarista e Ambiental, 
            especialista em Análise Ambiental, com mais de 14 anos de experiência no setor. Atuou diretamente em órgãos públicos nos municípios de Itapema e Camboriú,
            adquirindo uma visão aprofundada dos processos, exigências e trâmites do setor público. Essa expertise é aplicada hoje no setor privado, 
            oferecendo soluções estratégicas, técnicas e personalizadas para empresas que buscam a regularização ambiental, sempre com foco na conformidade legal, 
            agilidade nos processos e na entrega de valor aos clientes.
        `
    },
    {
        id: 2,
        image: LuanaImg,
        name: "Luana Sperry",
        role: "Engenheira Ambiental | Técnica em Segurança do Trabalho",
        description: `
            Luana Sperry é Engenheira Ambiental e Técnica em Segurança do Trabalho, com mais de 15 anos de experiência na área de licenciamento e gestão ambiental. 
            Atuou na Secretaria de Meio Ambiente de Balneário Camboriú e Camboriú, além de participar de projetos liderados pelo SEBRAE, prestando consultoria 
            ambiental para indústrias de diversos segmentos na região. Sócia da Lagom Consultoria Ambiental, é responsável técnica pelo desenvolvimento dos 
            projetos, aplicando sua expertise na elaboração de soluções eficientes, seguras e alinhadas à legislação ambiental e às melhores práticas 
            de sustentabilidade e conformidade.
        `
    },
];

const TeamList = () => {
    return (
        <Grid container spacing={2}>
            {people.map((person) => (
                <Grid size={6} key={person.id}>
                    <TeamCard
                        key={person.id}
                        image={person.image}
                        name={person.name}
                        role={person.role}
                        description={person.description}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default TeamList;