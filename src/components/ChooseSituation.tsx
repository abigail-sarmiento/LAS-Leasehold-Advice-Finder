import type { SituationInputMethod } from "../pages/HelpFinder";
import { situationItems } from "../data/situations";
import SituationCard from "./SituationCard";

type ChooseSituationProps = {
  inputMethod: SituationInputMethod;
  selectedSituation: string | null;
  onSelectSituation: (id: string) => void;
};

function ChooseSituation({
  inputMethod,
  selectedSituation,
  onSelectSituation,
}: ChooseSituationProps) {
  return (
    <div>
      <p className="font-medium">Choose a common situation</p>
      <p className="text-sm text-muted-foreground">
        Select from one of the options below.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-5">
        {inputMethod === "choose-situation" &&
          situationItems.map((situation) => (
            <SituationCard
              key={situation.id}
              situation={situation}
              selected={selectedSituation === situation.id}
              onSelect={() => onSelectSituation(situation.id)}
            />
          ))}
      </div>
    </div>
  );
}

export default ChooseSituation;
