import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { ItemsSkeleton } from "components/items-skeleton";
import { NftList } from "components/nft-list/NftList";
import { useNfts } from "lib/hooks";
import { makeTabs } from "utils/makeTabs";

interface INftExplorerProps {
  offset: number;
}

function NftExplorer({ offset }: INftExplorerProps) {
  const { data, isLoading } = useNfts({ offset });
  const nfts = data?.greatValues;

  if (isLoading) {
    return <ItemsSkeleton />;
  }

  if (!nfts?.length) return null;

  const tabs = makeTabs(nfts);

  return (
    <Box minH="80vh">
      <Tabs isLazy colorScheme="brand.primary" color="brand.primary">
        <TabList flexWrap="wrap">
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
