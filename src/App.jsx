import ItemsContextProvider from "./context/ItemsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import Mens from "./pages/Mens";
import Women from "./pages/Women";
import Jewelerys from "./pages/Jewelerys";
import Electronics from "./pages/Electronics";
import Header from "./components/Header";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <ItemsContextProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mens" element={<Mens />} />
              <Route path="/womens" element={<Women />} />
              <Route path="/jewelerys" element={<Jewelerys />} />
              <Route path="/electronics" element={<Electronics />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </BrowserRouter>
      </ItemsContextProvider>
    </>
  );
}

export default App;
