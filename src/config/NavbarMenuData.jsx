import MegaMenu from "../components/menus/MegaMenu";
import { BuildRounded, BugReportRounded } from "@mui/icons-material";
import DropdownSubmenu from "../components/menus/DropdownSubmenu";

export const megaMenuServicesData = [
    {
        title: "Soluções Hidráulicas e Desentupimentos",
        type: "grid",
        content: [
            {
                type: "links",
                items: [
                    { label: "Encanador Hidráulico", to: "/servicos/encanador-hidraulico" },
                    { label: "Desentupimentos", to: "/servicos/desentupimentos" },
                    { label: "Caça Vazamentos com Detecção Eletrônica", to: "/servicos/caca-vazamentos" },
                    { label: "Limpeza e Sucção de Fossas", to: "/servicos/limpeza-de-fossas" },
                ],
            },
            /*
            {
                type: "image",
                src: "https://placehold.co/600x400",
                alt: "Soluções Hidráulicas",
                to: "/servicos",
            },
            */
        ],
    },
    {
        title: "Dedetização e Higienização",
        type: "grid",
        content: [
            {
                type: "links",
                items: [
                    { label: "Dedetização e Controle de Pragas Urbanas", to: "/servicos/dedetizacao" },
                    { label: "Limpeza de Caixa D'água", to: "/servicos/limpeza-de-caixa-dagua" },
                    { label: "Hidrojateamento de Alta Pressão", to: "/servicos/hidrojateamento" },
                ],
            },
        ],
    },
    {
        title: "Para a sua Casa",
        type: "grid",
        content: [
            {
                type: "links",
                items: [
                    { label: "Instalação, manutenção e limpeza de ar condicionados", to: "/servicos/instalacao-de-ar-condicionados" },
                    { label: "Obras, Pinturas e Reformas", to: "/servicos/obras-pinturas-reformas" },
                ],
            },
        ],
    },
];

export const servicesSimpleSubmenuData = [
    { label: "Manutenção", to: "/servicos/manutencao", icon: BuildRounded },
    { label: "Dedetização", to: "/servicos/dedetizacao", icon: BugReportRounded },
    { label: "Limpeza", to: "/servicos/limpeza" },
];

export const NavbarMenuData = [
    {
        label: "Home",
        to: "/",
    },
    {
        label: "Sobre",
        to: "/sobre",
    },
    {
        label: "Serviços",
        to: "#",
        openMode: "click",
        renderSubmenu: () => <MegaMenu items={megaMenuServicesData} minWidth={600} />,
    },
    {
        label: "Contato",
        to: "/contato",
    },
];