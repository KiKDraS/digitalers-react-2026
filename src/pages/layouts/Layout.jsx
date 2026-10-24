import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="container mt-4">
        {/* Outlet: el "hueco" donde se renderiza la ruta hija que matchee */}
        {/* Outlet === children */}
        <Outlet />
      </main>
    </>
  );
};
