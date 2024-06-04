import { render, screen } from '@testing-library/react'
import ErrorMessage from '../../components/ErrorMessage';
import { FieldError } from 'react-hook-form';

describe('ErrorMessage', () => {
    it('should return null when error message is empty', () => {
        const error : undefined = undefined;
        const {container} = render(<ErrorMessage error={error} />);
        expect(container).toBeEmptyDOMElement();
    })

    it('should return the error message if error message is given', () => {
        const error: FieldError = { type: 'pattern', message: 'message', ref: {name: 'testName'}};
        render(<ErrorMessage error={error} />);
        const alert = screen.getByRole('alert');
        expect(alert).toHaveTextContent('message');
        expect(alert).toHaveAttribute('data-for', 'testName');

    })

});
