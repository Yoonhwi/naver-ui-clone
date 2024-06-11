import Styles from "./index.module.css";

interface HeaderBtnProps {
  name: string;
  position: string;
  style?: React.CSSProperties;
}

const HeaderBtn = ({ name, position, style }: HeaderBtnProps) => {
  return (
    <button
      className={Styles.btn}
      style={{
        backgroundPosition: position,
        ...style,
      }}
    >
      <span className={Styles.blind}>{name}</span>
    </button>
  );
};

export default HeaderBtn;
