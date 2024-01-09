import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import classes from "./Home.module.css";
import model_svg from "../../assets/grid/model.svg";
import dotted from "../../assets/grid/dotted.svg";
import logo from "../../assets/grid/OGlogo.png";
import BestSellling from "./bestSelling/BestSelling";
import Products from "./products/Products";
import Offer from "./offer/Offer";
import Footer from "./footer/Footer";
import Grid from "./grid/Grid";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <section
        style={{ height: "80vh" }}
        className="flex flex-wrap justify-around mt-20 mb-16 overflow-hidden relative"
      >
        <div className={classes.text_button_container}>
          <div>
            <div>
              <p className={classes.p1}>Customize Your Clothes and</p>
              <p className={classes.p2}>Express Your Style</p>
            </div>
            <div>
              <p>Discover endless possibilities for your style.</p>
            </div>
          </div>
        </div>
        <div className={classes.explore_button_container}>
          <button className={classes.explore_button}>Explore Now</button>
        </div>
        <div className={classes.model_container}>
          <div className={classes.model_img_div}>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              freeMode={true}
              speed={1000}
              autoplay={{
                delay: 1000,
                waitForTransition: true,
                stopOnLastSlide: true,
                disableOnInteraction: false,
              }}
              navigation={false}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src={model_svg}
                  style={{ objectFit: "fill" }}
                  className={classes.model_img}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={model_svg}
                  style={{ objectFit: "fill" }}
                  className={classes.model_img}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <motion.div
            initial={{ x: 0, y: "4rem" }}
            animate={{
              x: "100%",
              y: ["0rem", "3rem", "0rem"],
            }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
          >
            <img src={dotted} className={classes.dotted_bottom} />
          </motion.div>
          <motion.div>
            <motion.img
              initial={{ x: 0, y: 0 }}
              animate={{
                x: "-34vw",
                y: ["0rem", "-3rem", "0rem"],
              }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
              src={dotted}
              className={classes.dotted_up}
            />
          </motion.div>
        </div>
      </section>
      <div
        style={{
          position: "relative",
          width: "100vw",
          backgroundColor: "rgb(0,0,0,0.5)",
          height: "0.1rem",
        }}
      >
        <div>
          <img
            style={{
              width: "4rem",
              backgroundColor: "white",
              position: "absolute",
              top: 0,
              left: "50%",
              translate: "-50% -40%",
            }}
            src={logo}
          />
        </div>
      </div>
      <BestSellling />
      <div
        style={{
          position: "relative",
          width: "100vw",
          backgroundColor: "rgb(0,0,0,0.5)",
          height: "0.1rem",
        }}
      >
        <div>
          <img
            style={{
              width: "4rem",
              backgroundColor: "white",
              position: "absolute",
              top: 0,
              left: "50%",
              translate: "-50% -40%",
            }}
            src={logo}
          />
        </div>
      </div>
      <Products />
      <div
        style={{
          position: "relative",
          width: "100vw",
          backgroundColor: "rgb(0,0,0,0.5)",
          height: "0.1rem",
        }}
      >
        <div>
          <img
            style={{
              width: "4rem",
              backgroundColor: "white",
              position: "absolute",
              top: 0,
              left: "50%",
              translate: "-50% -40%",
            }}
            src={logo}
          />
        </div>
      </div>
      <Offer />
      <div
        style={{
          position: "relative",
          width: "100vw",
          backgroundColor: "rgb(0,0,0,0.5)",
          height: "0.1rem",
        }}
      >
        <div>
          <img
            style={{
              width: "4rem",
              backgroundColor: "white",
              position: "absolute",
              top: 0,
              left: "50%",
              translate: "-50% -40%",
            }}
            src={logo}
          />
        </div>
      </div>
      <Grid />
      <Footer />
    </>
  );
}

export default Home;
