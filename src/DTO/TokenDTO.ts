import { AUTHENTICATED_AT_KEY, TOKEN_KEY } from '../config/storageConfig';
import { decodeToken } from '../helpers/tokenHelper';
import { removeLocalUser, setLocalUser } from './UserDTO';

export interface Token {
  token: string;
  exp: number;
  iat: number;
  roles: string[];
  username: string;
  authenticatedAt: number;
}

export const setAuthenticatedAt = (time: number): void => {
  localStorage.setItem(
    AUTHENTICATED_AT_KEY,
    JSON.stringify(Math.round(time / 1000)),
  );
};

export const removeAuthenticatedAt = (): void => {
  localStorage.removeItem(AUTHENTICATED_AT_KEY);
};

export const removeLocalToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
  removeLocalUser();
  removeAuthenticatedAt();
};

export const getLocalToken = (): string => {
  const data = localStorage.getItem(TOKEN_KEY);
  if (!data) {
    return '';
  }
  return data;
};

export const getAuthenticatedAt = (): number =>
  Number(localStorage.getItem(AUTHENTICATED_AT_KEY));

export const getDecodedToken = (): Token => {
  const token = getLocalToken();
  return decodeToken(token);
};

export const setLocalToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
  setLocalUser();
  setAuthenticatedAt(Date.now());
};
