import {Category} from "./category"
import {User} from "./user"
import { Reclamation } from "./reclamation";


export class Product {
    idProduct:number;
    referenceProduct:String;
    nameProduct:String;
    imageProduct:String;
    descriptionProduct:String;
    priceProduct:number;
    quantityProduct:number;
    availabilityProduct:number;
    expirationDateProduct:Date;
    userProduct:User[];
    categoryProduct:Category[];
    ReclamationsProduct:Reclamation[]

}
