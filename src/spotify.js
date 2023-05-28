import axios from "axios";

const authEndPoint = "https://accounts.spotify.com/authorize?";
const clientID = "3c6c3a7f5aec449ca5cf6c085ba80a30";
const redirectURI = "http://localhost:3000";
//const clientSecret = "9998920a6e474504b5d5a4034ae1d16c";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndPoint = `${authEndPoint}client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

 const apiClient = axios.create({
    baseURL : "https://api.spotify.com/v1/",
 });

 export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config){
        config.headers.Authorization = "Bearers" + token;
        return config;
    })
 }

 export default apiClient;