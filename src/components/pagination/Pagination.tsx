import { Box, Button, Center, Flex } from "@chakra-ui/react";

interface IPaginationProps {
  offset: number;
  onChange: (offset: number) => void;
}

function Pagination({ offset, onChange }: IPaginationProps) {
  return (
    <Center>
      <Flex minW="200px" justifyContent="space-around" alignItems="center">
        <Button onClick={() => onChange(offset - 1)} disabled={offset <= 0}>
          Prev
        </Button>

        <Box>{offset + 1}</Box>
        <Button onClick={() => onChange(offset + 1)}>Next</Button>
      </Flex>
    </Center>
  );
}

export { Pagination };
