import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./screen/layout/Layout";
import Home from "./screen/home/Home";
import Customize from "./screen/customize/Customize";
import Collection from "./screen/collection/Collection";
import Product from "./screen/product/Product";
import SignIn from "./screen/signIn/SignIn";
import SignUp from "./screen/signUp/SignUp";
import Cart from "./screen/cart/Cart";
import CustomerLogin from "./screen/customerLogin/CustomerLogin";
import DesignerLogin from "./screen/designerLogin/DesignerLogin";

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index path="" element={<Home />} />
            <Route path="customize" element={<Customize />} />
            <Route path="shop" element={<Collection />} />
            <Route path="productPage" element={<Product />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="cart" element={<Cart />} />
            <Route path="customer" element={<CustomerLogin />} />
            <Route path="designer" element={<DesignerLogin />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
