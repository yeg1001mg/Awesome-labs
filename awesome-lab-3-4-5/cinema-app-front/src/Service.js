import {store} from "./store";
import ky from 'ky';

export default function doRequest(url, options) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const state = store.getState();
    const token = state.auth.token.value;
    const tokenType = state.auth.tokenType;
    const tokenService = state.auth.token.service;

    url = window.location.origin + '/' + url;
    if (token && tokenType && tokenService) {
        headers.append("Authorization", tokenType + " " + token);
        headers.append("TokenService", tokenService);
    }
    options = {...options, headers: headers};
    switch (options.method) {
        case 'POST':
            return ky.post(url, options).json();
        case 'DELETE':
            return ky.delete(url, options).json();
        case 'PUT':
            return ky.put(url, options).json();
        default:
            return ky.get(url, options).json();
    }

}
