import React, { useRef, useState } from 'react';
import MaterialTable from 'material-table';
import { format } from 'date-fns';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import { usePessoaCartao } from '../../../hooks/pessoaCartao';
import { PESSOA_CARTAO } from '../../../config/endpointsConfig';
import { formatValue } from '../../../utils/formatValue';
import TableToolbar from '../TableToolbar';
import { languagePt_BR } from '../../../translations/tableTranslation';

export interface ExecuteQueryProps {
  query: any;
  mes: number;
  ano: number;
  pessoaCartao: string;
}

interface TableExtratoProps {
  executeQuery(values: ExecuteQueryProps): Promise<any>;
  handlePrint(): void;
}

const TableExtrato: React.FC<TableExtratoProps> = ({
  executeQuery,
  handlePrint,
}) => {
  const dateNow = new Date();

  const [valueMonth, setValueMonth] = React.useState(
    Number(format(dateNow, 'MM')),
  );

  const [valueYear, setValueYear] = React.useState(
    Number(format(dateNow, 'yyyy')),
  );

  const [valueIndex, setValueIndex] = React.useState(0);

  const [pageSize, setPageSize] = useState(5);

  const { pessoaCartao } = usePessoaCartao();

  const tableRef = useRef<any>(null);

  const onTabsClick = (): void => {
    tableRef && tableRef.current && tableRef.current.onQueryChange();
  };

  const execute = (query: any): any => {
    setPageSize(query.pageSize);
    return executeQuery({
      query,
      mes: valueMonth,
      ano: valueYear,
      pessoaCartao: `${PESSOA_CARTAO}/${pessoaCartao.id}`,
    });
  };
  const columns = [
    {
      title: 'Data/Hora',
      field: 'dataHora',
      render: (rowData: any) =>
        format(new Date(rowData.dataHora), 'dd/MM HH:mm'),
    },
    {
      title: ' ',
      field: 'estornado',
      lookup: { true: 'estornado', false: '' },
    },
    { title: ' ', field: 'dataEstorno' },
    {
      title: 'Valor',
      field: 'valor',
      render: (rowData: any) => {
        const valor = formatValue(rowData.valor);
        switch (rowData.tipoOperacao) {
          case 1:
            return `${valor} C`;
          case 2:
            return `${valor} D`;
          default:
            return `${valor}`;
        }
      },
    },
  ];

  return (
    <MaterialTable
      actions={[
        {
          icon: 'print',
          tooltip: 'Imprimir Extrato Mensal Completo',
          isFreeAction: true,
          onClick: () => handlePrint(),
        },
        {
          icon: () => <DesktopWindowsIcon />,
          tooltip: 'Mostrar Extrato Completo na Tela',
          isFreeAction: true,
          onClick: () => handlePrint(),
        },
      ]}
      columns={columns}
      components={{
        Toolbar: props => (
          <TableToolbar
            date={dateNow}
            onTabsClick={onTabsClick}
            setValueIndex={setValueIndex}
            setValueMonth={setValueMonth}
            setValueYear={setValueYear}
            valueIndex={valueIndex}
            {...props}
          />
        ),
      }}
      data={query => execute(query)}
      localization={languagePt_BR}
      options={{
        pageSize,
        search: false,
        showTitle: true,
        rowStyle: () => {
          return { whiteSpace: 'nowrap', textOverflow: 'ellipsis' };
        },
        exportButton: true,
      }}
      tableRef={tableRef}
      title={<h2>Consultar Extrato</h2>}
    />
  );
};
export default TableExtrato;
