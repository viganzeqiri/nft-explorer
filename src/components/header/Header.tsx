import { Heading, chakra } from "@chakra-ui/react";
import { PageContainer } from "components/page-container";

function Header() {
  return (
    <chakra.header
      borderBottom="1px solid"
      borderColor="brand.border"
      color="brand.text"
    >
      <PageContainer>
        <Heading>GELATO NETWORK</Heading>
      </PageContainer>
    </chakra.header>
  );
}

export { Header };
