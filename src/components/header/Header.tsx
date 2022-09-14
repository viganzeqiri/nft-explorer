import { Heading, chakra, Flex, Switch } from "@chakra-ui/react";
import { PageContainer } from "components/page-container";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  return (
    <chakra.header
      borderBottom="1px solid"
      borderColor="brand.border"
      color="brand.text"
      py={8}
    >
      <PageContainer>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading>
            <RouterLink to="/" reloadDocument>
              Explore Nfts
            </RouterLink>
          </Heading>

          <Switch />
        </Flex>
      </PageContainer>
    </chakra.header>
  );
}

export { Header };
