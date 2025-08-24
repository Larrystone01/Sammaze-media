import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import Homepage from "../pages/Homepage";
import Pricing from "../pages/Pricing";
import PortfolioPage from "../pages/PortfolioPage";
import AboutPage from "../pages/AboutPage";
import BookingPage from "../pages/BookingPage";
import PricingPage from "../pages/Pricing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/pricng" element={<Pricing />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/booking" element={<BookingPage />} />
    </Route>
  )
);

export default router;
