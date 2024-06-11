import Styles from "./index.module.css";

const ColumnHeader = [
  "뉴스스탠드",
  "언론사편집",
  "엔터",
  "스포츠",
  "경제",
  "쇼핑투데이",
];

const ColumnLeftNews = () => {
  return (
    <div className={Styles.outer_box}>
      <div className={Styles.row_top}>
        <ul className={Styles.header}>
          {ColumnHeader.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
        <div className={Styles.header_subview}>
          <div className={Styles.subview_category}>
            <text>전체언론사</text>
            <div className={Styles.subview_triangle}></div>
          </div>
          <text>
            연합뉴스 김도훈호 한국축구, 중국과 북중미 월드컵 예선 전반0-0
          </text>
        </div>
      </div>
    </div>
  );
};

export default ColumnLeftNews;
