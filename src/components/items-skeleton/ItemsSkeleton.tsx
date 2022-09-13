import { Box, Skeleton, Grid, GridItem } from "@chakra-ui/react";

interface IItemsSkeletonProps {
  itemsNumber?: number;
}

ItemsSkeleton.defaultProps = {
  itemsNumber: 20,
};

function ItemsSkeleton({ itemsNumber }: IItemsSkeletonProps) {
  return (
    <Box>
      <Skeleton height="70px" borderRadius="lg"></Skeleton>

      <Grid templateColumns="repeat(4, 1fr)" gap={8} py={8}>
        {[...Array.from({ length: 20 }, (_, i) => i)].map((item) => (
          <GridItem key={item}>
            <Skeleton height="320px" borderRadius="lg" />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export { ItemsSkeleton };
