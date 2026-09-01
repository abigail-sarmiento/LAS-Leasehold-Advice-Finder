import { type LucideIcon } from "lucide-react";

type HowItWorksStepProps = {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

function HowItWorksStep({
  number,
  icon: Icon,
  title,
  description,
}: HowItWorksStepProps) {
  return (
    <div className="flex flex-1 flex-col items-center px-8">
      <Icon className="h-24 w-24" />
      <div className="flex items-center justify-center h-12 w-12 my-4 rounded-full bg-primary text-primary-foreground text-xl font-bold">
        {number}
      </div>
      <h3 className="text-lg text-center font-bold">{title}</h3>
      <p className="mt-1 text-center">{description}</p>
    </div>
  );
}

export default HowItWorksStep;
