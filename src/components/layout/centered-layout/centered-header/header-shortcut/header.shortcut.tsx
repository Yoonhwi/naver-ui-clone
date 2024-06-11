import { HeaderBtn } from "@/components/common";
import Styles from "./index.module.css";
import { ShortcutLink } from "@/constants";

const HeaderShortcut = () => {
  return (
    <div className={Styles.outer_box}>
      {ShortcutLink.map((item, i) => {
        if (item.name === "치지직") {
          return (
            <div className={Styles.btn_area}>
              <div className={Styles.btn_area_btn}>
                <img
                  src="https://s.pstatic.net/static/www/mobile/edit/20240112_1095/upload_1705057885416AaxUM.png"
                  width="40"
                  height="40"
                  alt="치지직"
                />
              </div>
              <text className={Styles.btn_area_text}>{item.name}</text>
            </div>
          );
        }
        return (
          <div className={Styles.btn_area}>
            <div className={Styles.btn_area_btn}>
              <HeaderBtn
                key={i}
                name={item.name}
                position={item.position}
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <text className={Styles.btn_area_text}>{item.name}</text>
          </div>
        );
      })}
    </div>
  );
};
export default HeaderShortcut;
