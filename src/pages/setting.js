import React from "react";
import Main from "./main";
import { Layout, Button } from "antd";
const { Content: LayoutContent } = Layout;
const Setting = () => {
  const Content = () => (
    <LayoutContent>
      <div>
        <h1>Setting</h1>
      </div>
    </LayoutContent>
  );
  return <Main content={<Content />} />;
};

export default Setting;
