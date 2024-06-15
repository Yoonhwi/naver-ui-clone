import { GrayTextBox } from "@/components/common";
import Styles from "./index.module.css";
import NewsList from "./news.list/news.list";

const Companys = [
  {
    name: "뉴스타파",
    img: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/930.png",
  },
  {
    name: "한국일보",
    img: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/038.png",
  },
  {
    name: "서울신문",
    img: "https://s.pstatic.net/static/newsstand/up/2022/0208/nsd16121208.png",
  },
  {
    name: "KBS",
    img: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/056.png",
  },
  {
    name: "YTN",
    img: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/052.png",
  },
  {
    name: "뉴데일리",
    img: "https://s.pstatic.net/static/newsstand/up/2024/0124/nsd95528325.png",
  },
];

const repeatedCompanys = [...Companys, ...Companys, ...Companys, ...Companys];

const ColumnLeftNews = () => {
  return (
    <div className={Styles.outer_box}>
      <div className={Styles.row_top}>
        <NewsList />
        <GrayTextBox>
          <div className={Styles.subview_category}>
            <span>전체언론사</span>
            <i className={Styles.subview_triangle} />
          </div>
          <span>
            연합뉴스 김도훈호 한국축구, 중국과 북중미 월드컵 예선 전반0-0
          </span>
          <div className={Styles.subview_home}>뉴스스탠드 홈</div>
        </GrayTextBox>

        <div className={Styles.news_table}>
          {repeatedCompanys.map((company, i) => {
            return (
              <div className={Styles.table_item} key={i}>
                <img src={company.img} height={"20px"} alt={company.name} />
              </div>
            );
          })}
        </div>
      </div>

      <div className={Styles.row_bottom}>
        <div className={Styles.paging_icon_area}>
          <i className={Styles.paging_icon} />
        </div>
        <div
          style={{
            display: "flex",
            gap: "4px",
            fontWeight: 800,
            color: "black",
          }}
        >
          <text style={{ color: "rgb(58, 103, 234)" }}>언론사</text>
          <text>더보기 14/21</text>
        </div>
        <div className={Styles.paging_icon_area}>
          <i className={Styles.paging_icon} style={{ transform: "none" }} />
        </div>
      </div>
    </div>
  );
};

export default ColumnLeftNews;
