import { Container } from "@chakra-ui/react";

import { FunctionComponent, type ReactNode } from "react";

interface IPageContainerProps {
  children?: ReactNode;
}

const PageContainer: FunctionComponent<IPageContainerProps> = ({
  children,
}) => {
  return (
    <Container py={4} maxW={["90%", "container.2xl"]}>
      {children}
    </Container>
  );
};

export { PageContainer };
