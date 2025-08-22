import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import LinearProgress from '@mui/material/LinearProgress';
import SiteLayout from "../layouts/SiteLayout";
import DefaultPageLayout from "../layouts/DefaultPageLayout";
import NotFoundPage from "../pages/NotFoundPage";
import ScrollToTop from "./ScrollToTop";

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const ClientsPage = lazy(() => import('../pages/ClientsPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const BlogPage = lazy(() => import('../pages/BlogPage'));

const AppRoutes = () => {

    return (
        <Suspense fallback={<LinearProgress />}>

            <ScrollToTop />

            {/** Utilizar este top route para middlewares */}
            <Routes path="/" key="public">

                <Route element={<SiteLayout />}>

                    <Route index element={<HomePage />} />

                    <Route element={<DefaultPageLayout title="Sobre a Lagom" />}>
                        <Route path="/sobre" element={<AboutPage />} />
                    </Route>

                    <Route path="servicos">

                        <Route element={<DefaultPageLayout title="Nossos Serviços" />}>
                            <Route index element={<ServicesPage />} />
                        </Route>

                    </Route>

                    <Route element={<DefaultPageLayout title="Clientes" />}>
                        <Route path="/clientes" element={<ClientsPage />} />
                    </Route>

                    <Route element={<DefaultPageLayout title="Contato" />}>
                        <Route path="/contato" element={<ContactPage />} />
                    </Route>

                    <Route element={<DefaultPageLayout title="Artigos" />}>
                        <Route path="/artigos" element={<BlogPage />} />
                    </Route>

                    <Route path="*" element={<NotFoundPage />} />

                </Route>
            </Routes>
        </Suspense>
    );
}

export default AppRoutes;