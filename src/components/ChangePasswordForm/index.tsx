import React from 'react'
import {Button, Col, Divider, Flex, Form, Input, message, Row} from 'antd'
import {LockOutlined, UserOutlined} from '@ant-design/icons'
import styles from "./styles.module.css"
import {ChangePasswordData, ChangePasswordFieldType, ChangePasswordFormFields} from "./type";
import {useAppDispatch} from "../../modules/hooks.ts";
import {changePasswordUser} from "../../redux/userSlice.ts";

const ChangePasswordForm: React.FC = () => {
    const [form] = Form.useForm()
    const [messageApi, contextHolder] = message.useMessage();
    const key: string = 'changePassword';
    const dispatch = useAppDispatch()
    const onFinish = (values: ChangePasswordFormFields): void => {
        const data: string | null = localStorage.getItem("isAuth")
        const parseData = data !== null ? JSON.parse(data) : null
        const change: ChangePasswordData = {
            username: parseData.user,
            oldPassword: values.oldPassword,
            newPassword: values.newPassword
        }

        messageApi.open({
            key,
            type: 'loading',
            content: 'The change passsword is in progress...'
        })

        dispatch(changePasswordUser(change))
            .then((action) => {
                if (action.payload.success) {
                    setTimeout(() => {
                        messageApi.open({
                            key,
                            type: 'success',
                            content: 'User change password process successful',
                            duration: 2
                        })
                        form.resetFields()
                        window.location.reload()
                    }, 1500)
                }
            })
            .catch((error) => {
                setTimeout(() => {
                    messageApi.open({
                        key,
                        type: 'error',
                        content: `User change password process failed. Error :  ${error}`,
                        duration: 2
                    })
                }, 1500)
            })
    }

    return (
        <>
            {contextHolder}
            <Row>
                <Col span={24}>
                    <Flex vertical align={"center"} justify={"center"} style={{marginRight: 200, marginLeft: 200}}>
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
                            <Form.Item<ChangePasswordFieldType>
                                name={"oldPassword"}
                                hasFeedback
                                validateDebounce={1000}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your oldPassword'
                                    }
                                ]}
                            >
                                <Input
                                    prefix={<UserOutlined className={styles.inputPrefixIcon}/>}
                                    placeholder="Enter oldPassword"
                                />
                            </Form.Item>
                            <Form.Item<ChangePasswordFieldType>
                                name={"newPassword"}
                                hasFeedback
                                validateDebounce={1000}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your newPassword"
                                    }
                                ]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className={styles.inputPrefixIcon}/>}
                                    placeholder={"Enter newPassword"}
                                />
                            </Form.Item>
                            <Form.Item<ChangePasswordFieldType>
                                name={"repeatNewPassword"}
                                dependencies={['newPassword']}
                                hasFeedback
                                validateDebounce={1000}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your repeat new password"
                                    },
                                    ({getFieldValue}) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('newPassword') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject("Passwords do not match!");
                                        }
                                    })
                                ]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className={styles.inputPrefixIcon}/>}
                                    placeholder={"Enter repeat new password"}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Flex justify={"center"} align={"center"}>
                                    <Button
                                        type={"primary"}
                                        htmlType={"submit"}
                                        className={styles.signUpBtn}
                                    >
                                        Change Password
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

export default ChangePasswordForm