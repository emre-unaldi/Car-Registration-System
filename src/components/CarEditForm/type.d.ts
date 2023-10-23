import React from "react";

export interface EditFormValues {
    name: string,
    brand: string,
    model: string,
    year: number,
    plaque: string
}

export interface CarEditFormProps {
    setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface EditCarData {
    id: number,
    name: string,
    brand: string,
    model: string,
    year: number,
    plaque: string,
    userId: number
}