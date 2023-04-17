import {User} from "./user"
import { Product } from "./product";
import { Article } from "./article";



export class Comment {

    idComment:number;
    DescriptionComment:String;
    DateComment:Date;
    userComment:User[];
    articleComment:Article[];
    productComment:Product[];
}
