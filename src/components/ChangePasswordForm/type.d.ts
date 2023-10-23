export type ChangePasswordFieldType = {
    oldPassword?: string,
    newPassword?: string,
    repeatNewPassword?: string
}

export interface ChangePasswordFormFields {
    oldPassword: string,
    newPassword: string,
    repeatNewPassword: string
}

export interface ChangePasswordData {
    username: string,
    oldPassword: string,
    newPassword: string
}