import { ColumnRightMyview } from "./column-right.myview";
import Styles from "./index.module.css";
const MainColumnRight = () => {
  return (
    <div className={Styles.outer_box}>
      <ColumnRightMyview />
      <div className={Styles.ad_box}>
        <img
          src="https://ssl.pstatic.net/melona/libs/1491/1491376/1781400040bea3eeea04_20240401144028928.jpg"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className={Styles.weather_box}></div>
      <div className={Styles.stock_box}></div>
      <div className={Styles.ad2_box}></div>
      <div className={Styles.widget_board}></div>
      <div className={Styles.ad3_box}></div>
    </div>
  );
};

export default MainColumnRight;
