import React from "react";
import Main from "./main";
import { Layout, Card, Row, Col, Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Content: LayoutContent } = Layout;
const Dashboard = () => {
  const Content = () => (
    <LayoutContent>
      <div>
        <div
          class="flex"
          style={{
            flexDirection: "row",
            display: "flex",
            gap: 25,
            flexWrap: "wrap",
          }}
        >
          <>
            <Card
              style={{
                borderRadius: "8px",
                width: 290,
                backgroundColor: "#00BF63",
              }}
            >
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  gap: 40,
                  alignContent: "center",
                  marginTop: -20,
                }}
              >
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 60,
                        fontWeight: "bold",
                        WebkitTextStroke: "1px white",
                        color: "transparent",
                      }}
                    >
                      90
                    </span>
                    <div>
                      <span
                        style={{
                          fontSize: 18,
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        Online
                      </span>
                      <br />

                      <Avatar.Group>
                        <Avatar size="small" icon={<UserOutlined />} />
                        <Avatar size="small" icon={<UserOutlined />} />
                        <Avatar size="small" icon={<UserOutlined />} />
                        <Avatar size="small" icon={<UserOutlined />} />
                        <Avatar size="small" icon={<UserOutlined />} />
                        <Avatar size="small" icon={<UserOutlined />} />
                        .....
                      </Avatar.Group>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </>
          <>
            <Card
              style={{
                border: "2px solid #d9d9d9",
                borderRadius: "8px",
                width: 290,
              }}
              bordered={true}
            >
              <span>Offline</span>
            </Card>
          </>
          <>
            <Card
              style={{
                border: "2px solid #d9d9d9",
                borderRadius: "8px",
                width: 290,
              }}
              bordered={true}
            >
              <span>Total employee</span>
            </Card>
          </>
        </div>
      </div>
    </LayoutContent>
  );
  return <Main content={<Content />} />;
};

export default Dashboard;
