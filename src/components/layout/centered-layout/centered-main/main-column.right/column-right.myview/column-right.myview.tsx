import Styles from "./index.module.css";

const ColumnRightMyview = () => {
  return (
    <div className={Styles.outer_box}>
      <text className={Styles.login_title}>
        네이버를 더 안전하고 편리하게 이용하세요
      </text>
      <div className={Styles.login_box}>
        <div className={Styles.login_logo}></div>
        <text>로그인</text>
      </div>
      <div className={Styles.login_more}>
        <text>아이디찾기</text>
        <text>비밀번호찾기</text>
        <text>회원가입</text>
      </div>
    </div>
  );
};

export default ColumnRightMyview;
