import React, {useEffect} from "react";
import {Button, Col, Divider, Flex, Form, Input, Row, message} from "antd";
import {CarEditFormProps, EditCarData, EditFormValues} from "./type";
import {useAppDispatch, useAppSelector} from "../../modules/hooks.ts";
import {editCar} from "../../redux/carSlice.ts";

const CarEditForm: React.FC<CarEditFormProps> = ({setIsEditModalOpen}) => {
    const [form] = Form.useForm()
    const [messageApi, contextHolder] = message.useMessage();
    const key: string = 'editCar';
    const selectedCar = useAppSelector((state) => state.carReducer.selectedCar)
    const dispatch = useAppDispatch()

    useEffect(() => {
        form.setFieldsValue({
            name: selectedCar?.name,
            brand: selectedCar?.brand,
            model: selectedCar?.model,
            year: selectedCar?.year,
            plaque: selectedCar?.plaque
        })
        form.validateFields()
    }, [form, selectedCar])

    const onFinish = async (values: EditFormValues): Promise<void> => {
        const data: string | null = localStorage.getItem("isAuth")
        const parseData = data !== null ? JSON.parse(data) : null
        const updateCar: EditCarData = {
            id: selectedCar.id || 0,
            userId: parseData?.userId,
            ...values
        }

        messageApi.open({
            key,
            type: 'loading',
            content: 'The update is in progress...'
        })

        dispatch(editCar(updateCar))
            .then((action) => {
                if (action.payload.success) {
                    setTimeout(() => {
                        messageApi.open({
                            key,
                            type: 'success',
                            content: 'Update process successful',
                            duration: 2
                        })
                        setIsEditModalOpen(false)
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
                        content: `Update process failed. Error :  ${error}`,
                        duration: 2
                    })
                    setIsEditModalOpen(false)
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
                            name={"carEditForm"}
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
                            <Form.Item<EditFormValues>
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

                            <Form.Item<EditFormValues>
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

                            <Form.Item<EditFormValues>
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

                            <Form.Item<EditFormValues>
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

                            <Form.Item<EditFormValues>
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
                                        Edit
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

export default CarEditForm