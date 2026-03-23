import { NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-white text-black">
      <header className="sticky top-0 border-b bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <NavLink to="/" className="text-xl font-bold">
            Saadia Portfolio
          </NavLink>

          <div className="flex items-center gap-4 text-sm font-medium">
            <NavLink to="/projects">Projets</NavLink>
            <NavLink to="/experience">Parcours</NavLink>
            <NavLink to="/education">Formations</NavLink>
            <NavLink to="/certifications">Certifications</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl p-6">
        <Outlet />
      </main>

      <footer className="border-t py-6 text-center text-sm">
        © {new Date().getFullYear()} • Saadia El mouden
      </footer>
    </div>
  );
}
