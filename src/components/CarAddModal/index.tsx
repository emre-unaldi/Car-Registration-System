import React from "react";
import {Modal, Typography} from "antd";
import CarAddForm from "../CarAddForm";
import {CarAddModalProps} from "./type";

const {Title} = Typography
const CarAddModal: React.FC<CarAddModalProps> = ({setIsAddModalOpen, isAddModalOpen}) => {
    const handleAddOk = (): void => {
        setIsAddModalOpen(false)
    }

    const handleAddCancel = (): void => {
        setIsAddModalOpen(false)
    }

    return (
        <Modal
            title={<Title level={1}>Add Car</Title>}
            open={isAddModalOpen}
            onOk={handleAddOk}
            onCancel={handleAddCancel}
            footer={false}
        >
            <CarAddForm setIsAddModalOpen={setIsAddModalOpen}  />
        </Modal>
    )
}

export default CarAddModal