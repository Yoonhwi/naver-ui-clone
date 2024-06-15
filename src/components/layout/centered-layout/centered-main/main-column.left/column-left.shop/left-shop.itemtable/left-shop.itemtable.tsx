import { ShopTableItems } from "@/constants";
import Styles from "./index.module.css";

const LeftShopItemTable = () => {
  return (
    <div className={Styles.table}>
      {ShopTableItems.map((item, i) => {
        return (
          <div className={Styles.table_item} key={`item_${i}`}>
            <img
              src={item.imgSrc}
              style={{
                width: "98px",
                height: "126px",
              }}
            />
            <div
              style={{
                fontSize: "13.65px",
                display: "flex",
                flexDirection: "column",
                color: "rgb(16, 16, 16)",
              }}
            >
              {item.des.map((text, textIndex) => {
                return <text key={`${i}_${textIndex}`}>{text}</text>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LeftShopItemTable;
