import { Product } from "../../Models/product";
import {User} from "../User/user"

export class Reclamation {
    idReclamation:number;
    descriptionReclamation:String;
    dateReclamation:String;

    //NoSQL
    idUser:number;
    idProduct:number;

    userProduct:User;
    product:Product;
}
