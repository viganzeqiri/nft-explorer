import { Box, Skeleton, Grid, GridItem } from "@chakra-ui/react";

interface IItemsSkeletonProps {
  itemsNumber?: number;
}

function ItemsSkeleton({ itemsNumber = 20 }: IItemsSkeletonProps) {
  return (
    <Box>
      <Skeleton height="70px" borderRadius="lg"></Skeleton>

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
        {[...Array.from({ length: itemsNumber }, (_, i) => i)].map((item) => (
          <GridItem key={item}>
            <Skeleton height="320px" borderRadius="lg" />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export { ItemsSkeleton };
