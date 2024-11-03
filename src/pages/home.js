import React from "react";
import Main from "./main";
import { Layout, Card, Row, Col } from "antd";
const { Content: LayoutContent } = Layout;
const Home = () => {
  const Content = () => (
    <LayoutContent>
      <div>
        <div>
          <Row gutter={16}>
            <Col span={8}>
              <Card
                style={{
                  border: "2px solid #d9d9d9",
                  borderRadius: "8px",
                }}
                title="Card title"
                bordered={true}
              >
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card
                style={{
                  border: "2px solid #d9d9d9",
                  borderRadius: "8px",
                }}
                title="Card title"
                bordered={true}
              >
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card
                style={{
                  border: "2px solid #d9d9d9",
                  borderRadius: "8px",
                }}
                title="Card title"
                bordered={true}
              >
                Card content
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </LayoutContent>
  );
  return <Main content={<Content />} />;
};

export default Home;
