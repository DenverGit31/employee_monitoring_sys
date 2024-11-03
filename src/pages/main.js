import React, { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import SideBar from "../components/sideBar";
import { Layout, Menu, theme, Button } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const Main = ({ content, modal = "" }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const sideBar = () => {
    return <SideBar collapsed={collapsed} />;
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout>
      {sideBar()}
      <Layout
        className="site-layout"
        style={{
          marginLeft: !collapsed ? 210 : 90,
        }}
      >
        {screenWidth <= 780 && (
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              marginLeft: !collapsed ? 10 : 10,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
        )}
        <Content
          className="site-layout-background"
          style={{
            padding: 12,
            minHeight: "84.3vh",
            margin: "10px 0px 10px 0px",
            // minHeight: "94.3vh",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {content}
            {modal}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Developed by Denv3r
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Main;
