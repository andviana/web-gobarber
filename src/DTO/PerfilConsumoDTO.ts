import { SubsidioValor } from './SubsidioValorDTO';

export interface PerfilConsumo {
  id: number;
  descricao: string;
  subsidiado: boolean;
  ativo: boolean;
  subsidioValores: SubsidioValor[];
  subsidioValorVigente: SubsidioValor;
}
