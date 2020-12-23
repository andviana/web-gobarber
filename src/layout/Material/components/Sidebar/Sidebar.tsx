import React from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Divider, Drawer } from '@material-ui/core';
import {
  ConfirmationNumber,
  LibraryBooks,
  PersonAdd,
  Search,
  AddToPhotos,
  CreditCard,
  CancelPresentation,
  ImportExport,
} from '@material-ui/icons';

import { Profile, SidebarNav } from './components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: 240,
      [theme.breakpoints.up('lg')]: {
        marginTop: 64,
        height: 'calc(100% - 64px)',
      },
    },
    root: {
      // backgroundColor: theme.palette.white,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: theme.spacing(2),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
    nav: {
      marginBottom: theme.spacing(2),
    },
  }),
);

interface SidebarProps {
  className?: string;
  onClose(): void;
  open: boolean;
  variant?: 'permanent' | 'persistent' | 'temporary' | undefined;
}

const Sidebar: React.FC<SidebarProps> = ({
  open,
  variant,
  onClose,
  className,
  ...rest
}) => {
  const classes = useStyles();

  const pages = [
    {
      title: 'Emitir Cartão',
      href: '/emitir_cartao',
      icon: <CreditCard />,
    },
    {
      title: 'Emitir Ticket Geral',
      href: '/emitir_ticket_avulso',
      icon: <ConfirmationNumber />,
    },
    {
      title: 'Consultar Cartão',
      href: '/consultar_cartao',
      icon: <Search />,
    },
    {
      title: 'Cadastrar Pessoa',
      href: '/cadastrar_pessoa',
      icon: <PersonAdd />,
    },
    {
      title: 'Cadastrar Cartão',
      href: '/cadastrar_cartao',
      icon: <AddToPhotos />,
    },
    {
      title: 'Transferir Saldo',
      href: '/transferir_saldo',
      icon: <ImportExport />,
    },
    {
      title: 'Cancelar Cartão',
      href: '/cancelar_cartao',
      icon: <CancelPresentation />,
    },
    {
      title: 'Relatórios',
      href: '/relatorios',
      icon: <LibraryBooks />,
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />

        <SidebarNav className={classes.nav} pages={pages} />
        <Divider className={classes.divider} />
      </div>
    </Drawer>
  );
};

export default Sidebar;
