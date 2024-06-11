import { CenteredHeader } from "./centered-header";
import { CenteredMain } from "./centered-main";
import Styles from "./index.module.css";

const CenteredLayout = () => {
  return (
    <div className={Styles.outer_box}>
      <div className={Styles.center_box}>
        <CenteredHeader />
        <CenteredMain />
      </div>
    </div>
  );
};

export default CenteredLayout;
