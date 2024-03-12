import "./App.css";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopSection from "./components/TopSection";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import Checkout from './pages/Checkout';
import NewsSection from "./components/NewsSection";
import Wishlist from "./pages/Wishlist";


function App() {
  return (
    <>
      <TopSection/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/chekout" element={<Checkout/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <NewsSection/>
      <Footer />
      <ScrollToTop
        smooth
        color="white"
        width="40px"
        border-radius="50%"
        style={{ background: "purple" }}
      />
    </>
  );
}

export default App;
