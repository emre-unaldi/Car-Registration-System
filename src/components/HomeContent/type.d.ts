import {CarData} from "../../redux/type";

export interface TableCarData {
    id?: number,
    key: string,
    name: string,
    plaque: string,
    model: string,
    brand: string,
    year: number,
    userId?: number
}

export interface GetAllCarsData {
    success: boolean,
    message: string,
    data: CarData[]
}