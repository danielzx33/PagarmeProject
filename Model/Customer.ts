import { Document } from "./Documents";

export class Customer{
    
    public external_id: string;
    public name: string;
    public type: string;
    public country: string;
    public email: string;
    public documents: Document[];
    public phone_numbers: string[];
    public birthday: string;


    
}