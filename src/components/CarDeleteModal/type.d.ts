import React from "react";

export interface CarDeleteModalProps {
    isDeleteModalOpen: boolean,
    setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    deleteCarId?: number
}