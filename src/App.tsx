import ThemeToggle from "./components/ThemeToggle";

//TODO: ogranąć theme dla komponentu żeby ogarniał text na przyszłość
const App = ({ theme = "winter" }) => {
  //TODO: theme działa, dalszy krok to wygenerowanie komponentów

  return (
    <div
      className={`min-h-screen font-sans ${
        theme === "winter" ? "text-neutral-800" : "text-gray-100"
      }`}
    >
      <nav className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
          <div className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-flex size-6"
            >
              <path
                opacity={theme === "winter" ? ".6" : "1"}
                d="M2.25 12c0-5.25 3.75-9.5 8.25-9.5s8.25 4.25 8.25 9.5-3.75 9.5-8.25 9.5-8.25-4.25-8.25-9.5Z"
              />
              <path
                opacity={theme === "winter" ? ".6" : "1"}
                d="M2.25 29.5c0-5.25 3.75-9.5 8.25-9.5s8.25 4.25 8.25 9.5-3.75 9.5-8.25 9.5-8.25-4.25-8.25-9.5Z"
              />
            </svg>
          </div>
          <a className="btn btn-ghost text-xl font-bold text-primary">
            Home Budget
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/" className="font-medium">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/transactions" className="font-medium">
                Transactions
              </a>
            </li>
            <li>
              <a href="/budget" className="font-medium">
                Budget
              </a>
            </li>
            <li>
              <a href="/reports" className="font-medium">
                Reports
              </a>
            </li>
            <li>
              <a href="/settings" className="font-medium">
                Settings
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeToggle />
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="card-title">Welcome to Home Budget</h1>
            <p>
              {theme === "winter"
                ? "A clean, light theme with winter whites and blues."
                : "A dark theme inspired by Dracula color scheme."}
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
