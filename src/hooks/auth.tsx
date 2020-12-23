import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import { LOGIN } from '../config/endpointsConfig';
import { getLocalUser, User } from '../DTO/UserDTO';
import {
  getDecodedToken,
  getLocalToken,
  removeLocalToken,
  setLocalToken,
  Token,
} from '../DTO/TokenDTO';
import { getUserFromToken } from '../helpers/userHelper';
import { decodeToken } from '../helpers/tokenHelper';

interface AuthState {
  token: string;
  user: User;
  decoded: Token;
}
interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = getLocalToken();
    const user = getLocalUser();
    const decoded = getDecodedToken();

    if (token && user && decoded) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user, decoded };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post(LOGIN, { username, password });

    const { token } = response.data;

    setLocalToken(token);
    const user = getUserFromToken();
    const decoded = decodeToken(token);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user, decoded });
  }, []);

  const signOut = useCallback(() => {
    removeLocalToken();
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
