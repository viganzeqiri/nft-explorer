import {
  Box,
  Center,
  Flex,
  IconButton,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

interface IPaginationProps {
  offset: number;
  onChange: (offset: number) => void;
}

function Pagination({ offset, onChange }: IPaginationProps) {
  const { colorMode } = useColorMode();

  const isDarkMode = colorMode === "dark";
  const color = isDarkMode ? "brand.secondary" : "brand.primary";

  return (
    <Center>
      <Flex
        minW="200px"
        justifyContent="space-around"
        alignItems="center"
        color={color}
      >
        <IconButton
          icon={<ArrowLeftIcon w={3} h={3} />}
          onClick={() => onChange(offset - 1)}
          disabled={offset <= 0}
          aria-label="Prev"
        />

        <Box>
          <Text fontSize="large" fontWeight="extrabold">
            {offset + 1}
          </Text>
        </Box>

        <IconButton
          icon={<ArrowRightIcon w={3} h={3} />}
          onClick={() => onChange(offset + 1)}
          aria-label="Next"
        />
      </Flex>
    </Center>
  );
}

export { Pagination };
