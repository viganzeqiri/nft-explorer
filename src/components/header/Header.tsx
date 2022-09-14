import { Heading, chakra, Flex, Switch, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { PageContainer } from "components/page-container";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDarkMode = colorMode === "dark";
  const color = isDarkMode ? "brand.secondary" : "brand.text";

  console.log({ isDarkMode });
  return (
    <chakra.header
      borderBottom="1px solid"
      borderColor="brand.border"
      color="brand.text"
      py={8}
    >
      <PageContainer>
        <Flex
          justifyContent="space-between"
          flexDir={["column", "row"]}
          alignItems={["flex-start", "center"]}
        >
          <Heading color={color}>
            <RouterLink to="/" reloadDocument>
              Explore Nfts
            </RouterLink>
          </Heading>

          <Flex
            alignItems="center"
            justifyContent="space-between"
            minW="100px"
            mt={[4, 0]}
          >
            <SunIcon color={color} w={6} h={6} />
            <Switch
              colorScheme="yellow"
              onChange={toggleColorMode}
              isChecked={isDarkMode}
            />
            <MoonIcon color={color} w={6} h={6} />
          </Flex>
        </Flex>
      </PageContainer>
    </chakra.header>
  );
}

export { Header };
