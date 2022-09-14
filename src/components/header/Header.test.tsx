import { render, screen } from "@testing-library/react";
import { ReactElement } from "react";
import { MemoryRouter } from "react-router-dom";

import { Header } from "./Header";

describe("<Header /> test render", () => {
  let element: ReactElement;

  beforeEach(() => {
    element = (
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );
  });

  test("renders title correctly", () => {
    render(element);
    const title = screen.getByText(/Explore/i);

    expect(title).toBeInTheDocument();
  });

  test("renders toggle button correctly", () => {
    render(element);
    const toggleButton = screen.getByTestId("toggle-button");

    expect(toggleButton).toBeInTheDocument();
  });
});
