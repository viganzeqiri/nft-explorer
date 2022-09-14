import { Box, Image, Text, useColorMode } from "@chakra-ui/react";
import { type NftProperties } from "types/nft";

export interface INftProps extends NftProperties {}

function Nft({ name, image_url }: INftProps) {
  const { colorMode } = useColorMode();

  const isDarkMode = colorMode === "dark";
  const bgColor = !isDarkMode ? "brand.secondary" : "brand.primary";
  const borderWidth = !isDarkMode ? "1px" : "0";

  return (
    <Box
      maxW="sm"
      bg="white"
      borderRadius="lg"
      borderWidth={borderWidth}
      borderColor="brand.border"
      overflow="hidden"
    >
      <Image
        transition="transform .4s"
        _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
        src={image_url}
        alt={name}
      />

      <Box p={4} bg={bgColor}>
        <Text fontWeight="bold">{name}</Text>
      </Box>
    </Box>
  );
}

export { Nft };
