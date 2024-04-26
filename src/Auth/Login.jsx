import React from 'react'
import { Card, Flex, Typography, Form, Input, Button, Alert, Spin } from "antd";
import { Link } from "react-router-dom";
import registerImage from "../assets/register.jpg";
import useLogin from '../hooks/useLogin';

function Login() {
    const {error, loading, loginUser} = useLogin()
    const handleLogin = async (v) => {
        await loginUser(v)
    }
  return (
    <Card className="form-container">
    <Flex gap="large" align="center">
      {/* form */}
      <Flex flex={1}>
        <img src={registerImage} className="auth-image" />
      </Flex>
      <Flex vertical flex={1}>
        <Typography.Title level={3} strong className="title">
          Sign In
        </Typography.Title>
        <Typography.Text type="secondary" strong className="slogan">
          Unlock Your World!
        </Typography.Text>
        <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
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
              {loading ? <Spin/> : "Sign In"}
              
            </Button>
          </Form.Item>
          <Form.Item>
            <Link to="/">
              <Button size="large" className="btn">
                Create Account
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  </Card>
  )
}

export default Login