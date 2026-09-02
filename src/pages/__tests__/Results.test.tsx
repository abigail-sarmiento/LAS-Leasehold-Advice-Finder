import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Results from "../Results";

describe("Results", () => {
  it("shows three resources from the selected category", () => {
    render(<Results category="costsAndCharges" />);

    const categoryBadges = screen.getAllByText("Costs and charges", {
      exact: true,
    });

    expect(categoryBadges).toHaveLength(3);
  });

  it("does not show resources from another category", () => {
    render(<Results category="disputes" />);

    expect(
      screen.queryByText("An introduction to leasehold"),
    ).not.toBeInTheDocument();
    expect(screen.getAllByText("Disputes", { exact: true })).toHaveLength(3);
  });
});
