export class Address {
    country:string;
    state:string;
    city:string; 
    neighborhood:string; 
    street:string; 
    street_number:string;
    zipcode:string;

    constructor(body){
        
        this.country =  "br" ;
        this.state = body.shipState;
        this.city = body.shipCity;
        this.neighborhood = body.shipNeighborhood;
        this.street = body.shipStreet;
        this.street_number = body.shipStreetNum;
        this.zipcode = body.shipZipcode;
    } 
}