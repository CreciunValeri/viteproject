export interface IUser{
    password?: string,
    userName: string
}

export const defaultUser: IUser = {
    userName: ''
 }