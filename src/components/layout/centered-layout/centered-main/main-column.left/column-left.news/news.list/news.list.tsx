import { DividerDot, DividerSlash } from "@/components";
import Styles from "./index.module.css";

const ColumnHeader = [
  "뉴스스탠드",
  "언론사편집",
  "엔터",
  "스포츠",
  "경제",
  "쇼핑투데이",
];

const NewsList = () => {
  return (
    <ul className={Styles.header}>
      {ColumnHeader.map((item, i) => {
        return (
          <>
            <li
              key={i}
              style={{
                color: i === 0 ? "rgb(8, 8, 8)" : "rgb(8,8,8,0.5)",
              }}
            >
              {item}
            </li>
            {i !== ColumnHeader.length - 1 &&
              (i === 0 ? <DividerDot /> : <DividerSlash />)}
          </>
        );
      })}
    </ul>
  );
};

export default NewsList;
