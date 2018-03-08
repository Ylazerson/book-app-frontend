// B''H //



/*
When testing the store, we're really writing an integration test rather than a unit test.
Our goal is to assure that our actions, the store, and our reducers are interacting together as expected.
So we're going to write some tests for the interaction of these three pieces.
*/



// --------------------------------------------------------------------------------
import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';
// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
describe('TEST STORE', function () {

    it('Should handle creating courses', function () {

        // --   --   --   --   --   --   --   --   --   --   --   --   --   --   --
        // Step 1: Arrange

        // This looks exactly the same as the call that we make to createStore in the application's entry point.
        const store  = createStore(rootReducer, initialState);

        const course = {
            title: "Clean Code"
        };
        // --   --   --   --   --   --   --   --   --   --   --   --   --   --   --


        // --   --   --   --   --   --   --   --   --   --   --   --   --   --   --
        // Step 2: Act

        // NOTE we could even go farther with this and create an array of actions here and
        // then assert that the final result was what we expected.
        // For example, we can dispatch two createCourseSuccess actions and an updateCourseSuccess action and
        // then assert that the final store has two courses with the expected values.
        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);
        // --   --   --   --   --   --   --   --   --   --   --   --   --   --   --


        // --   --   --   --   --   --   --   --   --   --   --   --   --   --   --
        // Step 3: Assert
        const actual   = store.getState().courses[0];
        const expected = {
            title: "Clean Code"
        };

        expect(actual).toEqual(expected);
        // --   --   --   --   --   --   --   --   --   --   --   --   --   --   --


    });

});
// --------------------------------------------------------------------------------

