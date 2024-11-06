import React from "react";
import { Layout, Menu, Tooltip, Spin, Image } from "antd";
import {
  BarChartOutlined,
  ClusterOutlined,
  ApartmentOutlined,
  SettingFilled,
  SettingOutlined,
  UnorderedListOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/login.png";
import "../css/isActiveNav.css";
const SideBar = (props) => {
  const { Sider } = Layout;
  const location = useLocation();

  const { pathname } = location;

  const renderNav = (title, path, icon = "") => {
    return (
      <Menu.Item key={path} icon={icon}>
        <Link
          to={path}
          style={{ color: pathname === path && !props.collapsed && "black" }}
        >
          {title}
        </Link>
      </Menu.Item>
    );
    // }
  };
  const navs = () => {
    return (
      <>
        {renderNav("Dashboard", "/Dashboard", <BarChartOutlined />)}
        {renderNav("Departments", "/Departments", <ApartmentOutlined />)}
        {renderNav(
          "Employee Accounts",
          "/EmployeeAccounts",
          <UnorderedListOutlined />
        )}
        {renderNav("WFH Employees", "/WfhEmployees", <LaptopOutlined />)}
        {renderNav("Setting", "/Settings", <SettingOutlined />)}
      </>
    );
  };

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "#e6e6ff",
        zIndex: 1,
      }}
      trigger={null}
      collapsible
      collapsed={props.collapsed}
    >
      <div className="items-center pt-4 px-4">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image preview={false} src={logo} width={props.collapsed ? 50 : 60} />
          {!props.collapsed && (
            <h1
              style={{ fontWeight: "bold", fontSize: 34, color: "black" }}
              className="text-center"
            >
              EMS
            </h1>
          )}
        </div>
      </div>
      <br />

      <Menu
        className="custom-menu"
        style={{ backgroundColor: "#e6e6ff" }}
        mode="inline"
        selectedKeys={[pathname]}
      >
        {navs()}
      </Menu>
    </Sider>
  );
};

export default SideBar;
