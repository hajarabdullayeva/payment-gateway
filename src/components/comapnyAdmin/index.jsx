import { Button, Form, Input, Select, Space, Tooltip, Typography } from "antd";
import React from "react";
const { Option } = Select;

const FormPayment = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="complex-form"
      onFinish={onFinish}
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
    >
      <Form.Item label="Email">
        <Form.Item
          name="email"
          noStyle
          rules={[
            {
              required: true,
              message: "Email is required",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
            }}
            placeholder="test@gmail.com"
          />
        </Form.Item>
      </Form.Item>

      <Form.Item label="Card Details">
        <Form.Item
          name="email"
          noStyle
          rules={[
            {
              required: true,
              message: "Email is required",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
            }}
            placeholder="Please input"
          />
        </Form.Item>

        <Space>
          <Input.Group compact>
            <Form.Item
              name={["Card", "card date"]}
              noStyle
              rules={[
                {
                  required: true,
                  message: "Card Date is required",
                },
              ]}
            >
              <Input
                style={{
                  width: "50%",
                }}
                placeholder="MM/YY"
              />
            </Form.Item>
            <Form.Item
              name={["card", "CVC"]}
              noStyle
              rules={[
                {
                  required: true,
                  message: "CVC is required",
                },
              ]}
            >
              <Input
                style={{
                  width: "50%",
                }}
                placeholder="CVC"
              />
            </Form.Item>
          </Input.Group>
          <Tooltip title="Useful information">
            <Typography.Link href="#API">Need Help?</Typography.Link>
          </Tooltip>
        </Space>
      </Form.Item>

      <Form.Item label="Name on the card">
        <Form.Item
          name="name"
          noStyle
          rules={[
            {
              required: true,
              message: "Name is required",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
            }}
            placeholder="Hajar Abdullayeva"
          />
        </Form.Item>
      </Form.Item>

      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormPayment;
