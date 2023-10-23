import React from 'react'
import {Button, Col, Divider, Flex, Form, Input, Row} from 'antd'
import {LockOutlined, UserOutlined} from '@ant-design/icons'
import styles from "./styles.module.css"
import {RegisterFieldType, RegisterFormFields} from "./type";
import {registerUser} from "../../redux/userSlice.ts";
import {useAppDispatch} from "../../modules/hooks.ts";
import {useNavigate} from "react-router-dom";

const RegisterForm: React.FC = () => {
    const [form] = Form.useForm()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onFinish = async (values: RegisterFormFields): Promise<void> => {
        dispatch(registerUser(values))
            .then((action) => {
                if (action.payload.success === true) {
                    navigate("/")
                    form.resetFields()
                }
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <>
            <Divider/>
            <Row>
                <Col span={24}>
                    <Flex vertical align={"center"} justify={"center"}>
                        <Form
                            form={form}
                            name={"signUp"}
                            onFinish={onFinish}
                            labelCol={{span: 12}}
                            wrapperCol={{span: 24}}
                            size={"large"}
                            colon={false}
                            layout={"vertical"}
                            autoComplete={"off"}
                            className={styles.signUpForm}
                        >
                            <Form.Item<RegisterFieldType>
                                name={"username"}
                                hasFeedback
                                validateDebounce={1000}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username'
                                    },
                                    {
                                        pattern: /^[a-zA-Z0-9]+$/,
                                        message: "Username cannot contain space characters"
                                    }
                                ]}
                            >
                                <Input
                                    prefix={<UserOutlined className={styles.inputPrefixIcon}/>}
                                    placeholder="Enter username"
                                />
                            </Form.Item>
                            <Form.Item<RegisterFieldType>
                                name={"password"}
                                hasFeedback
                                validateDebounce={1000}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your password"
                                    }
                                ]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className={styles.inputPrefixIcon}/>}
                                    placeholder={"Enter password"}
                                />
                            </Form.Item>
                            <Form.Item<RegisterFieldType>
                                name={"repeatPassword"}
                                dependencies={['password']}
                                hasFeedback
                                validateDebounce={1000}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your repeat password"
                                    },
                                    ({getFieldValue}) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject("Passwords do not match!");
                                        }
                                    })
                                ]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className={styles.inputPrefixIcon}/>}
                                    placeholder={"Enter repeat password"}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Flex justify={"center"} align={"center"}>
                                    <Button
                                        type={"primary"}
                                        htmlType={"submit"}
                                        className={styles.signUpBtn}
                                    >
                                        Sign Up
                                    </Button>
                                </Flex>
                            </Form.Item>
                        </Form>
                    </Flex>
                </Col>
            </Row>
            <Divider/>
        </>
    )
}

export default RegisterForm