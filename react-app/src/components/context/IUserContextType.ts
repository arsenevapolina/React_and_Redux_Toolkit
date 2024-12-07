export interface UserContextType {
  loggedInUser: string | null;
  handleLogin: (userName: string) => void;
  handleLogout: () => void;
}