import { DividerDot, DividerSlash } from "@/components";
import Styles from "./index.module.css";

const Headers = [
  { name: "추천" },
  { name: "자동차" },
  { name: "웹툰" },
  { name: "패션뷰티" },
  { name: "레시피" },
  { name: "리빙" },
  { name: "책방" },
  { name: "지식+" },
  { name: "건강" },
  { name: "게임" },
];

const FeedsHeader = () => {
  return (
    <div className={Styles.header}>
      {Headers.map((head, i) => {
        const DivHeadName =
          head.name === "추천" ? (
            <div
              style={{ display: "flex", gap: "8px" }}
              className={Styles.header_item}
            >
              <text>추천</text>
              <div style={{ position: "relative" }}>
                <i
                  style={{
                    position: "absolute",
                    top: "9px",
                  }}
                >
                  <DividerDot />
                </i>
              </div>
              <text>구독</text>
            </div>
          ) : (
            <text key={head.name} className={Styles.header_item}>
              {head.name}
            </text>
          );
        return (
          <>
            {DivHeadName}
            {i !== FeedsHeader.length - 1 && <DividerSlash />}
          </>
        );
      })}
    </div>
  );
};

export default FeedsHeader;
