import { render, screen } from '@testing-library/react'
import ExpandableText from '../../components/ExpandableText'
import userEvent from '@testing-library/user-event';

describe('ExpandableText', () => {
    const limit = 255;
    const longText = 'a'.repeat(limit + 1);
    const truncatedText = longText.substring(0, 255) + '...';
    it('should return the article if length is within the limit', () => {
        render(<ExpandableText text="lorem23" />)

        expect(screen.getByText(/lorem23/i)).toBeInTheDocument();
    })

    it('should return the truncate the text if length exceeds 255', () => {
        render(<ExpandableText text={longText} />)

        expect(screen.getByText(truncatedText)).toBeInTheDocument();
        const button = screen.getByRole('button');
        // expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/more/i);
    })

    it('should return the expanded text if show more button is clicked', async () => {
        render(<ExpandableText text={longText} />)

        const button = screen.getByRole('button');
        const user = userEvent.setup();
        await user.click(button);

        expect(screen.getByText(longText)).toBeInTheDocument();
        expect(button).toHaveTextContent(/less/i);
    });

    it('should return collapse text if show less button is clicked', async () => {
        render(<ExpandableText text={longText} />)

        const showMoreButton = screen.getByRole('button', { name : /more/i});
        const user = userEvent.setup();
        await user.click(showMoreButton);

        const showLessButton = screen.getByRole('button', { name : /less/i});
        await user.click(showLessButton);
        

        expect(screen.getByText(truncatedText)).toBeInTheDocument();
        expect(showLessButton).toHaveTextContent(/more/i);
    });
    
})