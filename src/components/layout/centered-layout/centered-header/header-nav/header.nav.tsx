import { NavLink } from "@/constants";
import Styles from "./index.module.css";
import { HeaderNavUl } from "./header-nav.ul";

const HeaderNav = () => {
  return (
    <nav className={Styles.link_bar}>
      {NavLink.map((part, i) => {
        return <HeaderNavUl part={part} index={i} />;
      })}
    </nav>
  );
};

export default HeaderNav;
