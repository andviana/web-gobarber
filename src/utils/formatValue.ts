import { leftPad } from './stringUtils';

export const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export const formatCpfCnpj = (value: string): string => {
  if (!value) return '';
  const data = value.replace(/[^\d]/g, '');
  return data.length > 11
    ? leftPad({ value: data, totalWidth: 14, paddingChar: '0' }).replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        '$1.$2.$3/$4-$5',
      )
    : leftPad({ value: data, totalWidth: 11, paddingChar: '0' }).replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        '$1.$2.$3-$4',
      );
};

export const formatCardNumber = (value: string): string => {
  return value ? leftPad({ value, totalWidth: 6, paddingChar: '0' }) : '';
};
