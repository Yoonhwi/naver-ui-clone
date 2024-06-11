import { HeaderNav } from "./header-nav";
import { HeaderSearch } from "./header-search";
import { HeaderShortcut } from "./header-shortcut";
import Styles from "./index.module.css";

const CenteredHeader = () => {
  return (
    <div className={Styles.outer_box}>
      <HeaderNav />
      <HeaderSearch />
      <HeaderShortcut />
    </div>
  );
};

export default CenteredHeader;
