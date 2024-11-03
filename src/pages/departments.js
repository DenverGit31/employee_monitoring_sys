import React from "react";
import Main from "./main";
import { Layout, Select, Segmented, ConfigProvider, DatePicker } from "antd";
const { Content: LayoutContent } = Layout;
const Departments = () => {
  const Content = () => (
    <LayoutContent>
      <div>
        <h1>Departments</h1>
      </div>
    </LayoutContent>
  );
  return <Main content={<Content />} />;
};

export default Departments;
