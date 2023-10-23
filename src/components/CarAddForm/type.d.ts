import React from "react";

export interface CarAddFormProps {
    setIsAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface AddFormValues {
    name: string,
    brand: string,
    model: string,
    year: number,
    plaque: string
}

export interface AddCarData {
    name: string,
    brand: string,
    model: string,
    year: number,
    plaque: string,
    userId: number
}