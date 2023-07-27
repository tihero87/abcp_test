import {ICompany} from "./ICompany";

export interface IUser {
    id: number;
    email: string;
    name: string;
    phone: string;
    username: string;
    website: string;
    company: ICompany;
    address: string;
}