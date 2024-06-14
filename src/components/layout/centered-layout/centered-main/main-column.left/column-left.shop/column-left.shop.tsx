import { ShopHeaderLinks } from "@/constants";
import Styles from "./index.module.css";
import { LeftShopLink } from "./left-shop.link";
import { DividerDot, DividerSlash } from "@/components";
import { LeftShopQuick } from "./left-shop.quick";
import { LeftShopAd } from "./left-shop.ad";
import { LeftShopItemTable } from "./left-shop.itemtable";

const ColumnLeftShop = () => {
  return (
    <div className={Styles.outer_box}>
      <div className={Styles.row_top}>
        <header className={Styles.header}>
          {ShopHeaderLinks.map((link, i) => {
            return (
              <>
                <text
                  key={`shop_header_${i}`}
                  style={{
                    color: i === 0 ? "rgb(8, 8, 8)" : "rgb(8,8,8,0.5)",
                  }}
                >
                  {link.name}
                </text>
                {i !== ShopHeaderLinks.length - 1 && <DividerSlash />}
              </>
            );
          })}
        </header>
        <div className={Styles.body}>
          <div className={Styles.body_left}>
            <LeftShopLink />
            <LeftShopQuick />
            <LeftShopAd />
          </div>
          <div className={Styles.body_right}>
            <LeftShopItemTable />
          </div>
        </div>
      </div>
      <div className={Styles.row_center}>
        <div className={Styles.text_area}>
          <text
            style={{
              color: "rgb(16, 16, 16)",
              fontWeight: "700",
            }}
          >
            오늘의 혜택{" "}
          </text>
          <DividerDot />
          <img
            src="https://s.pstatic.net/shopping.phinf/20230525_14/6692a602-cfa6-42e6-b57c-fffa188195bc.jpg"
            style={{
              height: "13px",
            }}
          />

          <text> GS샵이 추천하는 상품을 모아모아~ </text>
          <text style={{ color: "rgb(152, 88, 245)" }}>오늘의 특가!</text>
        </div>
      </div>
      <div className={Styles.row_bottom}>
        <div className={Styles.paging_icon_area}>
          <i className={Styles.paging_icon} />
        </div>
        <div
          style={{
            display: "flex",
            gap: "4px",
            fontWeight: 800,
            color: "black",
          }}
        >
          <text style={{ color: "rgb(152, 88, 245)" }}>쇼핑아이템</text>
          <text>더보기 1/18</text>
        </div>
        <div className={Styles.paging_icon_area}>
          <i className={Styles.paging_icon} style={{ transform: "none" }} />
        </div>
      </div>
    </div>
  );
};

export default ColumnLeftShop;
