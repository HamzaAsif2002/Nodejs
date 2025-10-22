import https from "https";
import readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const apikey = "ecc2cdad201e3f8491bbd62d";
const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;

const convertCurrency = (amount, rate) => {
    return (amount * rate).toFixed(2);
}

https.get(url , (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    })

    response.on("end" , () => {
        let rates = JSON.parse(data).conversion_rates;

        rl.question("Enter the amount in USD:", (amount) => {
            rl.question("Enter the target currency (e.g., INR, EUR, PKR ): ", (currency) => {
                const rate = rates[currency.toUpperCase()]
                if(rate){
                 console.log(`${amount} Dollar is approximately ${convertCurrency(amount, rate)} ${currency}`);
                }
                else{
                    console.log("Enter Correct Currency");                   
                }
                rl.close(); 
            })
           
        })    
           
    })
})
