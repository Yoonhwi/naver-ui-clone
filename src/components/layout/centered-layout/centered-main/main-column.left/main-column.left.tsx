import { ColumnLeftNews } from "./column-left.news";
import Styles from "./index.module.css";
const MainColumnLeft = () => {
  return (
    <div className={Styles.outer_box}>
      <div className={Styles.ad_box}>
        <img
          src="https://ssl.pstatic.net/melona/libs/1499/1499816/4cbfc83957df55f6b1dd_20240610181000228.png"
          width="830"
          height="130"
          alt="[광고]세탁소 드라이 비용, 너무 비싸잖아요? 여기 걸어두기만 하면 돼요!"
        />
      </div>
      <ColumnLeftNews />
      <div className={Styles.shop_box}></div>
      <div className={Styles.feed_box}></div>
    </div>
  );
};

export default MainColumnLeft;
