import { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
const Layout = lazy(() => import("./screen/layout/Layout"));
// import Layout from "./screen/layout/Layout";

const Home = lazy(() => import("./screen/home/Home"));
// import Home from "./screen/home/Home";

const Customize = lazy(() => import("./screen/customize/Customize"));
// import Customize from "./screen/customize/Customize";

const Collection = lazy(() => import("./screen/collection/Collection"));
// import Collection from "./screen/collection/Collection";

const Product = lazy(() => import("./screen/product/Product"));
// import Product from "./screen/product/Product";

const SignIn = lazy(() => import("./screen/signIn/SignIn"));
// import SignIn from "./screen/signIn/SignIn";

const SignUp = lazy(() => import("./screen/signUp/SignUp"));
// import SignUp from "./screen/signUp/SignUp";

const Cart = lazy(() => import("./screen/cart/Cart"));
// import Cart from "./screen/cart/Cart";

const CustomerLogin = lazy(
  () => import("./screen/customerLogin/CustomerLogin")
);
// import CustomerLogin from "./screen/customerLogin/CustomerLogin";

const DesignerLogin = lazy(
  () => import("./screen/designerLogin/DesignerLogin")
);
// import DesignerLogin from "./screen/designerLogin/DesignerLogin";

const CustomizeSelect = lazy(
  () => import("./screen/customizeSelect/CustomizeSelect")
);
// import CustomizeSelect from "./screen/customizeSelect/CustomizeSelect";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Suspense>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="" element={<Layout />}>
              <Route index path="" element={<Home />} />
              <Route path="select">
                <Route index path="" element={<CustomizeSelect />} />
                <Route path="customize" element={<Customize />} />
              </Route>
              <Route path="shop" element={<Collection />} />
              <Route path="productPage" element={<Product />} />
              <Route path="signIn" element={<SignIn />} />
              <Route path="signUp" element={<SignUp />} />
              <Route path="cart" element={<Cart />} />
              <Route path="customer" element={<CustomerLogin />} />
              <Route path="designer" element={<DesignerLogin />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}

export default App;
