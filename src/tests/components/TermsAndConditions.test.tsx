import { getByRole, render, screen } from '@testing-library/react'
import TermsAndConditions from '../../components/TermsAndConditions'
import userEvent from '@testing-library/user-event';

describe('TermsAndConditions', () => {
    it('should render with correct text and initial state', () => {
        render(<TermsAndConditions />);

        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Terms & Conditions');

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();
    })

    it('should enable the button if checkbox is clicked', async () => {
        // ARRANGE
        render(<TermsAndConditions />);


        // ACT
        const checkBox = screen.getByRole('checkbox');
        const user = userEvent.setup();
        await user.click(checkBox);


        // ASSERT
        expect(screen.getByRole('button')).toBeEnabled();

    })
})