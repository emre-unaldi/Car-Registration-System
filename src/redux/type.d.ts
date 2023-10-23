
export interface CarData {
    id?: number,
    key?: string,
    name: string,
    plaque: string,
    model: string,
    brand: string,
    year: number,
    userFirstName: string,
    userLastName: string
}

export interface UserData {
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    cars: Array<CarData>
}

interface initialStateUserData {
    login: {
        data: UserData[],
        loading: boolean,
        error: string
    },
    register: {
        data: {
            success: boolean,
            message: string,
            data: null
        },
        loading: boolean,
        error: string
    },
    changePasswordUser: {
        data: {
            success: boolean,
            message: string
        },
        loading: boolean,
        error: string
    }
}

interface initialStateCarData {
    selectedCar: CarData,
    getAllCars: {
        data: {
            success: boolean,
            message: string,
            data: CarData[]
        },
        loading: boolean,
        error: string
    },
    addCar: {
        data: {
            success: boolean,
            message: string,
            data: {
                name: string,
                plaque: string,
                model: string,
                brand: string,
                year: number,
                userId: number
            }
        },
        loading: boolean,
        error: string
    },
    editCar: {
        data: {
            success: boolean,
            message: string,
            data: {
                name: string,
                plaque: string,
                model: string,
                brand: string,
                year: number,
                userId: number
            }
        },
        loading: boolean,
        error: string
    },
    deleteCar: {
        data: null,
        loading: boolean,
        error: string
    }
}

export interface RegisterData {
    username: string,
    password: string,
    repeatPassword: string
}

export interface LoginData {
    username: string,
    password: string
}

export interface ChangePasswordData {
    username: string,
    oldPassword: string,
    newPassword: string
}

export interface AddCarData {
    name: string,
    brand: string,
    model: string,
    year: number,
    plaque: string,
    userId: number
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