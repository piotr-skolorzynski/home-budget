import FinancialStatWrapper from "./FinancialStatWrapper";
import Navigation from "./Navigation";
import QuickEntry from "./QuickEntry";

const HomeLayout = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="card bg-base-100 shadow-ambient">
          <div className="card-body">
            <h1 className="card-title">Welcome to Home Budget</h1>
            <p>Start managing your finances with our premium design system.</p>
            <FinancialStatWrapper />
            <QuickEntry />
            <div className="card-actions">
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeLayout;
