import leaseLogo from "./assets/lease-logo.svg";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Home from "./pages/Home";
import HelpFinder from "./pages/HelpFinder";
import GuidedQuestions from "./pages/GuidedQuestions";
import Results from "./pages/Results";

type Page = "HOME" | "HELP_FINDER" | "GUIDED_QUESTIONS" | "RESULTS";

const navItems = [
  "Leasehold essentials",
  "Costs and charges",
  "Lease extension",
  "Buying and selling",
  "Building management",
  "Disputes",
];

function App() {
  const [currentPage] = useState<Page>("RESULTS");

  return (
    <div className="min-h-screen bg-brand-background">
      <header className="sticky top-0 z-20 bg-brand-blue">
        <div className="page-width flex min-h-24 items-center justify-between gap-4 py-2">
          <a href="#home" aria-label="Leasehold Advisory Service home">
            <img
              src={leaseLogo}
              alt="Leasehold Advisory Service logo"
              className="block h-full w-48"
            />
          </a>

          <div className="flex gap-3">
            <form className="flex overflow-hidden rounded border" role="search">
              <label htmlFor="site-search" className="sr-only">
                Search the site
              </label>
              <Input
                id="site-search"
                type="search"
                placeholder="Search: e.g. section 20"
                aria-label="Search the site"
                className="h-full rounded-l rounded-r-none bg-background"
              />
              <Button
                type="submit"
                aria-label="Submit search"
                className="h-full w-10 rounded-l-none rounded-r border-0 bg-brand-blue-light"
              >
                <Search aria-hidden="true" />
              </Button>
            </form>
            <Button
              type="button"
              className="h-full rounded px-4 py-3 font-bold transition-transform hover:-translate-y-0.5"
            >
              Get help
            </Button>
          </div>
        </div>

        <div className="bg-brand-blue-deep">
          <div className="page-width">
            <nav
              className="flex min-h-14 flex-wrap items-center justify-start gap-5"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="text-xs font-bold uppercase tracking-wide text-white/90 no-underline transition-colors hover:text-sky-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <main>
        {currentPage === "HOME" && <Home />}
        {currentPage === "HELP_FINDER" && <HelpFinder />}
        {currentPage === "GUIDED_QUESTIONS" && <GuidedQuestions />}
        {currentPage === "RESULTS" && <Results />}
      </main>
    </div>
  );
}

export default App;
