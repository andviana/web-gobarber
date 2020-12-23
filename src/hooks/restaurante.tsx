import React, { createContext, useCallback, useState, useContext } from 'react';
import { RESTAURANTE, TABELA_PRECO } from '../config/endpointsConfig';
import {
  getLocalRestaurante,
  getLocalRestauranteList,
  removeLocalRestaurante,
  removeLocalRestauranteList,
  Restaurante,
  setLocalRestaurante,
  setLocalRestauranteList,
} from '../DTO/RestauranteDTO';
import { TabelaPreco } from '../DTO/TabelaPrecoDTO';
import api from '../services/api';

interface ChooseData {
  id: string;
}

interface RestauranteContextData {
  restaurante: Restaurante;
  listaRestaurantes: Restaurante[];
  buscarListaRestaurantes(): Promise<void>;
  selecionarRestaurante(value: ChooseData): Promise<void>;
  trocarRestaurante(): Promise<void>;
  signOutRestaurante(): Promise<void>;
}

const RestauranteContext = createContext<RestauranteContextData>(
  {} as RestauranteContextData,
);

export const RestauranteProvider: React.FC = ({ children }) => {
  const [restaurante, setRestaurante] = useState<Restaurante>(() => {
    const storageRestaurante = getLocalRestaurante();
    return storageRestaurante || ({} as Restaurante);
  });

  const [listaRestaurantes, setListaRestaurantes] = useState<Restaurante[]>(
    () => {
      const storageListaRestaurante = getLocalRestauranteList();
      return storageListaRestaurante || ({} as Restaurante[]);
    },
  );

  const buscarListaRestaurantes = useCallback(async () => {
    const response = await api.get(RESTAURANTE);
    const lista: Restaurante[] = response.data['hydra:member'];
    setListaRestaurantes(lista);
    setLocalRestauranteList(lista);
  }, []);

  const selecionarRestaurante = useCallback(
    async ({ id }: ChooseData) => {
      const findRestaurante = listaRestaurantes.find(
        item => item.id.toString() === id.toString(),
      );
      if (findRestaurante) {
        const response = await api.get(TABELA_PRECO, {
          params: { restaurante: findRestaurante.id },
        });
        const tabelaPrecos: TabelaPreco[] = response.data['hydra:member'];
        await setRestaurante({ ...findRestaurante, tabelaPrecos });
        await setLocalRestaurante({ ...findRestaurante, tabelaPrecos });
      }
    },
    [listaRestaurantes],
  );

  const trocarRestaurante = useCallback(async () => {
    setRestaurante({} as Restaurante);
    setLocalRestaurante({} as Restaurante);
  }, []);

  const signOutRestaurante = useCallback(async () => {
    setListaRestaurantes({} as Restaurante[]);
    setRestaurante({} as Restaurante);
    removeLocalRestauranteList();
    removeLocalRestaurante();
  }, []);

  return (
    <RestauranteContext.Provider
      value={{
        restaurante,
        listaRestaurantes,
        buscarListaRestaurantes,
        selecionarRestaurante,
        trocarRestaurante,
        signOutRestaurante,
      }}
    >
      {children}
    </RestauranteContext.Provider>
  );
};

export function useRestaurante(): RestauranteContextData {
  const context = useContext(RestauranteContext);
  if (!context) {
    throw new Error(
      'restautanteAuth must be used within an RestauranteProvider',
    );
  }
  return context;
}
