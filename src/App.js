import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../src/components/ScrollToTop";
import OurHistory from "./pages/OurHistory";
import HomePage from "./pages/Home/HomePage";
import ArtistsPage from "./pages/ArtistsPage";
import Store from "./pages/Store";
import About from "./pages/About";
import ArticleSheet from "./pages/ArticleSheet";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import CartProvider from "./CartContext";

function App() {
  return (
    <CartProvider>
    <div>
      <ScrollToTop />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="OurHistory/" element={<OurHistory />} />
        <Route path="ArtistsPage/" element={<ArtistsPage />} />
        <Route path="Store/" element={<Store />} />
        <Route path="About/" element={<About />} />
        <Route path="Article/" element={<ArticleSheet />} />
        <Route path="success" element={<Success />} />
        <Route path="cancel" element={<Cancel />} />
      </Routes>
    </div>
    </CartProvider>
  );
}

export default App;
