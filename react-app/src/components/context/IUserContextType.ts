export interface UserContextType {
  loggedInUser: string;
  handleLogin: (userName: string) => void;
  handleLogout: () => void;
}