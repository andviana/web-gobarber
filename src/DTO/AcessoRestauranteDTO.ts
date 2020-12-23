import { Restaurante } from './RestauranteDTO';

export interface AcessoRestaurante {
  id: number;
  ativo: boolean;
  bloqueio: boolean;
  dataInicioVinculo: string;
  dataFimVinculo: string;
  restaurante: Restaurante;
}
