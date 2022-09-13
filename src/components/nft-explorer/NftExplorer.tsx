import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { NftList } from "components/nft-list/NftList";
import { useNfts } from "lib/hooks";

function NftExplorer() {
  const { data, isLoading } = useNfts();
  const nfts = data?.greatValues;

  if (!nfts?.length) return null;

  return (
    <Box>
      <Tabs isFitted colorScheme="brand.primary" color="brand.primary">
        <TabList>
          <Tab>Tab one</Tab>
          <Tab>Tab two</Tab>
          <Tab>Tab three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <NftList data={nfts} />
          </TabPanel>
          <TabPanel>
            <NftList data={nfts} />
          </TabPanel>
          <TabPanel>
            <NftList data={nfts} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export { NftExplorer };
