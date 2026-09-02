import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Home from "../Home";

describe("Home", () => {
  it("renders the introduction and how-it-works content", () => {
    render(<Home onClickGetAdvice={vi.fn()} />);

    expect(
      screen.getByRole("heading", {
        name: /get free, government funded advice/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "How it works" }),
    ).toBeInTheDocument();
  });

  it("calls the advice callback when Get advice is clicked", () => {
    const onClickGetAdvice = vi.fn();
    render(<Home onClickGetAdvice={onClickGetAdvice} />);

    fireEvent.click(screen.getByRole("button", { name: "Get advice" }));

    expect(onClickGetAdvice).toHaveBeenCalledOnce();
  });
});
