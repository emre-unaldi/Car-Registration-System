import React from "react";

export interface CarAddModalProps {
    isAddModalOpen: boolean,
    setIsAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}