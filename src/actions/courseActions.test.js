// B''H //







// --------------------------------------------------------------------------------
import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

/*
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
*/
// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
// Test a sync action

/*
 Testing an action creator is very simple.
 All we need to do is assert that it returns the expected object.

 I want to be honest with you. I find unit testing something this simple rather silly.
 We're basically going to end up repeating ourselves verbatim in our test.

 I find the integration style store test that we'll write at the end of this module useful.
 */
describe('TEST ACTION CREATOR - Course Actions', () => {

    describe('createCourseSuccess', () => {

        it('should create a CREATE_COURSE_SUCCESS action', () => {
            //arrange
            const course         = {id: 1, title: 'Clean Code'};
            const expectedAction = {
                type  : types.CREATE_COURSE_SUCCESS,
                course: course
            };

            //act
            const action = courseActions.createCourseSuccess(course);

            //assert
            expect(action).toEqual(expectedAction);
        });

    });
});
// --------------------------------------------------------------------------------





/*
FIX FIX FIX FIX FIX FIX FIX FIX FIX FIX FIX FIX FIX FIX FIX FIX FIX FIX FIX FIX FIX FIX
 NEED TO FIX HOW TO TEST IT:
 - https://github.com/github/fetch/issues/329

 It sounds like you're getting the error only in the test environment (which looks like it's
 being executed under node.js), and not in the browser environment. We don't support whatwg-fetch
 under node. That's why the community has come up with the node-fetch and isomorphic-fetch projects,
 of which you might want to try the latter, but please note that we can't provide any support for them.
 You'll have to figure out yourself how to load them.
 */



// --------------------------------------------------------------------------------
/*
Thunks handle:
    - asynchrony
    - often dispatch multiple actions
    - often interact with web APIs

We need to mock two things
   1: The store (we'll use the redux-mock-store library)

   2: The HTTP calls (we'll use Nock, which stands for Node mock)
      Our app is already using a mock API that doesn't generate actual HTTP calls, so we don't need Nock.
      But I'll show you how to set Nock up regardless.
*/
/*
const middleware = [thunk];
const mockStore  = configureMockStore(middleware);


describe('TEST THUNK - loadCourses', () => {

    afterEach(() => {
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {


        const expectedActions = [
            {type: types.BEGIN_AJAX_CALL},
            {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 1, title: 'Clean Code'}]}}
        ];

        const store = mockStore({courses: []}, expectedActions, done);

        store.dispatch(courseActions.loadCourses()).then(() => {
            const actions = store.getActions();

            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);

            expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);

            // We use the done callback right here to declare that
            // we're done, and that completes the asynchronous flow.
            done();
        });
    });

});
*/
// --------------------------------------------------------------------------------


