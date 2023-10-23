import React from "react";
import CarEditForm from "../CarEditForm";
import {Modal, Typography} from "antd";
import {CarEditModalProps} from "./type";

const {Title} = Typography

const CarEditModal: React.FC<CarEditModalProps> = ({
                                                       isEditModalOpen,
                                                       setIsEditModalOpen
    }) => {
    const handleEditOk = (): void => {
        setIsEditModalOpen(false)
    }

    const handleEditCancel = (): void => {
        setIsEditModalOpen(false)
    }

    return (
        <Modal
            title={<Title level={1}>Edit Car</Title>}
            open={isEditModalOpen}
            onOk={handleEditOk}
            onCancel={handleEditCancel}
            footer={false}
        >
            <CarEditForm setIsEditModalOpen={setIsEditModalOpen} />
        </Modal>
    )
}

export default CarEditModal