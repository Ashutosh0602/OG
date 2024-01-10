import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { motion } from "framer-motion";
// import classes from "./Cart.module.css";

const screen = window.screen.width;

function Cart() {
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
            fontSize: "2rem",
            fontWeight: 600,
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Cart/Wishlist
        </div>
        <div style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div className="flex flex-wrap justify-center">
          {Array.from({ length: 8 }).map(() => {
            return (
              <>
                <div className="space-y-4 mx-6 my-6">
                  <Skeleton className="h-64 w-64 " />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div>
          <Drawer>
            <div className="mt-16 text-center">
              <DrawerTrigger>
                <Button className="px-12 py-6">Proceed</Button>
              </DrawerTrigger>
            </div>
            <DrawerContent style={{ maxHeight: "75vh" }}>
              <DrawerHeader style={{ overflow: "scroll" }}>
                <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
                <DrawerDescription>
                  {Array.from({ length: 5 }).map(() => {
                    return (
                      <div className="space-y-4 mx-6 my-6">
                        <Skeleton className="h-64 w-64 " />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-[250px]" />
                          <Skeleton className="h-4 w-[200px]" />
                        </div>
                      </div>
                    );
                  })}
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Pay</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </section>
    </>
  );
}

export default Cart;
