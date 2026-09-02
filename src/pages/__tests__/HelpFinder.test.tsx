import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import HelpFinder, {
  initialHelpFinderState,
  type HelpFinderState,
} from "../HelpFinder";

function renderHelpFinder(
  overrides: Partial<HelpFinderState> = {},
  onChange = vi.fn(),
  onContinue = vi.fn(),
) {
  const value = { ...initialHelpFinderState, ...overrides };

  return {
    onChange,
    onContinue,
    ...render(
      <HelpFinder value={value} onChange={onChange} onContinue={onContinue} />,
    ),
  };
}

describe("HelpFinder", () => {
  it("keeps Continue disabled until a situation is selected", () => {
    renderHelpFinder();

    expect(screen.getByRole("button", { name: "Continue" })).toBeDisabled();
  });

  it("reports the selected situation", () => {
    const onChange = vi.fn();
    renderHelpFinder({}, onChange);

    fireEvent.click(screen.getByRole("heading", { name: "Costs and charges" }));

    expect(onChange).toHaveBeenCalledWith({
      ...initialHelpFinderState,
      selectedSituation: "costsAndCharges",
    });
  });

  it("continues with the selected category", () => {
    const onContinue = vi.fn();
    renderHelpFinder({ selectedSituation: "disputes" }, vi.fn(), onContinue);

    fireEvent.click(screen.getByRole("button", { name: "Continue" }));

    expect(onContinue).toHaveBeenCalledWith("disputes");
  });
});
