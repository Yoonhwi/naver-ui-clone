import Styles from "./index.module.css";

const HeaderSearch = () => {
  return (
    <div className={Styles.outer_box}>
      <div className={Styles.search_box}>
        <div className={Styles.search_logo}>
          <span className={Styles.logo_box} />
        </div>
        <input type="text" className={Styles.search_input} />
        <div className={Styles.search_icons}>
          <div className={Styles.icons_keyboard} />
          <div className={Styles.icons_arrow} />
          <div className={Styles.icons_search} />
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
