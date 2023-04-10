import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./pages/CheckoutPage";
import Home from "./pages/Home";
import Class from "./pages/ProductPage";
import { useSelector } from "react-redux";
import "./styles/main.css";
import { Layout, Menu, theme, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Contact from "./pages/ContactPage";
import Checksuc from "./pages/CheckoutSuccessPage";

const { Header, Content, Footer } = Layout;

const App = () => {
  const cart = useSelector((state) => state.cart);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Layout className="site-layout">
        <Header className="header">
          <div>
            <div style={{ marginRight: "5%" }}></div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/">Home </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/contactpage">Contact us </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/checkoutpage">
                  Checkout
                  <Badge count={cart.items.length}>
                    <ShoppingCartOutlined style={{ color: "white" }} />
                  </Badge>
                </Link>
              </Menu.Item>
            </Menu>
          </div>

          <div></div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Routes>
            <Route index element={<Home />} />
            <Route path="/checkoutpage" element={<Cart />} />
            <Route path="/productpage/:id" element={<Class />} />
            <Route path="/contactpage/" element={<Contact />} />
            <Route path="/checkoutsuccesspage" element={<Checksuc />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Shop.no ©2023 Created by Lasse Strand
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
