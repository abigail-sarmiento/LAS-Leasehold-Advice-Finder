import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import SituationCard from "../components/SituationCard";
import { ArrowRight } from "lucide-react";
import { situationItems } from "../data/situations";
import type { Category } from "../types/categories";

type SituationInputMethod = "choose-situation" | "describe-situation";

export type HelpFinderState = {
  inputMethod: SituationInputMethod;
  selectedSituation: string | null;
  situationInput: string;
};

export const initialHelpFinderState: HelpFinderState = {
  inputMethod: "choose-situation",
  selectedSituation: null,
  situationInput: "",
};

type HelpFinderProps = {
  value: HelpFinderState;
  onChange: (value: HelpFinderState) => void;
  onContinue: (category: Category) => void;
};

function HelpFinder({ value, onChange, onContinue }: HelpFinderProps) {
  const { inputMethod, selectedSituation, situationInput } = value;

  const handleSituationSelect = (id: string) => {
    onChange({
      ...value,
      selectedSituation: selectedSituation === id ? null : id,
    });
  };

  const selectedCategory: Category =
    (selectedSituation as Category) || "leaseholdEssentials";

  return (
    <section>
      <div className="flex flex-col items-center page-width py-12 md:py-14 gap-12">
        <h1 className="max-w-3xl text-4xl text-center font-sans font-bold">
          What can we help with?
        </h1>
        <RadioGroup
          value={inputMethod}
          onValueChange={(nextMethod) =>
            onChange({
              ...value,
              inputMethod: nextMethod as
                | "choose-situation"
                | "describe-situation",
            })
          }
          className="gap-4"
        >
          <Label
            htmlFor="choose-situation"
            className="flex cursor-pointer items-start gap-4 rounded-lg border p-5"
          >
            <RadioGroupItem value="choose-situation" id="choose-situation" />
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
                      onSelect={() => handleSituationSelect(situation.id)}
                    />
                  ))}
              </div>
            </div>
          </Label>
          <Label
            htmlFor="describe-situation"
            className="flex cursor-pointer items-start gap-4 rounded-lg border p-5"
          >
            <RadioGroupItem
              value="describe-situation"
              id="describe-situation"
            />
            <div className="w-full">
              <p className="font-medium">Describe my situation</p>
              <p className="text-sm text-muted-foreground">
                Tell us what's happening in your own words.
              </p>
              <div className="w-full">
                {inputMethod === "describe-situation" && (
                  <Textarea
                    placeholder="What is your situation?"
                    value={situationInput}
                    onChange={(event) =>
                      onChange({
                        ...value,
                        situationInput: event.target.value,
                      })
                    }
                    className="w-full min-w-0 mt-5 rounded rounded-2xl font-normal"
                  />
                )}
              </div>
            </div>
          </Label>
        </RadioGroup>
        <Button
          disabled={
            (inputMethod === "choose-situation" && !selectedSituation) ||
            (inputMethod === "describe-situation" && !situationInput.trim())
          }
          onClick={() => onContinue(selectedCategory)}
          className="h-11 px-6 gap-2"
        >
          Continue
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}

export default HelpFinder;
