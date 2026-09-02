import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import GuidedQuestions from "../GuidedQuestions";

describe("GuidedQuestions", () => {
  it("renders questions for the selected category", () => {
    render(
      <GuidedQuestions
        category="costsAndCharges"
        onSubmit={vi.fn()}
        onBack={vi.fn()}
      />,
    );

    expect(screen.getByText("COSTS AND CHARGES")).toBeInTheDocument();
    expect(
      screen.getByRole("group", {
        name: "Which type of cost is the main issue?",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Service charge")).toBeInTheDocument();
  });

  it("calls onBack when Back is clicked", () => {
    const onBack = vi.fn();
    render(
      <GuidedQuestions
        category="leaseholdEssentials"
        onSubmit={vi.fn()}
        onBack={onBack}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "Back" }));

    expect(onBack).toHaveBeenCalledOnce();
  });
});
