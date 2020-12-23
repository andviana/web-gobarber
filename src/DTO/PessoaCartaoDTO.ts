import {
  PESSOA_CARTAO_KEY,
  PESSOA_CARTAO_LIST_KEY,
} from '../config/storageConfig';
import { AcessoRestaurante } from './AcessoRestauranteDTO';
import { Cartao } from './CartaoDTO';
import { PerfilConsumoPessoaCartao } from './PerfilConsumoPessoaCartaoDTO';
import { Pessoa } from './PessoaDTO';
import { StatusPessoaCartao } from './StatusPessoaCartaoDTO';
import { TipoPessoa } from './TipoPessoaDTO';

export interface PessoaCartao {
  id: number;
  pessoa: Pessoa;
  cartao: Cartao;
  creditoCartao: number;
  creditoCartaoFormatado?: string;
  matricula: string;
  statusPessoaCartao: StatusPessoaCartao;
  acessosRestaurantes: AcessoRestaurante[];
  perfisVigentes: PerfilConsumoPessoaCartao[];
  tipoPessoa: TipoPessoa;
}

export const getLocalPessoaCartao = (): PessoaCartao => {
  const data = localStorage.getItem(PESSOA_CARTAO_KEY);
  return data ? JSON.parse(data) : ({} as PessoaCartao);
};

export const setLocalPessoaCartao = (data: PessoaCartao): void =>
  localStorage.setItem(PESSOA_CARTAO_KEY, JSON.stringify(data));

export const removeLocalPessoaCartao = (): void => {
  localStorage.setItem(PESSOA_CARTAO_KEY, '');
};

export const getLocalPessoaCartaoList = (): PessoaCartao[] => {
  const list = localStorage.getItem(PESSOA_CARTAO_LIST_KEY);
  return list ? JSON.parse(list) : null;
};

export const setLocalPessoaCartaoList = (list: PessoaCartao[]): void =>
  localStorage.setItem(PESSOA_CARTAO_LIST_KEY, JSON.stringify(list));

export const removeLocalPessoaCartaoList = (): void =>
  localStorage.removeItem(PESSOA_CARTAO_LIST_KEY);
