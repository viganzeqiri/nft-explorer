import { useQuery } from "react-query";
import { QUERY_KEYS } from "lib/api/queryKeys";
import { ENDPOINTS } from "lib/api/endpoints";
import { CryptoKittiesData } from "types/nft";

interface IUseNftsProps {
  offset: number;
}

function useNfts({ offset }: IUseNftsProps) {
  return useQuery<CryptoKittiesData, Error>(
    [QUERY_KEYS.NFTS_LIST, offset],
    () => fetchNfts(offset)
  );
}

async function fetchNfts(offset = 0, limit = 12) {
  const result = await fetch(
    `${ENDPOINTS.CRYPTO_KITTIES}?offset=${offset}&limit=${limit}`
  );
  return result.json();
}

export { useNfts };
