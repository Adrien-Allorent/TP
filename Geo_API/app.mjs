const corsHeaders = {
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Method": "GET",
};

const getCity = () => {
    const random = Math.floor(Math.random() * 5);
    const cities = ["Paris", "Nantes", "Marseille", "Pau", "Carcassonne"];
    return cities[random];
};

export const lambdaHandler = async (event, context) => {
    const latitude = event.queryStringParameters.lat;
    const longitude = event.queryStringParameters.lat;

    const response = {latitude, longitude, city: getCity()};

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