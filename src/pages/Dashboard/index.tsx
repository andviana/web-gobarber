import React, { useState } from 'react';
import 'react-day-picker/lib/style.css';
import { usePessoaCartao } from '../../hooks/pessoaCartao';
import Extrato from '../Extrato';
import Recarga from '../Recarga';
import CardPessoaCartao from './components/CardPessoaCartao';
import ListPessoaCartao from './components/ListPessoaCartao';
import RadioItem from './components/RadioItem';

import {
  Container,
  FormArea,
  TitleArea,
  DivTipos,
  DivBusca,
  ResultArea,
} from './styles';
import { tipos } from './tiposBusca';

type TiposBusca = 'codigo' | 'numero' | 'nome' | 'cpf' | 'matricula';

const Dashboard: React.FC = () => {
  const [campoBusca, setCampoBusca] = useState('');
  const [selectedIndex, setSelectedIndex] = useState('cartao');
  const [toggleRecarga, setToggleRecarga] = useState(false);
  const [toggleExtrato, setToggleExtrato] = useState(false);

  const handleToogleRecarga = (): void => {
    setToggleRecarga(!toggleRecarga);
  };
  const handleToogleExtrato = (): void => {
    setToggleExtrato(!toggleExtrato);
  };

  const {
    buscarPessoaCartao,
    limparListaPessoaCartao,
    listaPessoaCartao,
    pessoaCartao,
  } = usePessoaCartao();

  const handleClickSearchPersons = async (): Promise<void> => {
    await buscarPessoaCartao({
      valor: campoBusca,
      tipo: selectedIndex as TiposBusca,
    });
  };

  const handleChangeInputBusca = (event: any): void => {
    if (listaPessoaCartao.length > 0) limparListaPessoaCartao();
    setCampoBusca(event.target.value);
  };

  const handleChangeSelectedIndex = (value: string): void => {
    if (listaPessoaCartao.length > 0) limparListaPessoaCartao();
    setSelectedIndex(value);
  };

  return (
    <Container>
      <TitleArea>
        <h1>Consultar Pessoa</h1>
      </TitleArea>
      <FormArea>
        <DivTipos>
          {tipos.map(item => (
            <RadioItem
              key={item.id}
              id={item.id}
              label={item.label}
              value={item.value}
              name={item.name}
              toggleSelected={handleChangeSelectedIndex}
              selectedIndex={selectedIndex}
            />
          ))}
        </DivTipos>

        <DivBusca>
          <input
            type="text"
            placeholder="Informe o parametro para busca"
            onChange={handleChangeInputBusca}
          />
          <button type="button" onClick={handleClickSearchPersons}>
            Buscar
          </button>
        </DivBusca>
      </FormArea>

      {listaPessoaCartao.length > 0 && (
        <ResultArea>
          {pessoaCartao.id ? (
            <CardPessoaCartao
              handleClickRecarga={handleToogleRecarga}
              handleClickExtrato={handleToogleExtrato}
            />
          ) : (
            <ListPessoaCartao />
          )}
        </ResultArea>
      )}

      <Recarga open={toggleRecarga} onClose={handleToogleRecarga} />
      <Extrato open={toggleExtrato} onClose={handleToogleExtrato} />
    </Container>
  );
};
export default Dashboard;
