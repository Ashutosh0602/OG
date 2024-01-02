import img1 from "../../../assets/grid/grid1.png";
import img2 from "../../../assets/grid/grid2.png";
import classes from "./Grid.module.css";

function Grid() {
  return (
    <section className="my-32">
      <div
        style={{
          textAlign: "center",
          color: "#224F34",
          fontSize: "3rem",
          fontWeight: 500,
        }}
      >
        Designer Clothes For You
      </div>
      <div style={{ textAlign: "center", color: "#224F34", marginTop: "2rem" }}>
        Immerse yourself in the world of luxury fashion with our meticulously
        crafted designer clothes!
      </div>
      <div className={classes.grid_container}>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img1} />
        </div>
        <div>
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#E3E3E3",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              borderRadius: "15px",
            }}
          >
            Latest
          </div>
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#B6B9B7",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              borderRadius: "15px",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            Unique
          </div>
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#000000",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              color: "white",
              borderRadius: "15px",
            }}
          >
            Relatables
          </div>
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
      </div>
      <div
        style={{ backgroundColor: "#D6D6D6", width: "90%", margin: "auto" }}
        className="flex flex-wrap py-8 px-4 "
      >
        <div
          style={{
            fontSize: "3.5rem",
            fontWeight: 600,
            width: "50%",
            padding: "calc(100% * 0.05)",
          }}
        >
          Want to customize your Clothes ?{" "}
        </div>
        <div style={{ width: "50%", margin: "auto" }}>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: 400,
              //   width: "50%",
              padding: "calc(100% * 0.05)",
              //   padding: "auto",
              margin: "auto",
            }}
          >
            Get clothes customized right for your size and feel, using our
            (customize tool name)
          </div>
          <div style={{ textAlign: "center" }}>
            <button className={classes.explore_button}>Try Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grid;
