import { Button } from "@/components/ui/button";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire";
import questionsByCategory from "../data/questions";
import { categoryDetails, type Category } from "../types/categories";
import { ArrowRight, ChevronLeft } from "lucide-react";

type GuidedQuestionsProps = {
  category: Category | null;
  onSubmit: () => void;
  onBack: () => void;
};

function GuidedQuestions({ category, onSubmit, onBack }: GuidedQuestionsProps) {
  const items = category ? questionsByCategory[category] : [];
  const categoryDetail = category ? categoryDetails[category] : null;
  const CategoryIcon = categoryDetail?.icon;

  const handleQuestionnaireSubmit = () => {
    onSubmit();
  };

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top_right,rgba(122,214,234,0.22),transparent_55%)]" />
      <div className="page-width relative flex flex-col gap-8 py-8 md:gap-10 md:py-12">
        <div className="flex items-center justify-between gap-4">
          <Button
            variant="outline"
            onClick={onBack}
            className="flex items-center justify-center gap-2 bg-white/70"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>
          <span className="text-right text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Guided advice
          </span>
        </div>

        <div className="mx-auto flex w-full max-w-3xl items-start gap-4">
          {CategoryIcon ? (
            <div className="mt-1 flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-blue text-brand-blue-light shadow-sm">
              <CategoryIcon className="size-6" aria-hidden="true" />
            </div>
          ) : null}
          <div>
            <p className="mb-2 text-sm font-bold text-brand-blue leading-relaxed">
              {categoryDetail?.label.toUpperCase() ?? "Your situation"}
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
              Let&apos;s narrow this down
            </h1>
            <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground">
              Answer a few short questions and we&apos;ll point you towards the
              most useful next steps.
            </p>
          </div>
        </div>

        <Questionnaire
          items={items}
          onSubmit={handleQuestionnaireSubmit}
          className="mx-auto max-w-3xl rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_18px_50px_-28px_rgba(0,60,113,0.45)] sm:p-8"
        >
          <QuestionnaireProgress
            className="w-full"
            render={(props, state) => (
              <div {...props}>
                <div className="mb-3 flex gap-1.5" aria-hidden="true">
                  {Array.from({ length: state.total }, (_, index) => (
                    <span
                      key={index}
                      className={
                        index < state.current
                          ? "h-2 flex-1 rounded-full bg-brand-blue transition-colors"
                          : "h-2 flex-1 rounded-full bg-slate-100 transition-colors"
                      }
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Question {state.current} of {state.total}
                </span>
              </div>
            )}
          />
          {items.map((question) => (
            <QuestionnaireItem
              key={question.name}
              name={question.name}
              required={question.required}
            >
              <QuestionnaireTitle>{question.prompt}</QuestionnaireTitle>
              <QuestionnaireDescription>
                {question.description}
              </QuestionnaireDescription>
              <QuestionnaireChoices>
                {question.choices.map((choice) => (
                  <QuestionnaireChoice key={choice.value} value={choice.value}>
                    <span className="font-medium">{choice.label}</span>
                    {choice.description ? (
                      <span className="text-muted-foreground">
                        {choice.description}
                      </span>
                    ) : null}
                  </QuestionnaireChoice>
                ))}
                {question.input ? (
                  <QuestionnaireInput
                    aria-label={question.input.label}
                    placeholder={question.input.placeholder}
                  />
                ) : null}
              </QuestionnaireChoices>
              <QuestionnaireError />
            </QuestionnaireItem>
          ))}
          <QuestionnaireActions>
            <QuestionnairePrevious />
            <QuestionnaireSkip />
            <QuestionnaireNext>
              Next <ArrowRight className="size-4" aria-hidden="true" />
            </QuestionnaireNext>
            <QuestionnaireSubmit />
          </QuestionnaireActions>
        </Questionnaire>
      </div>
    </section>
  );
}

export default GuidedQuestions;
