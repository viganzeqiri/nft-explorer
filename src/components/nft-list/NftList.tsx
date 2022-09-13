import { Box } from "@chakra-ui/react";
import { type NftProperties } from "types/nft";

import { Nft } from "../nft-item";

export interface INftListProps {
  data: NftProperties[];
}

function NftList({ data }: INftListProps) {
  return (
    <Box>
      {data.map((nft) => (
        <Nft {...nft} />
      ))}
    </Box>
  );
}

export { NftList };
