import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";

function FeedbackForm() {
  const [helpfulResponse, setHelpfulResponse] = useState<"yes" | "no" | "">("");
  const [improvementFeedback, setImprovementFeedback] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return (
    <Card className="px-3 py-6 ring-1 ring-white/10">
      <CardContent className="h-full w-full flex flex-col gap-8">
        {!isSubmitted ? (
          <>
            <div className="flex flex-col gap-4">
              <span className="text-xl font-semibold text-primary">
                Was this helpful?
              </span>
              <RadioGroup
                value={helpfulResponse}
                onValueChange={(value) =>
                  setHelpfulResponse(value as "yes" | "no")
                }
                className="flex gap-3"
              >
                <div>
                  <RadioGroupItem
                    value="yes"
                    id="yes"
                    className="h-0 sr-only"
                  />
                  <Label
                    htmlFor="yes"
                    className={cn(
                      "flex items-center justify-center gap-3 px-6 py-3 rounded-lg border border-primary uppercase cursor-pointer",
                      helpfulResponse === "yes"
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent",
                    )}
                  >
                    <ThumbsUp className="h-5 w-5" />
                    Yes
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="no" id="no" className="h-0 sr-only" />
                  <Label
                    htmlFor="no"
                    className={cn(
                      "flex items-center justify-center gap-3 px-6 py-3 rounded-lg border border-primary uppercase cursor-pointer",
                      helpfulResponse === "no"
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent",
                    )}
                  >
                    <ThumbsDown className="h-5 w-5" />
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xl font-semibold text-primary leading-tight">
                What could we do to improve?
              </span>
              <Textarea
                value={improvementFeedback}
                onChange={(event) => setImprovementFeedback(event.target.value)}
              />
            </div>
            <Button
              type="submit"
              disabled={!helpfulResponse}
              onClick={() => {
                if (!helpfulResponse) return;
                setIsSubmitted(true);
              }}
              className="w-fit px-6 py-6 rounded rounded-lg bg-brand-blue-light disabled:cursor-not-allowed disabled:opacity-50"
            >
              Submit
            </Button>
          </>
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <span className="text-3xl font-semibold">
              Thanks for your feedback!
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default FeedbackForm;
