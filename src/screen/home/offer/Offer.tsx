import classes from "./Offer.module.css";
import offerModel from "../../../assets/grid/offerModel.png";
import dotted from "../../../assets/grid/dottedOffer.svg";

function Offer() {
  return (
    <section className="flex flex-wrap justify-center place-items-center my-32">
      <div className={classes.offer_container}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <img
            style={{ width: "20rem", objectFit: "cover", height: "100%" }}
            src={offerModel}
          />
          <div className={classes.dotted_div}>
            <img style={{ width: "6rem" }} src={dotted} />
          </div>
        </div>
        <div className={classes.offer_text_container}>
          <div
            style={{
              fontFamily: "Poppins",
              fontSize: "4rem",
              fontWeight: "bold",
            }}
          >
            Exclusive offer
          </div>
          <div style={{ fontSize: "1.2rem", lineHeight: "120%" }}>
            Unlock the ultimate style upgrade with our exclusive offer Enjoy
            savings of up to 40% off on our latest New Arrivals
          </div>
          <div className="flex my-8">
            <div className={classes.offer_timer}>
              <div>6</div>
              <div>Days</div>
            </div>
            <div
              style={{ marginLeft: "1rem", marginRight: "1rem" }}
              className={classes.offer_timer}
            >
              <div>18</div>
              <div>Hour</div>
            </div>
            <div className={classes.offer_timer}>
              <div>48</div>
              <div>Min</div>
            </div>
          </div>
          <div>
            <button
              style={{
                border: "2px solid black",
                padding: "0.7rem 2rem 0.7rem 2rem",
                borderRadius: "5px",
                verticalAlign: "bottom",
              }}
              className={classes.buy_option}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
