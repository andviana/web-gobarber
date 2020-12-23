/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { format, subMonths } from 'date-fns';
import has from 'lodash/has';

interface GeneratedMonths {
  month: string;
  year: string;
}
interface GeneratedMonthProps {
  length: number;
  date: Date;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const extractData = (data: any): Object[] => {
  return has(data, 'hydra:member') ? data['hydra:member'] : data;
};

export const generateRange = (n: number): number[] => {
  return Array.from({ length: n }, (_, i) => i + 1);
};

export const generateMonths = ({
  length,
  date,
}: GeneratedMonthProps): GeneratedMonths[] => {
  const range = generateRange(length);

  return range.map(item => {
    return {
      month: format(subMonths(date, item - 1), 'MM'),
      year: format(subMonths(date, item - 1), 'yyyy'),
    };
  });
};

export const getLastItem = (value: any, separator: string): any => {
  const resultado = value.split(separator);
  return resultado[resultado.length - 1];
};
