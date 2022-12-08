import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import HomePage from "./containers/HomeTemplate/HomePage";
import ShopArtPage from "containers/HomeTemplate/ShopArtPage";
function App() {
  
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop-art" element={<ShopArtPage />} />
          <Route path="" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
