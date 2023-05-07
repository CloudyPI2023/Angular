import { Command } from "./command";
import { Purchase } from "./purchase";

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
    commandUser: Command;
    userPurchase: Purchase;

}
