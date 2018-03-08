// B''H //



// ----------------------------------------------------------------------------
import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();
// ----------------------------------------------------------------------------


// ----------------------------------------------------------------------------
function get(url) {
    return fetch(baseUrl + url).then(onSuccess, onError);
}
// ----------------------------------------------------------------------------


// ----------------------------------------------------------------------------
function put(url, course) {

    const request = new Request(baseUrl + url, {
        method : 'PUT',
        body   : JSON.stringify(course),
        headers: {
            "Content-Type": "application/json"
        }
    });

    return fetch(request).then(onSuccess, onError);
}
// ----------------------------------------------------------------------------


// ----------------------------------------------------------------------------
function post(url, course) {

    const request = new Request(baseUrl + url, {
        method : 'POST',
        body   : JSON.stringify(course),
        headers: {
            "Content-Type": "application/json"
        }
    });

    return fetch(request).then(onSuccess, onError);
}

// ----------------------------------------------------------------------------


// ----------------------------------------------------------------------------
function del(url) {
    const request = new Request(baseUrl + url, {
        method: 'DELETE'
    });

    return fetch(request).then(onSuccess, onError);
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


// ----------------------------------------------------------------------------
class CourseApi {


    static getCourses() {
        return get('courses');
    }


    static deleteCourse(id) {
        return del(`courses/${id}`);
    }


    static saveCourse(course) {

        course = Object.assign({}, course); // to avoid manipulating object passed in.

        if (course.id) {
            return put(`courses/${course.id}`, course);
        } else {
            return post('courses', course);
        }
    }

}
// ----------------------------------------------------------------------------


export default CourseApi;



