import { rest } from "msw";
import { screen } from "@testing-library/react";
import { renderWithClient } from "test-utils";
import { server } from "setupTests";

import { NftExplorer } from "./NftExplorer";

describe("<NftExplorer /> test render", () => {
  test("successful query component", async () => {
    renderWithClient(<NftExplorer offset={1} />);

    expect(await screen.findByTestId("tab-list")).toBeInTheDocument();
  });

  test("failure query component", async () => {
    server.use(
      rest.get("*", (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    renderWithClient(<NftExplorer offset={1} />);

    expect(
      await screen.findByText(/an error has occurred/i)
    ).toBeInTheDocument();
  });
});
