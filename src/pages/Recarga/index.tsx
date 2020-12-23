import { DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import React from 'react';
import ModalDialog from '../../components/ModalDialog';

interface RecargaProps {
  open: boolean;
  onClose(): void;
}

const Recarga: React.FC<RecargaProps> = props => {
  const teste = (): void => {
    alert('Deu certo!! :D');
  };
  return (
    <ModalDialog {...props}>
      <DialogTitle>Recarga</DialogTitle>
      <DialogContent>
        <h1>Fazer recarga</h1>
      </DialogContent>
      <DialogActions>
        <button type="button" onClick={teste}>
          Teste
        </button>
      </DialogActions>
    </ModalDialog>
  );
};

export default Recarga;
