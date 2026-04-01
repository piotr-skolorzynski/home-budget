import ThemeToggle from "./ThemeToggle";
import { useLocation, Link } from "react-router";

export default function Navigation() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full glass-nav">
      <nav className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <div className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-flex size-6"
            >
              <path
                opacity=".6"
                d="M2.25 12c0-5.25 3.75-9.5 8.25-9.5s8.25 4.25 8.25 9.5-3.75 9.5-8.25 9.5-8.25-4.25-8.25-9.5Z"
              />
              <path
                opacity=".6"
                d="M2.25 29.5c0-5.25 3.75-9.5 8.25-9.5s8.25 4.25 8.25 9.5-3.75 9.5-8.25-9.5Z"
              />
            </svg>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-xl font-bold text-primary hover:scale-105 transition-transform"
          >
            Home Budget
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li
              className={`${
                location.pathname === "/"
                  ? "bg-primary/10 text-primary font-medium"
                  : ""
              } hover:bg-primary/5 transition-colors rounded-btn menu-glass`}
            >
              <Link to="/" className="font-medium">
                Dashboard
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/transactions"
                  ? "bg-primary/10 text-primary font-medium"
                  : ""
              } hover:bg-primary/5 transition-colors rounded-btn menu-glass`}
            >
              <Link to="/transactions" className="font-medium">
                Transactions
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/budget"
                  ? "bg-primary/10 text-primary font-medium"
                  : ""
              } hover:bg-primary/5 transition-colors rounded-btn menu-glass`}
            >
              <Link to="/budget" className="font-medium">
                Budget
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/reports"
                  ? "bg-primary/10 text-primary font-medium"
                  : ""
              } hover:bg-primary/5 transition-colors rounded-btn menu-glass`}
            >
              <Link to="/reports" className="font-medium">
                Reports
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/settings"
                  ? "bg-primary/10 text-primary font-medium"
                  : ""
              } hover:bg-primary/5 transition-colors rounded-btn menu-glass`}
            >
              <Link to="/settings" className="font-medium">
                Settings
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
