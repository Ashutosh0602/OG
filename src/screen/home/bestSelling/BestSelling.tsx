import classes from "./BestSelling.module.css";
import model1 from "../../../assets/grid/best1.png";
import model2 from "../../../assets/grid/best2.png";
import model3 from "../../../assets/grid/best3.png";
import { BsArrowRight } from "react-icons/bs";

const data = [
  {
    img: model1,
    title: "Regular Fit Long Sleeve Top",
    price: 38.99,
    rating: 5.0,
    color: "#BAFFC9",
  },
  {
    img: model2,
    title: "Regular Fit Long Sleeve Top",
    price: 63.56,
    rating: 5.0,
    color: "#FFDFBA",
  },
  {
    img: model3,
    title: "Regular Fit Long Sleeve Top",
    price: 34.45,
    rating: 5.0,
    color: "#BAE1FF",
  },
];

function BestSellling() {
  return (
    <section className="my-32">
      <div
        style={{
          textAlign: "center",
          fontSize: "3rem",
          fontFamily: "Roboto Slab",
          fontWeight: "bolder",
        }}
      >
        Best selling
      </div>
      <div style={{ textAlign: "center", fontWeight: "400" }}>
        Get in on the trend with our curated selection of best-selling styles.
      </div>
      <div className="flex flex-wrap justify-evenly my-16">
        {data.map((ls) => {
          return (
            <div style={{ cursor: "pointer" }}>
              <div
                style={{
                  backgroundColor: ls.color,
                  width: "20rem",
                  height: "25rem",
                  overflow: "hidden",
                  borderRadius: "1rem",
                }}
                className={classes.model_hover}
              >
                <img src={ls.img} style={{ objectFit: "fill" }} />
              </div>
              <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                <div style={{ textAlign: "center", fontWeight: "bold" }}>
                  {ls.title}
                </div>
                <div className="flex justify-center">
                  <div style={{ fontWeight: 300 }}>₹{ls.price}</div>
                  <div className="mx-8">|</div>
                  <div style={{ fontWeight: 300 }}>{ls.rating}⭐️</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            border: "2px solid black",
            fontFamily: "poppins",
            padding: "0.7rem 2rem 0.7rem 2rem",
            borderRadius: "5px",
            verticalAlign: "bottom",
          }}
          className={classes.all_option}
        >
          See All
          <span
            style={{
              float: "right",
              verticalAlign: "bottom",
            }}
          >
            <BsArrowRight
              style={{
                verticalAlign: "bottom",
                margin: "auto",
                padding: "auto",
              }}
            />
          </span>
        </button>
      </div>
    </section>
  );
}

export default BestSellling;
