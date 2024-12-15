import { ThemeToggle } from "@/lib/Theme";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-red-900 flex justify-between">
      <Link to="/">Main</Link>
      <Link to="/one">ONE</Link>
      <ThemeToggle />
    </div>
  );
}

export default Header;
