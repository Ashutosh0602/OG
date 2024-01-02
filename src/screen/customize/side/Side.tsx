import man from "../../../assets/grid/customModel.png";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

const Side = () => {
  return (
    <div style={{ margin: "auto auto", position: "relative" }}>
      <img useMap="#work" src={man} style={{ position: "relative" }} />
      <map name="work">
        <area shape="circle" coords="300,350,20" alt="pocket" />
      </map>
      <div
        style={{
          position: "absolute",
          top: "350px",
          left: "300px",
          width: "15px",
          height: "15px",
          translate: "-50% -50%",
          borderRadius: "50%",
          backgroundColor: "gray",
          outlineColor: "lightgray",
          outlineWidth: "1px",
          outlineOffset: "5px",
          outlineStyle: "auto",
          cursor: "pointer",
        }}
        id="jacket"
      >
        <ContextMenu>
          <ContextMenuTrigger
            style={{
              width: "25px",
              height: "25px",
              backgroundColor: "transparent",
              translate: "-20% -20%",
              position: "absolute",
              top: 0,
              left: 0,
              borderRadius: "50%",
            }}
          ></ContextMenuTrigger>
          <ContextMenuContent>
            <div className="text-center text-base font-semibold">Pockets</div>
            <ContextMenuItem>Notched</ContextMenuItem>
            <ContextMenuItem>Peak</ContextMenuItem>
            <ContextMenuItem>Shawl</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    </div>
  );
};

export default Side;
