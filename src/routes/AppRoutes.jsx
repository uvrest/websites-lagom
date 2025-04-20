import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import LinearProgress from '@mui/material/LinearProgress';
import SiteLayout from "../layouts/SiteLayout";
import DefaultPageLayout from "../layouts/DefaultPageLayout";
import ServiceLayout from "../layouts/ServiceLayout";
import NotFoundPage from "../pages/NotFoundPage";

import DesentupimentoPage from "../pages/services/DesentupimentoPage";
import EncanadorPage from "../pages/services/EncanadorPage";
import CacaVazamentoPage from "../pages/services/CacaVazamentoPage";
import LimpaFossaPage from "../pages/services/LimpaFossaPage";
import HidrojateamentoPage from "../pages/services/HidrojateamentoPage";
import DedetizacaoPage from "../pages/services/DedetizacaoPage";
import LimpezaCaixasDaguaPage from "../pages/services/LimpezaCaixasDaguaPage";
import ArCondicionadoPage from "../pages/services/ArCondicionadoPage";
import ObrasPinturasReformasPage from "../pages/services/ObrasPinturasReformasPage";

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));

const AppRoutes = () => {

    return (
        <Suspense fallback={<LinearProgress />}>

            {/** Utilizar este top route para middlewares */}
            <Routes path="/" key="public">

                <Route element={<SiteLayout />}>

                    <Route index element={<HomePage />} />

                    <Route element={<DefaultPageLayout title="Sobre a Ecoportus" imageName="about.jpg" />}>
                        <Route path="/sobre" element={<AboutPage />} />
                    </Route>

                    <Route path="servicos">

                        <Route element={<DefaultPageLayout title="Nossos Serviços" imageName="about.jpg" />}>
                            <Route index element={<ServicesPage />} />
                        </Route>

                        <Route element={<ServiceLayout />}>
                            <Route path="encanador-hidraulico" element={<EncanadorPage />} />
                            <Route path="desentupimentos" element={<DesentupimentoPage />} />
                            <Route path="limpeza-de-fossas" element={<LimpaFossaPage />} />
                            <Route path="caca-vazamentos" element={<CacaVazamentoPage />} />
                            <Route path="limpeza-de-caixa-dagua" element={<LimpezaCaixasDaguaPage />} />
                            <Route path="hidrojateamento" element={<HidrojateamentoPage />} />
                            <Route path="dedetizacao" element={<DedetizacaoPage />} />
                            <Route path="instalacao-de-ar-condicionados" element={<ArCondicionadoPage />} />
                            <Route path="obras-pinturas-reformas" element={<ObrasPinturasReformasPage />} />
                        </Route>

                    </Route>

                    <Route element={<DefaultPageLayout title="Contato" imageName="about.jpg" />}>
                        <Route path="/contato" element={<ContactPage />} />
                    </Route>

                    <Route path="*" element={<NotFoundPage />} />

                </Route>
            </Routes>
        </Suspense>
    );
}

export default AppRoutes;