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

export const ShopTableItems = [
  {
    imgSrc:
      "https://s.pstatic.net/shopping.phinf/20240605_10/449d22a6-4e1f-4295-b50d-abc41ae19967.jpg?type=f294_378",
    des: ["1벌에 9990원", "아이스팬츠1+1"],
  },
  {
    imgSrc:
      "https://s.pstatic.net/shopping.phinf/20240604_23/817fc2fb-b10f-478a-ba1a-58d3cc356a39.jpg?type=f294_378",
    des: ["박기량이 추천한", "블루투스 고글"],
  },
  {
    imgSrc:
      "https://s.pstatic.net/shopping.phinf/20240118_16/a9bae83a-03c7-4819-b2dd-518fede36eb4.jpg?type=f294_378",
    des: ["레전드 폭탄치즈", "이거절대 못끊어"],
  },
  {
    imgSrc:
      "https://s.pstatic.net/shopping.phinf/20240613_27/bcbfeca1-d7ff-428f-9870-3a96cb64d51f.jpg?type=f294_378",
    des: ["진짜 시원한데", "주름까지 옅어져!"],
  },
  {
    imgSrc:
      "https://s.pstatic.net/shopping.phinf/20240614_22/53f60182-74c8-4939-b1fc-8c032056bc16.jpg?type=f294_378",
    des: ["전상품 11%SALE", "시원한 여름코디"],
  },
  {
    imgSrc:
      "https://s.pstatic.net/shopping.phinf/20240610_20/fe83b7a0-14eb-4039-bf60-58672dd7bab2.jpg?type=f294_378",
    des: ["딱한번 사더라도", "제대로 만든 옷~"],
  },
  {
    imgSrc:
      "https://s.pstatic.net/shopping.phinf/20240614_22/976606cf-5e1d-4f05-98bb-ef634136af71.jpg?type=f294_378",
    des: ["반응 터졌다!", "특가찬스 득템해"],
  },
  {
    imgSrc:
      "https://s.pstatic.net/shopping.phinf/20240604_17/c18d11b5-d47f-4e2e-a106-82e82bb4be84.jpg?type=f294_378",
    des: ["인기만점 생화향", "최대 55% 할인중"],
  },
  {
    imgSrc:
      "https://s.pstatic.net/shopping.phinf/20240530_1/7f4b4be0-2e88-4b6a-a70e-5dc77d3668ba.jpg?type=f294_378",
    des: ["사랑스러운 하루", "전상품10%세일"],
  },
  {
    imgSrc:
      "https://s.pstatic.net/shopping.phinf/20240607_26/157da405-699b-48d7-b774-42c724c223c9.jpg?type=f294_378",
    des: ["시선집중~예뻐", "스트링 원피스"],
  },
];
