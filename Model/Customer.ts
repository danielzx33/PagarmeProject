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
    


    constructor(body){

        this.external_id =  "0002"
        this.name = body.custName;
        this.type = "individual";
        this.country = "br";
        this.email = body.custEmail;
        this.documents =[ {
            number: body.custCpf,
            type: "cpf"
        }],
        this.birthday = body.custBirthday;
        this.phone_numbers = [("+55"+body.custPhone)]
    }
}