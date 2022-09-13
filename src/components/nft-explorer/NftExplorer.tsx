import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { NftList } from "components/nft-list/NftList";
import { useNfts } from "lib/hooks";
import { makeTabs } from "utils/makeTabs";

function NftExplorer() {
  const { data } = useNfts();
  const nfts = data?.greatValues;

  if (!nfts?.length) return null;

  const tabs = makeTabs(nfts);

  return (
    <Box>
      <Tabs isLazy colorScheme="brand.primary" color="brand.primary">
        <TabList>
          {tabs.map(({ name, key }) => (
            <Tab key={key}>{name}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabs.map((tab) => (
            <TabPanel key={tab.key}>
              <NftList data={nfts} filtringKey={tab.key} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export { NftExplorer };
