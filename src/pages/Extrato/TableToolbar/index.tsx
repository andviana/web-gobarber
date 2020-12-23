import { MTableToolbar } from 'material-table';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import React, { ChangeEvent } from 'react';
import { generateMonths } from '../../../utils/dataUtils';

interface TableToolBarProps {
  date: Date;
  valueIndex: number;
  setValueMonth(month: number): void;
  setValueYear(year: number): void;
  setValueIndex(index: number): void;
  onTabsClick(): void;
}

const TableToolbar: React.FC<TableToolBarProps> = ({
  date,
  setValueMonth,
  setValueYear,
  valueIndex,
  setValueIndex,
  onTabsClick,
  ...rest
}) => {
  const meses = generateMonths({ length: 6, date });

  function scrollProps(index: number): any {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
      color: 'primary',
    };
  }

  const handleChange = (event: ChangeEvent<{}>, value: number): void => {
    setValueIndex(value);
    setValueMonth(Number(meses[value].month));
    setValueYear(Number(meses[value].year));
    onTabsClick();
  };

  return (
    <div style={{ backgroundColor: '#e8eaf5' }}>
      <MTableToolbar {...rest} />
      <AppBar color="default" position="static">
        <Tabs
          indicatorColor="primary"
          onChange={handleChange}
          scrollButtons="auto"
          textColor="primary"
          value={valueIndex}
          variant="scrollable"
        >
          {meses.map((mes, index) => (
            <Tab
              key={mes.month}
              label={`${mes.month}/${mes.year}`}
              {...scrollProps(index)}
            />
          ))}
        </Tabs>
      </AppBar>
    </div>
  );
};

export default TableToolbar;
