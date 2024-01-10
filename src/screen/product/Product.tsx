// import classes from "./Products.module.css";
// import product from "../../assets/grid/pro1.png";
import { useLocation } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import classes from "./Product.module.css";
// const data = [
//   {
//     img: product,
//     title: "Spread Collar Shirt",
//     price: 38.99,
//     rating: 5.0,
//   },
// ];

const screen = window.screen.width;

function Product(prop: any) {
  const { state } = useLocation();

  console.log(state, prop);
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
      <section className="my-12">
        <div
          style={{
            backgroundColor: "black",
            padding: "0.5rem",
            color: "white",
            textAlign: "center",
          }}
        >
          USE OFF10 for 10% off on your first purchase
        </div>
        <div
          style={{ width: "calc(100vw * 0.8)", margin: "1rem auto" }}
          className="flex flex-wrap"
        >
          <div
            style={{
              backgroundColor: state.color,
              width: "30rem",
              height: "35rem",
              overflow: "hidden",
              objectFit: "cover",
            }}
          >
            <img style={{ margin: "auto" }} src={state.img} />
          </div>
          <div
            className="flex flex-col place-content-evenly	"
            style={{ width: "50%", paddingLeft: "calc(100% * 0.08)" }}
          >
            <div
              style={{
                fontSize: "2rem",
                fontWeight: "bolder",
                marginBottom: "2rem",
              }}
            >
              Product Name
            </div>
            <div style={{ marginBottom: "2rem" }}>
              Products description goes here from here there is gibrish text
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
              ad minim veniam, quis nostrud
            </div>
            <div>
              <ul>
                <li>Product feature</li>
                <li>Product feature</li>
                <li>Product feature</li>
                <li>Product feature</li>
                <li>Product feature</li>
                <li>Product feature</li>
              </ul>
            </div>
            <div className="flex">
              <div style={{ fontSize: "1.5rem", fontWeight: "400" }}>
                ₹{state.price}
              </div>
              <Separator
                orientation="vertical"
                style={{ backgroundColor: "black", margin: "0 1rem 0 1rem" }}
              />

              <div style={{ fontSize: "1.5rem", fontWeight: "400" }}>
                {state.rating}⭐️
              </div>
            </div>
            <div>
              <Button
                style={{
                  padding: "1rem 3rem 1rem 3rem",
                  marginRight: "2rem",
                  marginBottom: "1rem",
                }}
              >
                Buy Now
              </Button>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid black",
                  padding: "1rem 2rem 1rem 2rem",
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
