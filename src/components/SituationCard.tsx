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
      className={`w-full max-w-xs ${
        selected ? "border-primary bg-primary/5" : "hover:border-primary/50"
      }`}
    >
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center justify-center h-12 w-12 [&_svg]:size-5 rounded-md bg-primary [&_svg]:text-primary-foreground  ">
          <Icon />
        </div>
        <h3 className="text-foreground hover:text-primary block text-sm leading-tight font-medium">
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
