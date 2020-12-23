import { USER_KEY } from '../config/storageConfig';
import { getUserFromToken } from '../helpers/userHelper';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  avatar_url?: string;
}

export const getLocalUser = (): User => {
  const user = localStorage.getItem(USER_KEY);
  if (!user) {
    return {} as User;
  }
  return JSON.parse(user);
};

export const setLocalUser = (): void => {
  const user = getUserFromToken();
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const removeLocalUser = (): void => {
  localStorage.removeItem(USER_KEY);
};
