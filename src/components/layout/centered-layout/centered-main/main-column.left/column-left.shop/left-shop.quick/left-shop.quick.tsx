import { ShopQuickLinks } from "@/constants";
import Styles from "./index.module.css";

const LeftShopQuick = () => {
  return (
    <div className={Styles.left_quick}>
      <ul className={Styles.quick_list}>
        {ShopQuickLinks.map((link, i) => {
          return (
            <li key={`quick_${i}`}>
              <div>
                <i
                  className={Styles.quick_icon}
                  style={
                    link.style
                      ? {
                          ...link.style,
                          backgroundPosition: link.position,
                        }
                      : {
                          backgroundPosition: link.position,
                          width: "32px",
                          height: "32px",
                        }
                  }
                />
              </div>
              <text>{link.name}</text>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftShopQuick;
