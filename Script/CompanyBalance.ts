import * as https from "https";


export const getBalanceById = (id: String) => {
    let apiKey = "ak_test_k45SfJbFXR5nlk8aqFccKC4GWAguKa";
    let value: any = "";
    let ret;

    return new Promise((resolve, reject) => {


        https.get(`https://api.pagar.me/1/recipients/${id}/balance?api_key=${apiKey}`, (resp) => {

            resp.on("data", (a) => {
                value += a;
            })

            resp.on("error", (a) => {
                console.log(a);
            })

            resp.on("end", () => {

                resolve(JSON.parse(value))
            })

        })
    })

}


