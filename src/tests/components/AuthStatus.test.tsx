import { render, screen } from '@testing-library/react';
import AuthStatus from '../../components/AuthStatus';
import { useAuth0 } from '@auth0/auth0-react';

const adminUser = {
  isLoading: false,
  user: { name: 'john' },
  isAuthenticated: true,
};

const loadingUser = {
  isLoading: true,
  isAuthenticated: false,
};

const newUser = {
  isLoading: false,
  isAuthenticated: false,
};

describe('AuthStatus', () => {
  
  vi.mock('@auth0/auth0-react', () => ({
    useAuth0: vi.fn(),
  }));

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should return the user details if the user exists', () => {
    vi.mocked(useAuth0).mockReturnValue(adminUser);
    render(<AuthStatus />);
    expect(screen.getByText('john')).toBeInTheDocument();
    expect(screen.getByText('Log Out')).toBeInTheDocument();
  });

  it('should return the loading while the user data is fetching', () => {
    vi.mocked(useAuth0).mockReturnValue(loadingUser);
    render(<AuthStatus />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should return the login component when the user is not logged in', () => {
    vi.mocked(useAuth0).mockReturnValue(newUser);
    render(<AuthStatus />);
    expect(screen.getByText('Log In')).toBeInTheDocument();
  });
});