import { createBrowserRouter, Navigate } from "react-router-dom";

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

// Admin
import AdminLayout from "../features/admin/layouts/AdminLayout";
import AdminLoginPage from "../features/admin/pages/AdminLoginPage";
import AdminDashboardPage from "../features/admin/pages/AdminDashboardPage";
import AdminBookingsPage from "../features/admin/pages/AdminBookingsPage";
import AdminContactsPage from "../features/admin/pages/AdminContactsPage";

export const router = createBrowserRouter([
    {
        path: "/admin/login",
        element: <AdminLoginPage />
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/admin/dashboard" replace />
            },
            {
                path: "dashboard",
                element: <AdminDashboardPage />
            },
            {
                path: "bookings",
                element: <AdminBookingsPage />
            },
            {
                path: "contacts",
                element: <AdminContactsPage />
            }
        ]
    },
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