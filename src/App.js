import { Route, Routes } from "react-router-dom";
import OurHistory from "./pages/OurHistory";
import HomePage from "./pages/Home/HomePage";
import ArtistsPage from "./pages/ArtistsPage";
import Shop from "./pages/Shop";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="OurHistory/" element={<OurHistory />} />
        <Route path="ArtistsPage/" element={<ArtistsPage />} />
        <Route path="Shop/" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
