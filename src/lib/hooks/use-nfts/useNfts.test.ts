import { rest } from "msw";
import { renderHook, waitFor } from "@testing-library/react";
import { server } from "setupTests";
import { createWrapper } from "test-utils";

import { useNfts } from "./useNfts";

describe("useNfts test", () => {
  test("successful query hook", async () => {
    const { result } = renderHook(() => useNfts({ offset: 1 }), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    // @ts-ignore
    expect(result.current.data?.name).toBe("mocked-react-query");
  });

  test("failure query hook", async () => {
    server.use(
      rest.get("*", (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const { result } = renderHook(() => useNfts({ offset: 1 }), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeDefined();
  });
});
