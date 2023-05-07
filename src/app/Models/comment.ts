import {User} from "./user"
import { Article } from "./article";



export class Comment {

    idComment:number;
    descriptionComment:String;
    dateComment:Date;
    userComment:User[];
    articleComment:Article[];
}
