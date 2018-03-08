// B''H //



// --------------------------------------------------------------------------------
// Presentation Component
// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
// See ManageCoursePage.js which renders this component and passes in these parameters.
//
// Remember TextInput are SelectInput are presentation components (under src/common/)
//
const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
    return (
        <form>
            <h1>Manage Course</h1>

            <TextInput
                name     = "title"
                label    = "Title"
                value    = {course.title}
                onChange = {onChange}
                error    = {errors.title}/>

            <SelectInput
                name          = "author_id"
                label         = "Author"
                value         = {course.author_id}
                defaultOption = "Select Author"
                options       = {allAuthors}
                onChange      = {onChange}
                error         = {errors.author_id}/>

            <TextInput
                name     = "category"
                label    = "Category"
                value    = {course.category}
                onChange = {onChange}
                error    = {errors.category}/>

            <TextInput
                name     = "length"
                label    = "Length"
                value    = {course.length}
                onChange = {onChange}
                error    = {errors.length}/>

            <input
                type      = "submit"
                disabled  = {saving}
                value     = {saving ? 'Saving...' : 'Save'}
                className = "btn btn-primary"
                onClick   = {onSave}/>
        </form>
    );
};
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
// These props should match the CourseForm parameters above.
CourseForm.propTypes = {
    course     : React.PropTypes.object.isRequired,
    allAuthors : React.PropTypes.array,
    onSave     : React.PropTypes.func.isRequired,
    onChange   : React.PropTypes.func.isRequired,
    saving     : React.PropTypes.bool,
    errors     : React.PropTypes.object
};

export default CourseForm;
// --------------------------------------------------------------------------------


