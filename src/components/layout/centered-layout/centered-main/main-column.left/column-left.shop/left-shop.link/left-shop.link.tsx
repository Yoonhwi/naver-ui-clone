import { ShopLinks } from "@/constants";
import Styles from "./index.module.css";
import { DividerDot } from "@/components";

const LeftShopLink = () => {
  return (
    <div className={Styles.left_link}>
      {ShopLinks.map((row, rowIndex) => {
        return (
          <div key={`row_${rowIndex}`} className={Styles.link_row}>
            {row.map((shop, shopIndex) => {
              return (
                <>
                  <div
                    key={`${rowIndex}_${shopIndex}`}
                    className={Styles.link_item}
                  >
                    <text>{shop.name}</text>
                  </div>
                  {shopIndex !== row.length - 1 && <DividerDot />}
                </>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default LeftShopLink;
