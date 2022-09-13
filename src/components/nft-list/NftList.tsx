import { Grid, GridItem } from "@chakra-ui/react";
import { type NftProperties } from "types/nft";

import { Nft } from "../nft-item";

export interface INftListProps {
  data: NftProperties[];
}

function NftList({ data }: INftListProps) {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={8} py={8}>
      {data.map((nft) => (
        <GridItem key={nft.id}>
          <Nft {...nft} />
        </GridItem>
      ))}
    </Grid>
  );
}

export { NftList };
