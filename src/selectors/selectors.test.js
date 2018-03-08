// B''H //



// --------------------------------------------------------------------------------
/*
IMPORTANT NOTE:

This is essentially the best way to test mapStateToProps.

We just extract the complicated pieces into separate selectors, which is really just a name for
plain pure functions that are easy to test.
*/
// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';
// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
describe('TEST SELECTOR - Author Selector', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 1, first_name: 'Cory', last_name: 'House'},
        {id: 2,first_name: 'Scott',last_name: 'Allen'}
      ];

      const expected = [
        {value: 1, text: 'Cory House'},
        {value: 2, text: 'Scott Allen'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
// --------------------------------------------------------------------------------


