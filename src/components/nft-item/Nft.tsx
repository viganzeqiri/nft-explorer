import { Badge, Box, Image } from "@chakra-ui/react";

import { type NftProperties } from "types/nft";

function Nft({
  name,
  image_url,
  color,
  is_fancy,
  is_exclusive,
  is_special_edition,
}: NftProperties) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image_url} alt={name} />
    </Box>
  );
}

export { Nft };
