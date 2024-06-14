import Styles from "./index.module.css";
const LeftShopAd = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center",
      }}
    >
      <div className={Styles.left_ad}>
        <img
          src="https://s.pstatic.net/shopping.phinf/20240611_24/1742be70-d738-4845-919e-cc383100d1eb.jpg"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <text style={{ fontSize: "13.65px" }}>승모근 전문 이유즈 1+1 특가</text>
    </div>
  );
};

export default LeftShopAd;
