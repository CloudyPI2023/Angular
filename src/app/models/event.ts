import { Reservation } from "./reservation";

export class Event {


    idEvent: number;
    nameEvent: string;
    descriptionEvent: string;
    locationEvent: string;
    imageEvent: string;
    beginsAtEvent: Date;
    endsAtEvent: Date;
    idAssociation: number;
    reservationsEvent: Reservation[];
    

}
