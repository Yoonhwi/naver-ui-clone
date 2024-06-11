import { NavLink } from "@/constants";
import Styles from "./index.module.css";
import { HeaderBtn } from "@/components";

const HeaderNav = () => {
  return (
    <nav className={Styles.link_bar}>
      {NavLink.map((part, i) => {
        return (
          <ul className={Styles.flex_box} key={i}>
            {part.map((item, j) => {
              return (
                <li className={Styles.btn_area} key={j}>
                  <HeaderBtn
                    name={item.name}
                    position={item.position}
                    style={{ width: "32px", height: "32px" }}
                  />
                </li>
              );
            })}
          </ul>
        );
      })}
    </nav>
  );
};

export default HeaderNav;
