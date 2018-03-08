// B''H //


// --------------------------------------------------------------------------------
// Note, with below approach, we can do true TTD - Red-Green-Refactor style.
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
describe('TEST CONNECTED COMPONENT - Manage Course Page', () => {
    it('sets error message when trying to save empty title', () => {
        const props = {
            authors: [],
            actions: {
                saveCourse: () => {
                    return Promise.resolve();
                }
            },
            course : {id: '', watch_url: '', title: '', author_id: '', length: '', category: ''}
        };


        // --   --   --   --   --   --   --   --   --   --   --   --   --   --   --
        /*
        Note we're using mount here rather than shallow (as done in CourseForm.test.js).
        Remember, shallow only renders one layer deep.
        Here, we need to test this component's interactions with its child components.
        More specifically, the title input that sits in the CourseForm component.
        So we need to use mount so that a full DOM is created in memory.
        Remember, behind the scenes, Enzyme is using JSDOM to create a virtual in-memory DOM.
        */
        const wrapper = mount(<ManageCoursePage {...props}/>);
        // --   --   --   --   --   --   --   --   --   --   --   --   --   --   --


        // --   --   --   --   --   --   --   --   --   --   --   --   --   --   --
        // Find the Save button. Since it's the last input on the page, I'm using Enzyme's .last selector
        const saveButton = wrapper.find('input').last();
        // --   --   --   --   --   --   --   --   --   --   --   --   --   --   --


        // --   --   --   --   --   --   --   --   --   --   --   --   --   --   --
        expect(saveButton.prop('type')).toBe('submit');

        saveButton.simulate('click');

        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
        // --   --   --   --   --   --   --   --   --   --   --   --   --   --   --

    });
});
// --------------------------------------------------------------------------------

