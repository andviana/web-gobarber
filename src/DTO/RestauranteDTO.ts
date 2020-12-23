import { RESTAURANTE_KEY, RESTAURANTE_LIST_KEY } from '../config/storageConfig';
import { TabelaPreco } from './TabelaPrecoDTO';

export interface Restaurante {
  id: number;
  nome: string;
  tabelaPrecos: TabelaPreco[];
}

export const getLocalRestaurante = (): Restaurante => {
  const data = localStorage.getItem(RESTAURANTE_KEY);
  return data ? JSON.parse(data) : ({} as Restaurante);
};

export const setLocalRestaurante = (data: Restaurante): void =>
  localStorage.setItem(RESTAURANTE_KEY, JSON.stringify(data));

export const removeLocalRestaurante = (): void => {
  localStorage.setItem(RESTAURANTE_KEY, '');
};

export const getLocalRestauranteList = (): Restaurante[] => {
  const list = localStorage.getItem(RESTAURANTE_LIST_KEY);
  return list ? JSON.parse(list) : null;
};

export const setLocalRestauranteList = (list: Restaurante[]): void =>
  localStorage.setItem(RESTAURANTE_LIST_KEY, JSON.stringify(list));

export const removeLocalRestauranteList = (): void =>
  localStorage.removeItem(RESTAURANTE_LIST_KEY);
