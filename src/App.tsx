import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product/Product";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/Products/:id" index element={<Product />}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
