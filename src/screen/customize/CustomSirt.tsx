import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const sets = [
  {
    collar: {
      newKent:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3221_fabric/folded/necklines_open+number_1+button_close_standard.png",
      kentCollar:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3221_fabric/folded/necklines_classic+number_1+button_close_standard.png",
      buttonDown:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3221_fabric/folded/necklines_buttons+number_1+button_close_standard.png",
      standUp:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3221_fabric/folded/necklines_mao+number_1+button_close_standard.png",
    },
    cuffs: {
      singleCuff1:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3221_fabric/folded/sleeves_long+cuffs_style_squared.png",
      singleCuff2:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3221_fabric/folded/sleeves_long+cuffs_style_squared_2_buttons.png",
      twoButtonCut:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3221_fabric/folded/sleeves_long+cuffs_style_cut_2_buttons.png",
      roundedButton:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3221_fabric/folded/sleeves_long+cuffs_style_rounded.png",
      doubleSquared:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3221_fabric/folded/sleeves_long+cuffs_style_squared_double_french_cuff.png",
    },
    shirt:
      "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3221_fabric/folded/body+button_close_standard.png",
    logo: "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/shirt/3221_huge_c300.jpg",
    name: "Oxford",
  },
  {
    collar: {
      newKent:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/699_fabric/folded/necklines_open+number_1+button_close_standard.png",
      kentCollar:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/699_fabric/folded/necklines_classic+number_1+button_close_standard.png",
      buttonDown:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/699_fabric/folded/necklines_buttons+number_1+button_close_standard.png",
      standUp:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/699_fabric/folded/necklines_mao+number_1+button_close_standard.png",
    },
    cuffs: {
      singleCuff1:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/699_fabric/folded/sleeves_long+cuffs_style_squared.png",
      singleCuff2:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/699_fabric/folded/sleeves_long+cuffs_style_squared_2_buttons.png",
      twoButtonCut:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/699_fabric/folded/sleeves_long+cuffs_style_cut_2_buttons.png",
      roundedButton:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/699_fabric/folded/sleeves_long+cuffs_style_rounded.png",
      doubleSquared:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/699_fabric/folded/sleeves_long+cuffs_style_squared_double_french_cuff.png",
    },
    shirt:
      "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/699_fabric/folded/body+button_close_standard.png",
    logo: "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/shirt/699_huge_c300.jpg",
    name: "Poplin",
  },
  {
    collar: {
      newKent:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3403_fabric/folded/necklines_open+number_1+button_close_standard.png",
      kentCollar:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3403_fabric/folded/necklines_classic+number_1+button_close_standard.png",
      buttonDown:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3403_fabric/folded/necklines_buttons+number_1+button_close_standard.png",
      standUp:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3403_fabric/folded/necklines_mao+number_1+button_close_standard.png",
    },
    cuffs: {
      singleCuff1:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3403_fabric/folded/sleeves_long+cuffs_style_squared.png",
      singleCuff2:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3403_fabric/folded/sleeves_long+cuffs_style_squared_2_buttons.png",
      twoButtonCut:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3403_fabric/folded/sleeves_long+cuffs_style_cut_2_buttons.png",
      roundedButton:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3403_fabric/folded/sleeves_long+cuffs_style_rounded.png",
      doubleSquared:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3403_fabric/folded/sleeves_long+cuffs_style_squared_double_french_cuff.png",
    },
    shirt:
      "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3403_fabric/folded/body+button_close_standard.png",
    logo: "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/shirt/3513_huge_c300.jpg",
    name: "Quick Dry",
  },
  {
    collar: {
      newKent:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3217_fabric/folded/necklines_open+number_1+button_close_standard.png",
      kentCollar:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3217_fabric/folded/necklines_classic+number_1+button_close_standard.png",
      buttonDown:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3217_fabric/folded/necklines_buttons+number_1+button_close_standard.png",
      standUp:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3217_fabric/folded/necklines_mao+number_1+button_close_standard.png",
    },
    cuffs: {
      singleCuff1:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3217_fabric/folded/sleeves_long+cuffs_style_squared.png",
      singleCuff2:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3217_fabric/folded/sleeves_long+cuffs_style_squared_2_buttons.png",
      twoButtonCut:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3217_fabric/folded/sleeves_long+cuffs_style_cut_2_buttons.png",
      roundedButton:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3217_fabric/folded/sleeves_long+cuffs_style_rounded.png",
      doubleSquared:
        "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3217_fabric/folded/sleeves_long+cuffs_style_squared_double_french_cuff.png",
    },
    shirt:
      "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/shirt/STD/3217_fabric/folded/body+button_close_standard.png",
    logo: "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/shirt/3217_huge_c300.jpg",
    name: "Double Stripe",
  },
];

const CustomSirt = () => {
  const [shirt, setShirt] = useState<number>(0);
  const [collar, setCollar] = useState<string>(sets[shirt].collar["newKent"]);
  const [cuff, setCuff] = useState<string>(sets[shirt].cuffs["singleCuff1"]);

  return (
    <section className="flex">
      <div>
        {sets?.map((value, key) => {
          return (
            <div
              className=" m-4"
              onClick={() => {
                setShirt(key);
                setCollar(sets[key].collar["newKent"]);
                setCuff(sets[key].cuffs["singleCuff1"]);
              }}
            >
              <img className=" w-40" src={value["logo"]} />
              <div className=" text-center">{value.name}</div>
            </div>
          );
        })}
      </div>
      <div
        className=" overflow-hidden relative "
        style={{ height: "40rem", width: "30rem", margin: "0 auto" }}
      >
        <img className="absolute" style={{ width: "22rem" }} src={collar} />
        <img
          className="absolute"
          style={{ width: "22rem" }}
          src={sets[shirt].shirt}
        />
        <img className="absolute" style={{ width: "22rem" }} src={cuff} />

        {/* collar dropdown */}
        <div
          style={{
            position: "absolute",
            top: "100px",
            left: "210px",
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
          <DropdownMenu>
            <DropdownMenuTrigger
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
            ></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Collar</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => setCollar(sets[shirt].collar["newKent"])}
              >
                New Kent
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCollar(sets[shirt].collar["kentCollar"])}
              >
                Kent Collar
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCollar(sets[shirt].collar["buttonDown"])}
              >
                Button Down
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCollar(sets[shirt].collar["standUp"])}
              >
                Stand Up
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* Cuff dropdown */}
        <div
          style={{
            position: "absolute",
            top: "400px",
            left: "70px",
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
          <DropdownMenu>
            <DropdownMenuTrigger
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
            ></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Cuffs</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => setCuff(sets[shirt].cuffs["singleCuff1"])}
              >
                Single Cuff 1
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCuff(sets[shirt].cuffs["singleCuff2"])}
              >
                Single Cuff 2
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCuff(sets[shirt].cuffs["twoButtonCut"])}
              >
                Two Button Cut
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCuff(sets[shirt].cuffs["doubleSquared"])}
              >
                Double Squared
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCuff(sets[0].cuffs["roundedButton"])}
              >
                Round Button
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
};

export default CustomSirt;
