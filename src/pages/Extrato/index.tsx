import { DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { has } from 'lodash';
import React from 'react';
import ModalDialog from '../../components/ModalDialog';
import { MOVIMENTACAO_SALDO } from '../../config/endpointsConfig';
import api from '../../services/api';
import { getLastItem } from '../../utils/dataUtils';
import TableExtrato, { ExecuteQueryProps } from './TableExtrato';

interface ExtratoProps {
  open: boolean;
  onClose(): void;
}

const Extrato: React.FC<ExtratoProps> = props => {
  const teste = (): void => {
    alert('Deu certo!! :D');
  };

  const handleExecuteQuery = async ({
    query,
    mes,
    ano,
    pessoaCartao,
  }: ExecuteQueryProps): Promise<any> => {
    const resultado = await api.get(MOVIMENTACAO_SALDO);
    return {
      data: resultado.data['hydra:member'],
      page:
        resultado.data['hydra:totalItems'] >
          resultado.data['hydra:member'].length ||
        has(resultado.data, 'hydra:first')
          ? getLastItem(resultado.data['hydra:view']['@id'], '=') - 1
          : 0,
      totalCount: resultado.data['hydra:totalItems'],
    };
  };

  return (
    <ModalDialog {...props}>
      <DialogTitle>Extrato</DialogTitle>
      <DialogContent>
        <TableExtrato executeQuery={handleExecuteQuery} handlePrint={teste} />
      </DialogContent>
      <DialogActions>
        <button type="button" onClick={teste}>
          Teste
        </button>
      </DialogActions>
    </ModalDialog>
  );
};

export default Extrato;
