import React from 'react';
import { ToastProvider } from './toast';
import { AuthProvider } from './auth';
import { RestauranteProvider } from './restaurante';
import { PessoaCartaoProvider } from './pessoaCartao';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <RestauranteProvider>
      <PessoaCartaoProvider>
        <ToastProvider>{children}</ToastProvider>
      </PessoaCartaoProvider>
    </RestauranteProvider>
  </AuthProvider>
);

export default AppProvider;
