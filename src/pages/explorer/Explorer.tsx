import { FunctionComponent, useCallback, useState } from "react";
import { NftExplorer, PageContainer, Pagination } from "components";

const Explorer: FunctionComponent = () => {
  const [offset, setOffset] = useState(0);

  const handleOffsetChange = useCallback((offset: number) => {
    setOffset(offset);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <PageContainer>
      <NftExplorer offset={offset} />

      <Pagination offset={offset} onChange={handleOffsetChange} />
    </PageContainer>
  );
};

export { Explorer };
