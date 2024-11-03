import React from "react";
import { Container, Paper } from "@mui/material";
import { Form, Row, Col, Button, Image } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import inputForm from "../components/forms";
import { useForm } from "react-hook-form";
import logInLogo from "../assets/login.png";
const SignIn = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required field")
      .matches(/^\S*$/, "Username cannot contain spaces"),
    password: yup
      .string()
      .required("Password is required field")
      .matches(/^\S*$/, "Username cannot contain spaces"),
  });
  let defaultValues = {
    password: "",
    username: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });
  const onSubmit = async (values) => {
    try {
      console.log("VALUES : >>> ", values.username, values.password);
    } catch (error) {
      console.log("ERROR onSubmit Functions : >>> ERROR || ", error);
    }
  };

  return (
    <div>
      <Container maxWidth="xs">
        <Paper elevation={6} sx={{ marginTop: 5, padding: 5 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Image src={logInLogo} width={95} preview={false} />
            <h2 style={{ fontSize: 15, fontWeight: "bold" }}>
              Employee monitoring system
            </h2>
          </div>
          <Form
            layout="vertical"
            initialValues={{
              requiredMarkValue: true,
            }}
            requiredMark={true}
            onFinish={handleSubmit(onSubmit)}
            encType="multipart/form-data"
          >
            <>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={24}>
                  {inputForm(
                    {
                      label: "Username",
                      name: "username",
                      errors: errors,
                      required: "true",
                    },
                    control
                  )}
                  <br />
                </Col>

                <Col className="gutter-row" span={24}>
                  {inputForm(
                    {
                      label: "Password",
                      name: "password",
                      errors: errors,
                      required: "true",
                      type: "password",
                    },
                    control
                  )}
                  <br />
                </Col>
              </Row>
            </>

            <div
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Button htmlType="submit" type="primary">
                Log in
              </Button>
              <Button type="primary" ghost>
                Sign up
              </Button>
            </div>
          </Form>
        </Paper>
      </Container>
    </div>
  );
};

export default SignIn;
