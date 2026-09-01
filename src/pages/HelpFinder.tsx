import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import SituationCard from "../components/SituationCard";
import {
  ArrowRight,
  Banknote,
  Building,
  CalendarRange,
  Gavel,
  House,
  ShoppingBasket,
  UsersRound,
} from "lucide-react";

const situationItems = [
  {
    id: "building-management",
    title: "Building management",
    description:
      "How buildings are managed, including right to manage, repairs and fire safety",
    icon: Building,
  },
  {
    id: "buying-and-selling",
    title: "Buying and selling",
    description:
      "The process for buying or selling a leasehold property or buying the freehold",
    icon: ShoppingBasket,
  },
  {
    id: "costs-and-charges",
    title: "Costs and charges",
    description:
      "Costs you may need to pay as a leaseholder, including service charges and ground rent",
    icon: Banknote,
  },
  {
    id: "disputes",
    title: "Disputes",
    description:
      "Dealing with leasehold disputes including enforcing your rights and applying to the tribunal",
    icon: Gavel,
  },
  {
    id: "lease-extension",
    title: "Lease extension",
    description:
      "How to extend your lease, including the different routes and valuation",
    icon: CalendarRange,
  },
  {
    id: "leasehold-essentials",
    title: "Leasehold essentials",
    description:
      "Understanding leasehold, your rights and responsibilities, and leasehold reform",
    icon: House,
  },
  {
    id: "shared-ownership",
    title: "Shared ownership",
    description:
      "Advice if you’re thinking of buying a shared ownership property or already own one",
    icon: UsersRound,
  },
];

function HelpFinder() {
  const [inputMethod, setInputMethod] = useState<
    "choose-situation" | "describe-situation"
  >("choose-situation");

  const [selectedSituation, setSelectedSituation] = useState<
    string | undefined
  >(undefined);
  const [situationInput, setSituationInput] = useState<string>("");

  const handleSituationSelect = (id: string) => {
    setSelectedSituation((current) => (current === id ? undefined : id));
  };

  return (
    <section>
      <div className="flex flex-col items-center page-width py-12 md:py-14 gap-12">
        <h1 className="max-w-3xl text-4xl text-center font-sans font-bold">
          What can we help with?
        </h1>
        <RadioGroup
          value={inputMethod}
          onValueChange={setInputMethod}
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
                    onChange={(event) => setSituationInput(event.target.value)}
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
