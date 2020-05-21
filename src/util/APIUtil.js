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

export function editCardTitle(cardRequest) {
    console.log( JSON.stringify(cardRequest));
    return request({
        url: API_BASE_URL + Routes.EDIT_CARD_TITLE,
        method: 'PUT',
        body: JSON.stringify(cardRequest)
}); }

export function editCardList(cardRequest) {
    console.log( JSON.stringify(cardRequest));
    return request({
        url: API_BASE_URL + Routes.EDIT_CARD_LIST,
        method: 'PUT',
        body: JSON.stringify(cardRequest)
}); }

export function editListTitle(listRequest) {
    console.log( JSON.stringify(listRequest));
    return request({
        url: API_BASE_URL + Routes.EDIT_LIST_TITLE,
        method: 'PUT',
        body: JSON.stringify(listRequest)
}); }

export function deleteList(listRequest) {
    console.log( JSON.stringify(listRequest));
    return request({
        url: API_BASE_URL + Routes.DELETE_LIST,
        method: 'DELETE',
        body: JSON.stringify(listRequest)
}); }

export function deleteCard(cardRequest) {
    console.log( JSON.stringify(cardRequest));
    return request({
        url: API_BASE_URL + Routes.DELETE_CARD,
        method: 'DELETE',
        body: JSON.stringify(cardRequest)
}); }

export function loadBoards() {
    return request({
        url: "http://www.mocky.io/v2/5ec6ec022f00007600426ecc",
        method: 'GET'
}); }

export function loadLists() {
    return request({
        url: "http://www.mocky.io/v2/5ec6ec4f2f00008500426ed1",
        method: 'GET'
}); }

export function loadCards() {
    return request({
        url: "http://www.mocky.io/v2/5ec6ecca2f00007e00426ed4",
        method: 'GET'
}); }

export function loadBoardOrder() {
    return request({
        url: "http://www.mocky.io/v2/5ec6efa62f00007200426eeb",
        method: 'GET'
}); }


