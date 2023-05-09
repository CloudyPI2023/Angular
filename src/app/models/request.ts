import { DonationRequestType } from "app/enumeration/donation-request-type";
import { Association } from "./association";
import { RequestDonationStatus } from "app/enumeration/request-donation-status";

export class Request {
    idRequest: number;
    nameRequest: string;
    descriptionRequest: string;
    requestType: DonationRequestType;
    dateRequest: Date;
    statusRequest: RequestDonationStatus; 
    association: Association[];
    idDonation: number[];
}
