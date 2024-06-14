interface ShopLinksProps {
  name: string;
}

interface ShopQuickLinkProps extends ShopLinksProps {
  position: string;
  style?: React.CSSProperties;
}

export const ShopHeaderLinks: ShopLinksProps[] = [
  { name: "쇼핑" },
  { name: "맨즈" },
  { name: "원쁠딜" },
  { name: "쇼핑라이브" },
];

export const ShopLinks: ShopLinksProps[][] = [
  [{ name: "쿠팡" }, { name: "G마켓" }, { name: "옥션" }, { name: "11번가" }],
  [
    { name: "SSG닷컴" },
    { name: "올리브영" },
    { name: "CJ온스타일" },
    { name: "위메프" },
  ],

  [{ name: "GS SHOP" }, { name: "하프클럽" }, { name: "패션플러스" }],
];

export const ShopQuickLinks: ShopQuickLinkProps[] = [
  { name: "쇼핑홈", position: "-34px 0px" },
  { name: "리뷰적립", position: "-68px -34px" },
  { name: "주문", position: "-34px -34px" },
  {
    name: "장바구니",
    position: "-19px -121px",
    style: { width: "17px", height: "16px" },
  },
];
