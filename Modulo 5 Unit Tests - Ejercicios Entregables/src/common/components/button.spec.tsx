import {Button} from './button'
import { render, fireEvent } from '@testing-library/react';
import * as React from 'react';

describe('Button Tests', () => {
    it('should display a button when it feeds props', () => {
        //Arrange
        interface Props {
            label: string;
            onClick?: () => void;
            type?: 'button' | 'submit' | 'reset';
            className?: string;
        }

        const props: Props = {
            label: "boton",
            onClick: jest.fn(),
        }

        //Act
        const { getByText } = render(<Button {...props} />)
        
        const labelElement = getByText(props.label);
        fireEvent.click(labelElement);

        //Assert
        expect(labelElement).not.toBeUndefined();
        expect(props.onClick).toHaveBeenCalled();
    })
})