import { GROUP_ADMIN } from '../config/appRoles';
import { getDecodedToken } from '../DTO/TokenDTO';
import { User } from '../DTO/UserDTO';
import { getInitialLetters } from '../utils/stringUtils';

export const getUserFromToken = (): User => {
  const { username } = getDecodedToken();
  return {
    id: username,
    name: username.split('@')[0],
    email: username,
    avatar: getInitialLetters(username).toUpperCase(),
  };
};

export const checkRoles = (role: string | string[]): boolean => {
  const data = getDecodedToken();
  if (!role || !data) {
    return false;
  }
  const { roles } = data;
  if (typeof role === 'string') {
    return roles.includes(role);
  }
  let exists = false;
  role.forEach(item => {
    if (roles.includes(item)) exists = true;
  });
  return exists;
};

export const isAdmin = (): boolean => {
  return checkRoles(GROUP_ADMIN);
};
