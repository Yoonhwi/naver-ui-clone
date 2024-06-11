import Styles from "./index.module.css";
import { MainColumnLeft } from "./main-column.left";
import { MainColumnRight } from "./main-column.right";
const CenteredMain = () => {
  return (
    <div className={Styles.outer_box}>
      <MainColumnLeft />
      <MainColumnRight />
    </div>
  );
};

export default CenteredMain;
