// B''H //


// --------------------------------------------------------------------------------
import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();
// --------------------------------------------------------------------------------


// ----------------------------------------------------------------------------
function get(url) {
    return fetch(baseUrl + url).then(onSuccess, onError);
}
// ----------------------------------------------------------------------------


// ----------------------------------------------------------------------------
function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error); // eslint-disable-line no-console
}
// ----------------------------------------------------------------------------


// --------------------------------------------------------------------------------
class AuthorApi {

    static getAuthors() {
        return get('authors');
    }

}
// --------------------------------------------------------------------------------


export default AuthorApi;

