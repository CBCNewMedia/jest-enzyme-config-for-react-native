/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

// Note: this is just for use with Jest snapshot testing
// and comes packaged with react-native init project.
// You do not need this if using Enzyme 'toMatchSnapshot' etc.
import renderer from 'react-test-renderer';

// This test just uses Jest snapshot testing
it('renders correctly, test using Jest', () => {
  renderer.create(<Button />);
});


// Using Jest + Enzyme
describe('<Button />', () => {
  it('renders correctly, test using Jest + Enzyme', () => {
    expect(shallow(<Button/>)).toMatchSnapshot();
  });

  describe('onPressHandler', () => {
    it('should call onPress', () => {
        // Arrange
        const mockOnPress = jest.fn();      // 1. mock function
        const component = shallow(<Button
            label= "test label"
            onPress={mockOnPress}           // 2. passing in mock function as props
        />);
        const instance = component.instance();  // 3. getting an instance of component

        // Act
        instance.onPressHandler();          // 4. manually triggering onPressHandler()

        // Assert
        expect(mockOnPress).toHaveBeenCalled();
        expect(mockOnPress).toHaveBeenCalledTimes(1);   // 5. checking return values
    });
  });
});
