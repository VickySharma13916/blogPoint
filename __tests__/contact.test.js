import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewsMedia from "../src/components/NewsAndMedia";

test("should load news&media page", () => {
  render(<NewsMedia />);

  const heading = screen.getByRole("div");

  expect(heading).toBeInTheDocument();
});
test("should load news&media page with press release", () => {
  render(<NewsMedia />);

  const press = screen.getByText("Press Release");

  expect(press).toBeInTheDocument();
});
