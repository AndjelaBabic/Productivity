import { API_BASE_URL } from '../constants/constants';
import { Routes } from './Routes';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin':  'http://localhost:3000', 
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Credentials': true,
    })

    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options).then(response => 
            response.json().then(json => {
                if (!response.ok) {
                    console.log(response); 
                    console.log(json); 
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
});}

export function addBoard(boardRequest) {
    console.log( JSON.stringify(boardRequest));
    return request({
        url: API_BASE_URL + Routes.ADD_BOARD,
        method: 'POST',
        body: JSON.stringify(boardRequest)
}); }

export function addList(listRequest) {
    console.log( JSON.stringify(listRequest));
    return request({
        url: API_BASE_URL + Routes.ADD_LIST,
        method: 'POST',
        body: JSON.stringify(listRequest)
}); }

export function addCard(cardRequest) {
    console.log( JSON.stringify(cardRequest));
    return request({
        url: API_BASE_URL + Routes.ADD_CARD,
        method: 'POST',
        body: JSON.stringify(cardRequest)
}); }
