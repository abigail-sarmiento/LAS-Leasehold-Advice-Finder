import { useState } from "react";
import Home from "./pages/Home";
import HelpFinder, {
  initialHelpFinderState,
  type HelpFinderState,
} from "./pages/HelpFinder";
import GuidedQuestions from "./pages/GuidedQuestions";
import Results from "./pages/Results";
import Header from "./components/Header";
import type { Category } from "./types/categories";

type Page = "home" | "help-finder" | "guided-questions" | "results";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [questionCategory, setQuestionCategory] = useState<Category | null>(
    null,
  );
  const [helpFinderState, setHelpFinderState] = useState<HelpFinderState>(
    initialHelpFinderState,
  );

  const handleContinue = (category: Category) => {
    setQuestionCategory(category);
    setCurrentPage("guided-questions");
  };

  return (
    <div className="min-h-screen bg-brand-background">
      <header className="sticky top-0 z-20 bg-brand-blue">
        <Header />
      </header>
      <main>
        {currentPage === "home" && (
          <Home onClickGetStarted={() => setCurrentPage("help-finder")} />
        )}
        {currentPage === "help-finder" && (
          <HelpFinder
            value={helpFinderState}
            onChange={setHelpFinderState}
            onContinue={handleContinue}
          />
        )}
        {currentPage === "guided-questions" && (
          <GuidedQuestions
            category={questionCategory}
            onSubmit={() => setCurrentPage("results")}
            onBack={() => setCurrentPage("help-finder")}
          />
        )}
        {currentPage === "results" && <Results />}
      </main>
    </div>
  );
}

export default App;
