import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            {/* Navbar nanti di sini */}

            <main>
                <Outlet />
            </main>

            {/* Footer nanti di sini */}
        </>
    );
}