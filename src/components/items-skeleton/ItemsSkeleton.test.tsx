import { render, screen } from "@testing-library/react";

import { ItemsSkeleton } from "./ItemsSkeleton";

describe("<ItemsSkeleton /> test render", () => {
  test("renders 20 skeleton elements, since itemsNumber prop is set to default", () => {
    render(<ItemsSkeleton />);
    const skeletons = screen.getAllByTestId("skeleton");

    expect(skeletons.length).toBe(20);
  });

  test("renders skeleton elements, based on itemsNumber prop value", () => {
    render(<ItemsSkeleton itemsNumber={40} />);
    const skeletons = screen.getAllByTestId("skeleton");

    expect(skeletons.length).toBe(40);
  });
});
