import { Route, Routes as Router } from "react-router-dom";
import Error from "../pages/Error";
import HomePage from "../pages/Index";
import { RouteList } from "../constants/routes";
import About from "../pages/About";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/footer/Footer";
import AllProducts from "../pages/AllProducts";
import ProductDescription from "../pages/ProductDescription";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignUpForm";
import OrderConfirmationAndTracking from "../pages/OrderConfirmationAndTracking";
import Review from "../pages/Review";

function DvaultRoutes() {
  return (
    <>
      <Navbar />
      <Router>
        <Route
          path={RouteList.LANDING}
          //   element={
          //     <ProtectedRoutes>
          //       <SharedLayout />
          //     </ProtectedRoutes>
          //   }
        >
          <Route index element={<HomePage />} />
        </Route>
        <Route path={RouteList.ABOUT} element={<About />} />
        <Route path={RouteList.PRODUCTS} element={<AllProducts />} />
        <Route path={RouteList.CART} element={<CartPage />} />
        <Route path={RouteList.CHECKOUT} element={<CheckoutPage />} />
        <Route
          path={RouteList.ORDERCONFIRMATION}
          element={<OrderConfirmationAndTracking />}
        />
        <Route path={RouteList.REVIEW} element={<Review />} />
        <Route
          path={RouteList.PRODUCT_DESCRIPTION}
          element={<ProductDescription />}
        />
        <Route path="*" element={<Error />} />
        <Route path={RouteList.LOGIN} element={<LoginForm />} />
        <Route path={RouteList.SIGNUP} element={<SignupForm />} />
      </Router>
      <Footer />
    </>
  );
}

export default DvaultRoutes;
