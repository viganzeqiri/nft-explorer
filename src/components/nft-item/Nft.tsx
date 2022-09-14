import { Box, Image, Text } from "@chakra-ui/react";
import { type NftProperties } from "types/nft";

export interface INftProps extends NftProperties {}

function Nft({ name, image_url }: INftProps) {
  return (
    <Box
      maxW="sm"
      bg="white"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image
        transition="transform .4s"
        _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
        src={image_url}
        alt={name}
      />

      <Box
        p={4}
        bg="brand.secondary"
        borderTop="1px solid"
        borderColor="brand.border"
      >
        <Text fontWeight="bold">{name}</Text>
      </Box>
    </Box>
  );
}

export { Nft };
