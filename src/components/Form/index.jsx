import { Button, Form, Input, Radio, Space } from 'antd';
import React, { useState } from 'react';
import Logo from '../Logo';
import Links from '../Links';

import './form.css';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';
const FormApp = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        const options = {
            method: 'POST',
            url: `https://askyourmentor.eraasoft.com/api/event/askyourmentor`,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            data: {
                name: values.name,
                email: values.email,
                phone: values.mobile,
                specialization: values.specializtion,
                fuculty: values.fuclity,
            },
        };

        axios(options)
            .then(function (response) {
                let send = async function () {
                    // console.log(response.data);
                    return;
                };
                send().then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: response.data.message,
                        text: 'Your message send successfully',
                        // footer: '<a href="http://" target="_blank" rel="noopener noreferrer">Facebook Group</a>',
                        showConfirmButton: false,
                    });
                    setLoading(false);
                    form.resetFields();
                });
            })
            .catch(function (errors) {
                setLoading(false);
                const errs = [...Object.values(errors.response.data.errors)];
                Swal.fire({
                    icon: 'error',
                    title: errors.response.data.message,
                    showConfirmButton: false,
                    text: errs[0].map((e) => `${e}`),
                });
            });
    };

    return (
        <div className="container pt-5">
            <div className="row align-items-center justify-content-center mx-1 mx-lg-0">
                <Form
                    form={form}
                    name="event"
                    onFinish={onFinish}
                    layout="vertical"
                    className="col-12 col-lg-6 bg-white shadow rounded-4 px-4 py-5 position-relative form__app"
                >
                    <Logo />

                    <div className="row">
                        <div className="col-12">
                            <Form.Item
                                name="name"
                                label="Full Name"
                                rules={[
                                    {
                                        type: 'text',
                                        message: 'Please input your Name!',
                                    },
                                    {
                                        message: 'The input is not valid Name!',
                                        required: true,
                                        max: 100,
                                        min: 2,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>

                        <div className="col-12">
                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                    {
                                        type: 'email',
                                        message:
                                            'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>

                        <div className="col-12">
                            <Form.Item
                                name="mobile"
                                label="Mobile & whatsapp"
                                rules={[
                                    {
                                        type: 'text',
                                        message:
                                            'Please input your Mobile Number!',
                                    },
                                    {
                                        required: true,
                                        pattern:
                                            /^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$/,
                                        max: 11,
                                        min: 11,
                                        message:
                                            'The input is not valid Mobile Number!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>

                        <div className="col-12">
                            <Form.Item
                                name="fuclity"
                                label="Fuclity"
                                rules={[
                                    {
                                        type: 'text',
                                        message: 'Please input your Fuclity!',
                                    },
                                    {
                                        required: true,
                                        message:
                                            'The input is not valid Fuclity!',
                                        max: 100,
                                        min: 2,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>

                        <div className="col-12">
                            <Form.Item
                                name="specializtion"
                                label="Specializtion"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Please pick an specializtion!',
                                    },
                                ]}
                            >
                                <Radio.Group>
                                    <Space direction="vertical">
                                        <Radio value="web">Web</Radio>
                                        <Radio value="mobile">Mobile</Radio>
                                        <Radio value="javascript">
                                            Javascript
                                        </Radio>
                                        <Radio value="backend">Backend</Radio>
                                    </Space>
                                </Radio.Group>
                            </Form.Item>
                        </div>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="w-100 d-flex align-items-center justify-content-center"
                                disabled={loading ? true : false}
                            >
                                {loading ? (
                                    <Spinner
                                        animation="border"
                                        variant="primary"
                                        size="sm"
                                    />
                                ) : (
                                    <>Send</>
                                )}
                            </Button>
                        </Form.Item>
                    </div>
                    <Links />
                </Form>
            </div>
        </div>
    );
};

export default FormApp;
