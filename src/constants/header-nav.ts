interface LinkProps {
  name: string;
  position: string;
}

export const NavLink: LinkProps[][] = [
  [
    { name: "menu", position: "-326px -161px" },
    { name: "pay", position: "-285px -41px" },
  ],
  [
    { name: "talk", position: "-285px -173px" },
    { name: "notify", position: "-326px -227px" },
    { name: "shopping", position: "-285px -107px" },
  ],
];

export const ShortcutLink: LinkProps[] = [
  { name: "메일", position: "-244px -41px" },
  { name: "카페", position: "-86px -184px" },
  { name: "블로그", position: "-45px -184px" },
  { name: "쇼핑", position: "-164px -229px" },
  { name: "뉴스", position: "-82px -229px" },
  { name: "증권", position: "-205px -229px" },
  { name: "부동산", position: "-123px -229px" },
  { name: "지도", position: "-244px -82px" },
  { name: "웹툰", position: "-285px 0px" },
  { name: "치지직", position: "-193px 0px" },
  { name: "", position: "-41px -229px" },
];
