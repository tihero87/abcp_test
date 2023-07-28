import {ICompany} from "./ICompany";

type AddressType = {
    street: string;
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}

export interface IUser {
    id: number;
    email: string;
    name: string;
    phone: string;
    username: string;
    website: string;
    company: ICompany;
    address: AddressType
}