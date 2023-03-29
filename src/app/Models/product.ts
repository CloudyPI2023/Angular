import {Category} from "./category"
import {User} from "../Models/user"
import { Reclamation } from "../Models/reclamation";


export class Product {
    idProduct:number;
    referenceProduct:String;
    nameProduct:String;
    imageProduct:String;
    descriptionProduct:String;
    priceProduct:number;
    quantityProduct:number;
    AvailabilityProduct:number;
    ExpirationDateProduct:Date;
    userProduct:User[];
    categoryProduct:Category[];
    ReclamationsProduct:Reclamation[]

}
