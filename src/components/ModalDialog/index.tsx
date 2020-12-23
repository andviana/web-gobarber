import React from 'react';
import { Dialog } from '@material-ui/core';
import { TransitionGrow } from '../../transitions';

interface ModalDialogProps {
  open: boolean;
  transparent?: boolean;
  onClose(): void;
}

const ModalDialog: React.FC<ModalDialogProps> = ({
  open,
  transparent,
  onClose,
  children,
}) => {
  const handleClose = (): void => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={TransitionGrow}
      onClose={handleClose}
      PaperProps={
        transparent
          ? {
              style: {
                backgroundColor: 'transparent',
                boxShadow: 'none',
              },
            }
          : {}
      }
    >
      {children}
    </Dialog>
  );
};

export default ModalDialog;
