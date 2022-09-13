import { Container } from "@chakra-ui/react";

import { FunctionComponent, type ReactNode } from "react";

interface IPageContainerProps {
  children?: ReactNode;
}

const PageContainer: FunctionComponent<IPageContainerProps> = ({
  children,
}) => {
  return (
    <Container border="1px solid red" py={4} maxW={["90%", "container.xl"]}>
      {children}
    </Container>
  );
};

export { PageContainer };
