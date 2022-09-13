import { NftProperties } from "types/nft";

export function makeTabs(nfts: NftProperties[]) {
  const uniqueColors = [...new Set(nfts.map((nft) => nft.color))];

  const tabs: { name: string; key: keyof NftProperties }[] = [
    { name: "All", key: "" as keyof NftProperties },
    ...uniqueColors.map((color) => ({
      name: color.charAt(0).toUpperCase() + color.slice(1),
      key: color as keyof NftProperties,
    })),
  ];

  nfts.forEach((nft) => {
    const tabsToAdd = ["is_fancy", "is_exclusive", "is_special_edition"];
    const propertyExists = tabs.some((tab) => tabsToAdd.includes(tab.key));

    if (propertyExists) return;

    if (!!nft["is_fancy"])
      return tabs.push({
        name: "Fancy",
        key: "is_fancy",
      });
    if (!!nft["is_exclusive"])
      return tabs.push({
        name: "Exclusive",
        key: "is_exclusive",
      });
    if (!!nft["is_special_edition"])
      return tabs.push({
        name: "Special Edition",
        key: "is_special_edition",
      });
  });

  return tabs;
}
