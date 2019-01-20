import * as https from "https";


export const getBalanceById = (id: String) => {
    let apiKey = "ak_test_k45SfJbFXR5nlk8aqFccKC4GWAguKa";

    let value: any = "";

    return new Promise((resolve, reject) => {

        let balance:object = new Object();
        https.get(`https://api.pagar.me/1/recipients/${id}/balance?api_key=${apiKey}`, (resp) => {
            resp.on("data", (chunk) => {
                value += chunk;
            })

            resp.on("error", (err) => {
                console.log(err);
            })

            resp.on("end", () => {
                resolve(JSON.parse(value))
            })

        })

        
       
    })

}





