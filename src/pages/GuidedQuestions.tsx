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

function GuidedQuestions() {
  const handleQuestionnaireSubmit = () => {};

  return (
    <section>
      <div className="page-width py-12 md:py-14 gap-12">
        <Questionnaire
          items={questionsByCategory.buildingManagement}
          onSubmit={handleQuestionnaireSubmit}
        >
          <QuestionnaireProgress
            className="w-full"
            render={(props, state) => (
              <div {...props}>
                <div className="mb-2 flex gap-1.5" aria-hidden="true">
                  {Array.from({ length: state.total }, (_, index) => (
                    <span
                      key={index}
                      className={
                        index < state.current
                          ? "h-1.5 flex-1 rounded-full bg-primary"
                          : "h-1.5 flex-1 rounded-full bg-muted"
                      }
                    />
                  ))}
                </div>
                <span>
                  Question {state.current} of {state.total}
                </span>
              </div>
            )}
          />

          {questionsByCategory.buildingManagement.map((question) => (
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
            <QuestionnaireNext />
            <QuestionnaireSubmit />
          </QuestionnaireActions>
        </Questionnaire>
      </div>
    </section>
  );
}

export default GuidedQuestions;
