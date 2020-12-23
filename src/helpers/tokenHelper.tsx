import { REFRESH_LIMIT } from '../config/appConfig';
import {
  getAuthenticatedAt,
  getDecodedToken,
  getLocalToken,
  Token,
} from '../DTO/TokenDTO';
import { addMinutes } from '../utils/dateTimeUtils';

interface ParseJwt {
  exp: number;
  iat: number;
  roles: string[];
  username: string;
}

export const parseJwt = (token: string): ParseJwt => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(part => {
        return `%${`00${part.charCodeAt(0).toString(16)}`.slice(-2)}`;
      })
      .join(''),
  );
  return JSON.parse(jsonPayload);
};

export const decodeToken = (token: string): Token => {
  if (token === '') {
    return {} as Token;
  }
  const decoded = parseJwt(token);
  const { exp, iat, roles, username } = decoded;
  return {
    token,
    exp,
    iat,
    roles,
    username,
    authenticatedAt: Date.now() / 1000,
  };
};

const isExpired = (exp: number): boolean => exp < Math.round(Date.now() / 1000);

export const isValidToken = (): boolean => {
  const token = getLocalToken();
  const decoded = getDecodedToken();
  const authenticatedAt = getAuthenticatedAt();

  if (!token || !decoded || !authenticatedAt) {
    return false;
  }
  const { exp, iat } = decoded;
  const expiration = authenticatedAt + (exp - iat);

  return !isExpired(expiration);
};

export const shouldBeTokenUpdated = (): boolean => {
  const token = getLocalToken();
  const data = getDecodedToken();
  if (!token || !data || !isValidToken()) {
    return false;
  }
  const { authenticatedAt, exp, iat } = data;
  const expiration = Math.round(authenticatedAt + (exp - iat));
  const timeLimit = addMinutes(Date.now(), Number(REFRESH_LIMIT));
  return timeLimit > expiration;
};
