const APIKEY = "bb8d68b5c13e0349f5f129c878f2eb3b"; //PUBLIC KEY
const HASH = "f424d57bc55fd89db75fa1e4ee8ebd35"; //HASH
const TS = "1";
const URL = "http://gateway.marvel.com/v1/public/";
//const URL ="/data/";

const CLIENT ={
    sendRequest : async (path)=> {
        const response = await fetch(
            URL +
              path +
              "?ts=" +
              TS +
              "&apikey=" +
              APIKEY +
              "&hash=" +
              HASH
          );
          // Validar la respuesta
          if (!response.ok) throw Error(response.statusText);
          // Extraer la información
          const json = await response.json();
          return json.data.results;
    }

};
export default CLIENT
