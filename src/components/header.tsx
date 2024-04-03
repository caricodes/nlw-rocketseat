import nlwLogo from "../assets/nlw-icon.svg";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwLogo} />

      <nav className="flex items-center gap-5">
        <NavLink href="/participantes">Participantes</NavLink>
        <NavLink href="/eventos">Eventos</NavLink>
      </nav>
    </div>
  );
}
