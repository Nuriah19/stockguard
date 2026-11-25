import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound"
import Layout from "../componets/Layout";
import Single from "../pages/Single";
import Login from "../pages/Login";
import AdminDashboard from "../componets/admin/AdminDashboard"
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
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

        <Route
          path="/aboutus"
          element={
            <Layout>
              <Aboutus />
            </Layout>
          }
        />
        <Route
          path="/clearanceShop"
          element={
            <Layout>
              <ClearanceShop />
            </Layout>
          }
        />

        <Route path="/single/:id" element={<Layout><Single /></Layout>} />

        
        <Route
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />
          
        <Route
          path="/admindashboard"
          element={
            <Layout>
              <AdminDashboard />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
