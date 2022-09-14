import { Grid, GridItem } from "@chakra-ui/react";
import { type NftProperties } from "types/nft";

import { Nft } from "../nft-item";

export interface INftListProps {
  data: NftProperties[];
  filtringKey?: keyof NftProperties;
}

function NftList({ data, filtringKey }: INftListProps) {
  const filteredData = !filtringKey
    ? data
    : data.filter((entry) => {
        return (
          entry[filtringKey] === filtringKey || entry.color === filtringKey
        );
      });

  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
      ]}
      gap={8}
      py={8}
    >
      {filteredData.map((nft) => (
        <GridItem key={nft.id}>
          <Nft {...nft} />
        </GridItem>
      ))}
    </Grid>
  );
}

export { NftList };
