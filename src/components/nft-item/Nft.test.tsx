import { render, screen } from "@testing-library/react";
import { nftMock } from "mocks/nft";

import { Nft } from "./Nft";

describe("<Nft /> test render", () => {
  test("renders item name correctly", () => {
    render(<Nft {...{ ...nftMock, name: "foo" }} />);

    const name = screen.getByText(/foo/i);
    expect(name).toBeInTheDocument();
  });
});
