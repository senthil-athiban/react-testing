import {  render, screen } from '@testing-library/react'
import { User } from '../../entities'
import UserList from '../../components/UserList';

describe('UserList', () => {
    it('should return no user available if empty user array is provided', () => {
        const users : User[] = [];
        render(<UserList users={users} />);
        const paragraph = screen.getByText(/No users available./i);
        expect(paragraph).toBeInTheDocument();
    })

    it('should return the user list if user array is provided', () => {
        const users : User[] = [ {id:1, name:'senthil', isAdmin: true}, {id:2, name:'athiban', isAdmin: true}];
        render(<UserList users={users} />)
        users.forEach((user) => {
            const link = screen.getByRole('link', { name : user.name });
            expect(link).toBeInTheDocument();  
            expect(link).toHaveAttribute('href', `/users/${user.id}`);
        })
    })
})