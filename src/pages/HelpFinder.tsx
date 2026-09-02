import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { ArrowRight } from "lucide-react";
import type { Category } from "../types/categories";
import { classifySituation } from "../services/helpFinderClassifier";
import { useState } from "react";
import ChooseSituation from "../components/ChooseSituation";

export type SituationInputMethod = "choose-situation" | "describe-situation";

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

  const [isClassifying, setIsClassifying] = useState(false);

  const handleSituationSelect = (id: string) => {
    onChange({
      ...value,
      selectedSituation: selectedSituation === id ? null : id,
    });
  };

  const handleContinueClick = async () => {
    if (inputMethod === "describe-situation") {
      setIsClassifying(true);

      try {
        const result = await classifySituation(situationInput);

        onContinue(result.category);
      } catch (error) {
        console.error(error);
      } finally {
        setIsClassifying(false);
      }
    } else {
      const category = (selectedSituation as Category) || "leaseholdEssentials";
      onContinue(category);
    }
  };

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
            className="flex cursor-pointer items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white/70 shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <RadioGroupItem value="choose-situation" id="choose-situation" />
            <ChooseSituation
              inputMethod={inputMethod}
              selectedSituation={selectedSituation}
              onSelectSituation={handleSituationSelect}
            />
          </Label>
          <Label
            htmlFor="describe-situation"
            className="flex cursor-pointer items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white/70 shadow-sm transition-all duration-200 hover:shadow-md"
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
                  <InputGroup className="mt-5 rounded rounded-2xl font-normal">
                    <InputGroupTextarea
                      placeholder="What is your situation?"
                      value={situationInput}
                      onChange={(event) =>
                        onChange({
                          ...value,
                          situationInput: event.target.value,
                        })
                      }
                    />
                    {isClassifying && (
                      <InputGroupAddon align="block-end">
                        <Spinner /> Classifying...
                      </InputGroupAddon>
                    )}
                  </InputGroup>
                )}
              </div>
            </div>
          </Label>
        </RadioGroup>
        <Button
          disabled={
            (inputMethod === "choose-situation" && !selectedSituation) ||
            (inputMethod === "describe-situation" && !situationInput.trim()) ||
            (inputMethod === "describe-situation" && isClassifying)
          }
          onClick={handleContinueClick}
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
