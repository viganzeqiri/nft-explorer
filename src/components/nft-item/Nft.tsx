import { Box, Image, Text } from "@chakra-ui/react";
import { type NftProperties } from "types/nft";

export interface INftProps extends NftProperties {}

function Nft({ name, image_url }: INftProps) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        transition="transform .2s"
        _hover={{ transform: "scale(1.05)" }}
        src={image_url}
        alt={name}
      />

      <Box p={4} borderTop="1px solid" borderColor="brand.border">
        <Text fontWeight="bold">{name}</Text>
      </Box>
    </Box>
  );
}

export { Nft };
