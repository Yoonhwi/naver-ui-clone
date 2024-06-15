import { LinkProps } from "@/constants";
import Styles from "./index.module.css";
import { HeaderBtn } from "@/components";

interface HeaderNavUlProps {
  part: LinkProps[];
  index: number;
}

const HeaderNavUl = ({ part, index }: HeaderNavUlProps) => {
  return (
    <ul className={Styles.flex_box} key={index}>
      {part.map((item, j) => {
        return (
          <li className={Styles.btn_area} key={j}>
            <HeaderBtn
              name={item.name}
              position={item.position}
              style={{ width: "32px", height: "32px" }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderNavUl;
