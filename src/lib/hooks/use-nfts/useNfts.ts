import { useQuery } from "react-query";
import { QUERY_KEYS } from "lib/api/queryKeys";
import { ENDPOINTS } from "lib/api/endpoints";
import { CryptoKittiesData } from "types/nft";

async function fetchNfts(_: unknown, offset = 0, limit = 10) {
  const result = await fetch(
    `${ENDPOINTS.CRYPTO_KITTIES}?offset=${offset}&limit=${limit}`
  );
  return result.json();
}

function useNfts() {
  const data = useQuery<CryptoKittiesData, Error>(
    [QUERY_KEYS.NFTS_LIST],
    fetchNfts
  );

  return data;
}

export { useNfts };
