import { FunctionComponent } from "react";
import { NftExplorer, PageContainer } from "components";

interface IExplorerProps {}

const Explorer: FunctionComponent<IExplorerProps> = () => {
  return (
    <PageContainer>
      <NftExplorer />
    </PageContainer>
  );
};

export { Explorer };
