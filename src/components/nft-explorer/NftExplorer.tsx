import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorMode,
  Heading,
  Center,
} from "@chakra-ui/react";
import { ItemsSkeleton } from "components/items-skeleton";
import { NftList } from "components/nft-list/NftList";
import { useNfts } from "lib/hooks";
import { makeTabs } from "utils/makeTabs";

interface INftExplorerProps {
  offset: number;
}

function NftExplorer({ offset }: INftExplorerProps) {
  const { colorMode } = useColorMode();
  const { data, isLoading, isError } = useNfts({ offset });
  const nfts = data?.greatValues || [];

  if (isLoading) {
    return <ItemsSkeleton />;
  }

  if (isError) {
    return (
      <Box minH="80vh">
        <Center mt={20}>
          <Heading>An error has occurred</Heading>
        </Center>
      </Box>
    );
  }

  const tabs = makeTabs(nfts);

  const isDarkMode = colorMode === "dark";
  const color = isDarkMode ? "brand.secondary" : "brand.primary";

  return (
    <Box minH="80vh">
      <Tabs isLazy colorScheme={color} color={color}>
        <TabList flexWrap="wrap" data-testid="tab-list">
          {tabs.map(({ name, key }) => (
            <Tab key={key}>{name}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabs.map((tab) => (
            <TabPanel key={tab.key} p={0}>
              <NftList data={nfts} filtringKey={tab.key} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export { NftExplorer };
