const corsHeaders = {
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Method": "GET",
};

const getWeather = () => {
    const random = Math.floor(Math.random() * 5);
    const weathers = ["Ensoleillé", "Nuageux", "Venteux", "Pluvieux", "Orageux"];
    const hints = ["Prenez votre chapeau",
                   "Couvrez-vous bien", 
                   "N'oubliez pas votre manteau", 
                   "Prennez votre parapluie", 
                   "Vous savez, le télétravail c'est bien aussi"];
    return weathers[random], hints[random];
};

export const lambdaHandler = async (event, context) => {
    const city = event.queryStringParameters.city;
    const [weather, hint] = getWeather();

    const response = {city, weather, hint};

    try{
        return{
            statusCode: 200,
            body: JSON.stringify(response),
            headers: corsHeaders,
        };
    } catch (error) {
        console.log(error);
        return error;
    }
};