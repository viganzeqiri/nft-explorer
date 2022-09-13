import { FunctionComponent } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Flex, Heading, Link } from "@chakra-ui/react";
import { PageContainer } from "components";

const NotFound: FunctionComponent = () => {
  return (
    <PageContainer>
      <Flex
        justifyContent="center"
        alignItems="center"
        direction="column"
        minH="80vh"
      >
        <Heading size="2xl" mb={2}>
          Oopps...!
        </Heading>
        <Heading size="md">Something went wrong</Heading>
        <Heading size="md">
          Take me back{" "}
          <Link as={RouterLink} color="brand.primary" to="/">
            home.
          </Link>
        </Heading>
      </Flex>
    </PageContainer>
  );
};

export { NotFound };
