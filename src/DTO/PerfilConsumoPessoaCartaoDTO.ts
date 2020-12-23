import { PerfilConsumo } from './PerfilConsumoDTO';

export interface PerfilConsumoPessoaCartao {
  id: number;
  vigente: boolean;
  dataInicio: string;
  dataFim: string;
  perfilConsumo: PerfilConsumo;
}
