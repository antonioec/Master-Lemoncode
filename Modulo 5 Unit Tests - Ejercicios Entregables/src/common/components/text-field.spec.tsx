import { TextField, TextFieldProps } from './text-field'
import { render, waitForElement, fireEvent } from '@testing-library/react';
import * as React from 'react';

describe('Text Field Tests', () => {
    it('should create a text field when it feeds props', () => {
        //Arrange

        const props: TextFieldProps = {
            name: "textField",
            label: "TextField",
            value: "test",
            onChange: jest.fn()
        }

        //Act
        const { getByText } = render(<TextField {...props} />)
        
        const labelElement = getByText(props.label);

        //Assert
        expect(labelElement).not.toBeUndefined();
    })
})