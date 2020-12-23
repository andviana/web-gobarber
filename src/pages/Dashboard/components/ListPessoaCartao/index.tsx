import React from 'react';
import { usePessoaCartao } from '../../../../hooks/pessoaCartao';
import ItemPessoaCartao from './ItemPessoaCartao';
import { ListContainer } from './styles';

const ListPessoaCartao: React.FC = () => {
  const { listaPessoaCartao, selecionarPessoaCartao } = usePessoaCartao();
  return (
    <ListContainer>
      <h3>Selecione um aluno:</h3>
      <hr />
      {listaPessoaCartao &&
        listaPessoaCartao.map(item => (
          <ItemPessoaCartao
            key={item.id}
            pessoaCartao={item}
            handleClickPessoaCartao={selecionarPessoaCartao}
          />
        ))}
    </ListContainer>
  );
};
export default ListPessoaCartao;
