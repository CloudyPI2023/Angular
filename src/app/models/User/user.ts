import { Gender } from "./gender";
import { Role } from "./role";

export class User {
  idUser: number;
  firstName: String;
  lastName: String;
  gender: Gender;
  birthDate: string;
  address: String;
  city: String;
  email: String;
  createdAt: Date;
  phoneNumber: number;
  role: Role;
  image_user: String;
  locked: Boolean;
  enabled: Boolean;
  password: String;

}
