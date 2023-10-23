import React from "react";
import {Button, Col, Divider, Flex, Form, Input, message, Row} from "antd";
import {useAppDispatch} from "../../modules/hooks.ts";
import {addCar} from "../../redux/carSlice.ts";
import {AddCarData, AddFormValues, CarAddFormProps} from "./type";

const CarAddForm: React.FC<CarAddFormProps> = ({setIsAddModalOpen}) => {
    const [form] = Form.useForm()
    const [messageApi, contextHolder] = message.useMessage();
    const key: string = 'addCar'
    const dispatch = useAppDispatch()

    const onFinish = async (values: AddFormValues): Promise<void> => {
        const data: string | null = localStorage.getItem("isAuth")
        const parseData = data !== null ? JSON.parse(data) : null

        const addCarData: AddCarData = {
            userId: parseData?.userId,
            ...values
        }

        messageApi.open({
            key,
            type: 'loading',
            content: 'The add is in progress...'
        })

        dispatch(addCar(addCarData))
            .then((action) => {
                if (action.payload.success) {
                    setTimeout(() => {
                        messageApi.open({
                            key,
                            type: 'success',
                            content: 'Add process successful',
                            duration: 2
                        })
                        setIsAddModalOpen(false)
                        window.location.reload()
                        form.resetFields()
                    }, 1500)
                }
            })
            .catch((error) => {
                setTimeout(() => {
                    messageApi.open({
                        key,
                        type: 'error',
                        content: `Add process failed. Error :  ${error}`,
                        duration: 2
                    })
                    setIsAddModalOpen(false)
                }, 1500)
            })
    }

    return (
        <>
            {contextHolder}
            <Divider/>
            <Row>
                <Col span={24}>
                    <Flex vertical align={"center"} justify={"center"}>
                        <Form
                            form={form}
                            name={"carAddForm"}
                            onFinish={onFinish}
                            labelCol={{span: 12}}
                            wrapperCol={{span: 24}}
                            size={"middle"}
                            colon={false}
                            layout={"vertical"}
                            autoComplete={"off"}
                            style={{
                                width: "100%",
                                margin: "0 auto"
                            }}
                        >
                            <Form.Item<AddFormValues>
                                name={"name"}
                                hasFeedback
                                validateDebounce={1000}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your car name'
                                    }
                                ]}
                            >
                                <Input
                                    placeholder="Enter car name"
                                />
                            </Form.Item>

                            <Form.Item<AddFormValues>
                                name={"brand"}
                                hasFeedback
                                validateDebounce={1000}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your brand'
                                    }
                                ]}
                            >
                                <Input
                                    placeholder="Enter brand"
                                />
                            </Form.Item>

                            <Form.Item<AddFormValues>
                                name={"model"}
                                hasFeedback
                                validateDebounce={1000}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your model'
                                    }
                                ]}
                            >
                                <Input
                                    placeholder="Enter model"
                                />
                            </Form.Item>

                            <Form.Item<AddFormValues>
                                name={"year"}
                                hasFeedback
                                validateDebounce={1000}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your year'
                                    },
                                    {
                                        pattern: /^\d{4}$/,
                                        message: "You must enter a 4-digit number"
                                    }
                                ]}
                            >
                                <Input
                                    placeholder="Enter year"
                                />
                            </Form.Item>

                            <Form.Item<AddFormValues>
                                name={"plaque"}
                                hasFeedback
                                validateDebounce={1000}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your plaque'
                                    }
                                ]}
                            >
                                <Input
                                    placeholder="Enter plaque"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Flex justify={"center"} align={"center"}>
                                    <Button
                                        type={"primary"}
                                        htmlType={"submit"}
                                        style={{
                                            width: "100%",
                                            marginTop: 10
                                        }}
                                    >
                                        Add
                                    </Button>
                                </Flex>
                            </Form.Item>
                        </Form>
                    </Flex>
                </Col>
            </Row>
        </>
    )
}

export default CarAddForm