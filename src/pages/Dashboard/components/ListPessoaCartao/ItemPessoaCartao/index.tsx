import React from 'react';
import { FaChevronCircleRight } from 'react-icons/fa';
import { PessoaCartao } from '../../../../../DTO/PessoaCartaoDTO';
import { CardItem, UserLogo, CardInfo, CardIcon } from './styles';

interface ItemPessoaCartaoProps {
  pessoaCartao: PessoaCartao;
  handleClickPessoaCartao(id: number): void;
}

const ItemPessoaCartao: React.FC<ItemPessoaCartaoProps> = ({
  pessoaCartao,
  handleClickPessoaCartao,
}) => {
  const handleClickItem = (id: number): void => {
    handleClickPessoaCartao(id);
  };

  return (
    <CardItem onClick={() => handleClickItem(pessoaCartao.id)}>
      <UserLogo>
        <h2>{pessoaCartao.pessoa.iniciais}</h2>
      </UserLogo>
      <CardInfo>
        <h3>{pessoaCartao.pessoa.nome}</h3>
        <span>
          Matrícula: <strong>{pessoaCartao.matricula}</strong>
        </span>
        <span>
          Número: <strong>{pessoaCartao.cartao.numeroFormatado}</strong>
        </span>
      </CardInfo>
      <CardIcon>
        <span>{pessoaCartao.creditoCartaoFormatado}</span>
        <FaChevronCircleRight size={30} />
      </CardIcon>
    </CardItem>
  );
};

export default ItemPessoaCartao;
