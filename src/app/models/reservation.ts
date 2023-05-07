import { User } from "./user";

export class Reservation {
    idReservation?: number;
    dateReservation: Date;
    userReservation: User[];
    codeReservation : number;
    event: Event;

    
  }