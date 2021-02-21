import fetch from "node-fetch";

const happi_key = process.env.REACT_APP_HAPPI_KEY;

async function getCountry(query_artist){
    const id_response = await fetch(`https://api.happi.dev/v1/music?q=${encodeURI(query_artist)}&limit=1&apikey=${happi_key}&type=artist&lyrics=0`);
    const id_json = await id_response.json();
    const id = id_json['result']['0']['id_artist'];

    const country_response = await fetch(`https://api.happi.dev/v1/music/artists/${id}?apikey=${happi_key}`);
    const country_json = await country_response.json();
    const country = country_json['result']['country'];

    return country;
};

export {
    getCountry
};