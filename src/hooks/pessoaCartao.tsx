import React, { createContext, useCallback, useContext, useState } from 'react';
import { ListFormat } from 'typescript';
import { PESSOA_CARTAO } from '../config/endpointsConfig';
import {
  getLocalPessoaCartao,
  getLocalPessoaCartaoList,
  PessoaCartao,
  removeLocalPessoaCartao,
  removeLocalPessoaCartaoList,
  setLocalPessoaCartao,
  setLocalPessoaCartaoList,
} from '../DTO/PessoaCartaoDTO';
import api from '../services/api';
import {
  formatValue,
  formatCardNumber,
  formatCpfCnpj,
} from '../utils/formatValue';
import { getInitialLetters } from '../utils/stringUtils';

interface PessoaCartaoParams {
  tipo: 'codigo' | 'numero' | 'nome' | 'cpf' | 'matricula';
  valor: string;
}

interface PessoaCartaoContextData {
  pessoaCartao: PessoaCartao;
  listaPessoaCartao: PessoaCartao[];
  buscarPessoaCartao(params: PessoaCartaoParams): Promise<void>;
  selecionarPessoaCartao(id: number): Promise<void>;
  limparPessoaCartao(): Promise<void>;
  limparListaPessoaCartao(): Promise<void>;
}

interface SearchParam {
  [key: string]: string;
}

const PessoaCartaoContext = createContext<PessoaCartaoContextData>(
  {} as PessoaCartaoContextData,
);

export const PessoaCartaoProvider: React.FC = ({ children }) => {
  const [pessoaCartao, setPessoaCartao] = useState<PessoaCartao>(() => {
    const data = getLocalPessoaCartao();
    return data.pessoa ? data : ({} as PessoaCartao);
  });
  const [listaPessoaCartao, setListaPessoaCartao] = useState<PessoaCartao[]>(
    () => {
      const data = getLocalPessoaCartaoList();
      return data && data.length > 0 ? data : ([] as PessoaCartao[]);
    },
  );

  const getSearchParam = ({ tipo, valor }: PessoaCartaoParams): SearchParam => {
    switch (tipo) {
      case 'codigo':
        return { 'cartao.codigo': valor };
      case 'numero':
        return { 'cartao.numero': valor };
      case 'nome':
        return { 'pessoa.nome': valor };
      case 'cpf':
        return { 'pessoa.cadastroNacional': valor };
      case 'matricula':
        return { matricula: valor };
      default:
        return {} as SearchParam;
    }
  };

  const buscarPessoaCartao = useCallback(async ({ tipo, valor }) => {
    const searchParam = getSearchParam({ tipo, valor });
    const response = await api.get(PESSOA_CARTAO, {
      params: searchParam,
    });
    let resultado: PessoaCartao[] = response.data['hydra:member'];

    if (resultado.length > 1) {
      resultado = resultado.sort((a, b) =>
        a.pessoa.nome.localeCompare(b.pessoa.nome),
      );
    }

    const listaFormatada = resultado.map(item => {
      return {
        ...item,
        creditoCartaoFormatado: formatValue(item.creditoCartao),
        cartao: {
          ...item.cartao,
          numeroFormatado: formatCardNumber(item.cartao.numero),
        },
        pessoa: {
          ...item.pessoa,
          iniciais: getInitialLetters(item.pessoa.nome),
          cadastroNacionalFormatado: formatCpfCnpj(
            item.pessoa.cadastroNacional,
          ),
        },
      };
    });

    await setListaPessoaCartao(listaFormatada);
    await setLocalPessoaCartaoList(listaFormatada);

    if (listaFormatada.length === 1) {
      await setPessoaCartao(listaFormatada[0]);
      await setLocalPessoaCartao(listaFormatada[0]);
    }
  }, []);

  const selecionarPessoaCartao = useCallback(
    async (id: number) => {
      const findPessoa = await listaPessoaCartao.find(item => item.id === id);
      await setPessoaCartao(findPessoa || ({} as PessoaCartao));
      await setLocalPessoaCartao(findPessoa || ({} as PessoaCartao));
    },
    [listaPessoaCartao],
  );

  const limparPessoaCartao = useCallback(async () => {
    await setPessoaCartao({} as PessoaCartao);
    await removeLocalPessoaCartao();
  }, []);

  const limparListaPessoaCartao = useCallback(async () => {
    await setPessoaCartao({} as PessoaCartao);
    await removeLocalPessoaCartao();
    await setListaPessoaCartao([] as PessoaCartao[]);
    await removeLocalPessoaCartaoList();
  }, []);

  return (
    <PessoaCartaoContext.Provider
      value={{
        pessoaCartao,
        listaPessoaCartao,
        buscarPessoaCartao,
        selecionarPessoaCartao,
        limparPessoaCartao,
        limparListaPessoaCartao,
      }}
    >
      {children}
    </PessoaCartaoContext.Provider>
  );
};

export function usePessoaCartao(): PessoaCartaoContextData {
  const context = useContext(PessoaCartaoContext);
  if (!context) {
    throw new Error(
      'usePessoaCartao must be used whitihn an PessoaCartaoProvider',
    );
  }
  return context;
}
