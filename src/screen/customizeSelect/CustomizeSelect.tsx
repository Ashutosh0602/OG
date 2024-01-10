import model1 from "../../assets/grid/best1.png";
import model2 from "../../assets/grid/best2.png";
import model3 from "../../assets/grid/best3.png";
import model4 from "../../assets/grid/customModel.png";
import Product from "../product/Product";
import { NavLink } from "react-router-dom";
import classes from "./CustomizeSelect.module.css";
import { motion } from "framer-motion";

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
  {
    img: model4,
    title: "Regular Fit Long Sleeve Top",
    price: 34.45,
    rating: 5.0,
    color: "#D4A9A9",
  },
];

const screen = window.screen.width;

function CustomizeSelect() {
  return (
    <>
      {() => {
        if (screen > 500) {
          return (
            <motion.div
              initial={{ height: "92vh" }}
              animate={{ height: 0, transition: { duration: 1 } }}
              exit={{
                height: "92vh",
                transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
              }}
              // className={classes.stop_motion}
              style={{
                position: "absolute",
                // top: 0,
                bottom: 0,
                width: "100%",
                height: "0vh",
                backgroundColor: "#202020",
                zIndex: 100,
              }}
            >
              {/* <img src={logo} /> */}
            </motion.div>
          );
        }
      }}
      <section className="my-4">
        <div
          style={{
            marginTop: "2rem",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          <div style={{ display: "inline-block" }}>
            <div
              className={`${classes.access_padd} mx-16`}
              style={{ cursor: "pointer", float: "right" }}
            >
              Accessories
            </div>
            <div
              className={`${classes.access_padd} mx-16`}
              style={{ cursor: "pointer", float: "right" }}
            >
              Mens
            </div>
            <div
              className={`${classes.access_padd} mx-16`}
              style={{ cursor: "pointer", float: "right" }}
            >
              Womens
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly my-16">
          {data.map((ls) => {
            return (
              <NavLink to="customize" state={ls}>
                <div
                  style={{ cursor: "pointer", margin: "1rem 1rem 1rem 1rem" }}
                  onClick={() => {
                    return <Product data={ls} key="hvjuh" />;
                  }}
                >
                  <div
                    style={{
                      backgroundColor: ls.color,
                      width: "15rem",
                      height: "20rem",
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
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default CustomizeSelect;
