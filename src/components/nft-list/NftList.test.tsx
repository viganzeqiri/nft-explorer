import { render, screen } from "@testing-library/react";
import { nftMock } from "mocks/nft";
import { NftProperties } from "types/nft";

import { NftList } from "./NftList";

describe("<NftList /> test render", () => {
  test("renders data correctly", () => {
    render(<NftList data={[{ ...nftMock, name: "foo" }]} />);

    const name = screen.getByText(/foo/i);
    expect(name).toBeInTheDocument();

    const inexistingName = screen.queryByText(/bar/i);
    expect(inexistingName).not.toBeInTheDocument();
  });

  test("renders and filters data correctly with correct filtringKey", () => {
    render(
      <NftList
        data={[{ ...nftMock, name: "foo" }]}
        filtringKey={"thundergrey" as keyof NftProperties}
      />
    );

    const name = screen.getByText(/foo/i);
    expect(name).toBeInTheDocument();
  });

  test("renders and filters data correctly with incorrect filtringKey", () => {
    render(
      <NftList data={[{ ...nftMock, name: "foo" }]} filtringKey="is_fancy" />
    );

    const name = screen.queryByText(/foo/i);
    expect(name).not.toBeInTheDocument();
  });
});
