import { render, screen } from '@testing-library/react'
import { User } from '../../entities'
import UserAccount from '../../components/UserAccount';

describe('UserAccount', () => {
    it('should return the user name if user is given', () => {
        const user : User = { id : 1, name: 'senthil'};
        render(<UserAccount user={user} />)
        expect(screen.getByText(user.name)).toBeInTheDocument();
    })

    it('should return the edit button if user is admin', () => {
        const user : User = { id : 1, name: 'senthil', isAdmin: true};
        render(<UserAccount user={user} />)
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/Edit/i)
    })

    it('should not return the edit button if user is not admin', () => {
        const user : User = { id : 1, name: 'senthil'};
        render(<UserAccount user={user} />)
        const button = screen.queryByRole('button');
        expect(button).not.toBeInTheDocument();
    })
})