import { render, screen } from '@testing-library/react'
import Greet from '../../components/Greet'

describe('Greet', () => {
    it('should return the name if the name is provided', () => {
        render(<Greet name='senthil' />)
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/senthil/i)
    })
    it('should return the login if the name is not provided', () => {
        render(<Greet />)
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/Login/i)
    })
})