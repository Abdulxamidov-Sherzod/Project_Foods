import { Link } from "react-router-dom";

const menus = [
  { label: "Login", path: "/login" },
  { label: "Register", path: "/register" },
];
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light px-5 mb-3">
      <Link to="/foods" className="navbar-brand">
        FOODS
      </Link>
      <ul className="nav">
        {menus.map(({ label, path }) => (
          <li key={path} className="nav-item">
            <Link to={path} className="nav-link">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
