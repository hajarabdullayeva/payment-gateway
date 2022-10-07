import { Button, Form, Input, Select, Space, Tooltip, Typography } from "antd";
import React from "react";
import { paymentNetwork } from "../../network/requests/paymentNetwork.js";

const FormPayment = () => {
  const [form] = Form.useForm();

  function addPayment(values) {
    paymentNetwork.addPayment(values);
    form.resetFields();
  }

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      form={form}
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
          name="card"
          noStyle
          rules={[
            {
              required: true,
              message: "Card number is required",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
            }}
            placeholder="1234 1234 1234 1234"
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
            <Typography.Link
              href="#API"
              style={{ color: "#fff", fontWeight: 600 }}
            >
              Need Help?
            </Typography.Link>
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
        <Button type="primary" htmlType="submit" onClick={addPayment}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormPayment;
