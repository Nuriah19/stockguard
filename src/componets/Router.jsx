import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import Layout from "../componets/Layout";
import Sidebar from "../componets/Sidebar";
import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import Signup from "../pages/Signup";
import Aboutus from "../pages/Aboutus";
import ClearanceShop from "../pages/ClearanceShop";
import Cart from "../pages/Cart";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="*"
          element={
            <Layout>
              <Notfound />
            </Layout>
          }
        />
        <Route
          path="/Signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/Login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

        <Route
          path="/Aboutus"
          element={
            <Layout>
              <Aboutus />
            </Layout>
          }
        />
        <Route
          path="/ClearanceShop"
          element={
            <Layout>
              <ClearanceShop />
            </Layout>
          }
        />

        <Route path="/Dashboard" element={<AdminDashboard />} />

        <Route
          path="/Sidebar"
          element={
            <Layout>
              <Sidebar />
            </Layout>
          }
        />
        <Route
          path="/Cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
