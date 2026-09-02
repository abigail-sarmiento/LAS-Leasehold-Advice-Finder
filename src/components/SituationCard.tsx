import { Card, CardContent } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";

export type Situation = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

type SituationCardProps = {
  situation: Situation;
  selected: boolean;
  onSelect: () => void;
};

function SituationCard({ situation, selected, onSelect }: SituationCardProps) {
  const Icon = situation.icon;

  return (
    <Card
      onClick={onSelect}
      className={`w-full max-w-xs cursor-pointer transition-all duration-200 ease-out ${
        selected
          ? "border-brand-blue bg-sky-50 shadow-md ring-2 ring-brand-blue/20"
          : "border-slate-200 bg-white hover:-translate-y-1 hover:border-brand-blue/50 hover:bg-sky-50/70 hover:shadow-md"
      }`}
    >
      <CardContent className="flex flex-col gap-3">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-md transition-colors [&_svg]:size-5 ${
            selected
              ? "bg-brand-blue text-white"
              : "bg-primary text-primary-foreground group-hover:bg-brand-blue group-hover:text-white"
          }`}
        >
          <Icon />
        </div>
        <h3 className="block text-sm font-medium leading-tight text-foreground">
          {situation.title}
        </h3>
        <p className="text-muted-foreground text-xs leading-relaxed">
          {situation.description}
        </p>
      </CardContent>
    </Card>
  );
}

export default SituationCard;
