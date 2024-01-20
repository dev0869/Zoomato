import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product/Product";
import Restraunant from "./pages/Restraunant/Restraunant";
import AdminPanel from "./pages/Admin/AdminPanel";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/Products/:id" element={<Product />}></Route>
        <Route path="/partner-with-us" element={<Restraunant />}></Route>
        <Route
          path="/partner-with-us/DashBoard"
          element={<AdminPanel />}
        ></Route>
      </Routes>
    </Layout>
  );
};

export default App;
