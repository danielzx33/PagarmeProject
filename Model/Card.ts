 export class Card{

    public card_number: string;
    public card_cvv: string;
    public card_expiration_date: string;
    public card_holder_name: string;
       

    constructor(body){
        this.card_number = body.cardNumber
        this.card_cvv = body.cardCvv
        this.card_expiration_date = body.cardExpiration
        this.card_holder_name = body.cardName
    }
}