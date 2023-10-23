import React from "react";
import {message, Modal, Typography} from "antd";
import {useAppDispatch} from "../../modules/hooks.ts";
import {deleteCar} from "../../redux/carSlice.ts";
import {CarDeleteModalProps} from "./type";

const {Title, Text} = Typography
const CarDeleteModal: React.FC<CarDeleteModalProps> = ({
                                                           isDeleteModalOpen,
                                                           setIsDeleteModalOpen,
                                                           deleteCarId
    }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const key: string = 'deleteCar';
    const dispatch = useAppDispatch()
    const handleDeleteOk = async (): Promise<void> => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'The delete is in progress...'
        })

        dispatch(deleteCar({id: deleteCarId!}))
            .then((action) => {
                if (action.payload.success) {
                    setTimeout(() => {
                        messageApi.open({
                            key,
                            type: 'success',
                            content: 'Delete process successful',
                            duration: 2
                        })
                        setIsDeleteModalOpen(false)
                        window.location.reload()
                    }, 1500)
                }
            })
            .catch((error) => {
                setTimeout(() => {
                    messageApi.open({
                        key,
                        type: 'error',
                        content: `Delete process failed. Error :  ${error}`,
                        duration: 2
                    })
                    setIsDeleteModalOpen(false)
                }, 1500)
            })
    }

    const handleDeleteCancel = (): void => {
        setIsDeleteModalOpen(false)
    }

    return (
        <>
            {contextHolder}
            <Modal
                title={<Title level={3}>Delete Car</Title>}
                open={isDeleteModalOpen}
                onOk={handleDeleteOk}
                onCancel={handleDeleteCancel}
            >
                <Text>
                    Are you sure you want to delete this record?
                </Text>
            </Modal>
        </>
    )
}


export default CarDeleteModal