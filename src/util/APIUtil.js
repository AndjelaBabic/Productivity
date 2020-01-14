import { API_BASE_URL } from '../constants/constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':  'http://localhost:3000', 
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Credentials': true,
    })

    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
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
    });
}