import React from "react";

export interface CarEditModalProps {
    isEditModalOpen: boolean,
    setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}