import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { categoryDetails, type Category } from "../types/categories";

type GuidanceCardProps = {
  category: Category;
  title: string;
  description: string;
  href: string;
};

function GuidanceCard({
  category,
  title,
  description,
  href,
}: GuidanceCardProps) {
  const Icon = categoryDetails[category].icon;

  return (
    <Card className="h-full">
      <CardHeader>
        <Badge variant="secondary">
          <Icon className="h-4 w-4" />
          {categoryDetails[category].label}
        </Badge>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardContent>
      <CardFooter className="mt-auto">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 h-auto p-0 hover:underline"
        >
          View more
          <ArrowRight className="h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  );
}

export default GuidanceCard;
