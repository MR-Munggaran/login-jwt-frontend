import React from "react";
import { Card, Flex, Typography, Form, Input, Button, Alert, Spin } from "antd";
import { Link } from "react-router-dom";
import registerImage from "../assets/register.jpg";
import useSignup from "../hooks/useSignup";
function Register() {
  const { loading, error, registerUser } = useSignup();
  const handleRegister = (values) => {
    registerUser(values)
  };
  return (
    <Card className="form-container">
      <Flex gap="large" align="center">
        {/* form */}
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Create an account
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Join for exclusive access!
          </Typography.Text>
          <Form layout="vertical" onFinish={handleRegister} autoComplete="off">
            <Form.Item
              label="Full name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your fulll NAME",
                },
              ]}
            >
              <Input placeholder="full name" size="large" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email",
                },
                {
                  type: "email",
                  message: "The input is not valid email",
                },
              ]}
            >
              <Input placeholder="Email" size="large" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password",
                },
              ]}
            >
              <Input.Password placeholder="Password" size="large" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="passwordConfirm"
              rules={[
                {
                  required: true,
                  message: "Please input your Confirm Password",
                },
              ]}
            >
              <Input.Password placeholder="Re-Password" size="large" />
            </Form.Item>
            {
                        error&& <Alert description={error} showIcon closable className='alert'/>
                    }
            <Form.Item>
              <Button
                type={`${loading ? "" : "primary"}`}
                htmlType="submit"
                size="large"
                className="btn"
              >
                {loading ? <Spin/> : "Create Account"}
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/login">
                <Button size="large" className="btn">
                  Sign in
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>
        <Flex flex={1}>
          <img src={registerImage} className="auth-image" />
        </Flex>
      </Flex>
    </Card>
  );
}

export default Register;
