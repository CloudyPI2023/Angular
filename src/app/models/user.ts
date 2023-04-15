import { Donation } from "./donation";

export class User {
    idUser: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    adress: string;
    city: string;
    password: string;
    role: string;
    donationsUser: Donation;
}
