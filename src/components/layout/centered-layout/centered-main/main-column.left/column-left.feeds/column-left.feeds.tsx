import Styles from "./index.module.css";
import { FeedsHeader } from "./feeds.header";
import { GrayTextBox } from "@/components/common";
import { FeedsSubHeader } from "./feeds.subheader";

const WebtoonSubHeader = [
  { name: "웹툰홈" },
  { name: "요일별웹툰" },
  { name: "베스트도전" },
  { name: "웹소설홈" },
  { name: "시리즈에디션" },
  { name: "베스트리그" },
  { name: "시리즈홈" },
  { name: "웹소설" },
  { name: "만화" },
];

const ColumnLeftFeeds = () => {
  return (
    <div className={Styles.feed_box}>
      <div className={Styles.row_top}>
        <FeedsHeader />
        <GrayTextBox
          style={{
            fontSize: "14.7px",
            gap: "8px",
          }}
        >
          {WebtoonSubHeader.map((head, i) => {
            return (
              <FeedsSubHeader
                name={head.name}
                length={WebtoonSubHeader.length}
                index={i}
              />
            );
          })}
        </GrayTextBox>
      </div>
      <div className={Styles.row_bottom}></div>
    </div>
  );
};

export default ColumnLeftFeeds;
