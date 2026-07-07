import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import ServiceDetailPage from "../pages/ServiceDetailPage";
import GalleryPage from "../pages/GalleryPage";
import TestimonialsPage from "../pages/TestimonialsPage";
import ContactPage from "../pages/ContactPage";
import BookingPage from "../pages/BookingPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "services",
                element: <ServicesPage />,
            },
            {
                path: "services/:id",
                element: <ServiceDetailPage />,
            },
            {
                path: "gallery",
                element: <GalleryPage />,
            },
            {
                path: "testimonials",
                element: <TestimonialsPage />,
            },
            {
                path: "contact",
                element: <ContactPage />,
            },
            {
                path: "booking",
                element: <BookingPage />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);