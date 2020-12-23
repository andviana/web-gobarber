import React from 'react';
import format from 'date-fns/format';
import {
  FaArrowLeft,
  FaDollarSign,
  FaReceipt,
  FaSearchDollar,
} from 'react-icons/fa';
import {
  Card,
  CardHeader,
  UserLogo,
  CardActions,
  CardImage,
  CardBody,
  ColumnInfo,
  RowName,
  LabelInfo,
  TextInfo,
} from './styles';
import imgCartao from '../../../../assets/cartao.png';
import GroupInfo from './GroupInfo';
import { usePessoaCartao } from '../../../../hooks/pessoaCartao';

interface CardPessoaCartaoProps {
  handleClickRecarga(): void;
  handleClickExtrato(): void;
}

const CardPessoaCartao: React.FC<CardPessoaCartaoProps> = ({
  handleClickRecarga,
  handleClickExtrato,
}) => {
  const {
    listaPessoaCartao,
    pessoaCartao,
    limparPessoaCartao,
  } = usePessoaCartao();

  const { pessoa, cartao, perfisVigentes } = pessoaCartao;

  return pessoaCartao.pessoa ? (
    <Card>
      <CardHeader>
        <RowName>
          <UserLogo>
            <span>{pessoa.iniciais}</span>
          </UserLogo>
          <h3>{pessoa.nome}</h3>
        </RowName>
        <CardActions>
          <button type="button" onClick={handleClickRecarga}>
            <FaDollarSign />
            Recarga
          </button>
          <button type="button" onClick={handleClickExtrato}>
            <FaSearchDollar />
            Extrato
          </button>
          <button type="button" onClick={limparPessoaCartao}>
            <FaReceipt />
            Ticket
          </button>
        </CardActions>
      </CardHeader>
      <hr />
      <CardBody>
        <ColumnInfo>
          <GroupInfo title="Dados Pessoais:">
            <div>
              <LabelInfo>CPF:</LabelInfo>
              <TextInfo>{pessoa.cadastroNacionalFormatado}</TextInfo>
            </div>
            <div>
              <LabelInfo>Matrícula: </LabelInfo>
              <TextInfo>{pessoaCartao.matricula}</TextInfo>
            </div>
            <div>
              <LabelInfo>Cartão: </LabelInfo>
              <TextInfo>{cartao.numeroFormatado}</TextInfo>
            </div>
            <div>
              <LabelInfo>Situação: </LabelInfo>
              <TextInfo>{cartao.bloqueio ? 'BLOQUEADO' : 'ATIVO'}</TextInfo>
            </div>
            <div>
              <LabelInfo>Saldo: </LabelInfo>
              <TextInfo>{pessoaCartao.creditoCartaoFormatado}</TextInfo>
            </div>
            <div>
              <LabelInfo>Tipo: </LabelInfo>
              <TextInfo>{pessoaCartao.tipoPessoa.descricao}</TextInfo>
            </div>
          </GroupInfo>
          <GroupInfo title="Perfis de Consumo:">
            {perfisVigentes.map(perfil => (
              <div key={perfil.id}>
                <div>
                  <LabelInfo>Descrição: </LabelInfo>
                  <TextInfo>{perfil.perfilConsumo.descricao}</TextInfo>
                </div>
                <div>
                  <LabelInfo>Período: </LabelInfo>
                  <TextInfo>
                    {`${format(
                      new Date(perfil.dataInicio),
                      'dd/MM/yy',
                    )} à ${format(new Date(perfil.dataFim), 'dd/MM/yy')}`}
                  </TextInfo>
                  {perfisVigentes.length > 1 ? <hr /> : ''}
                </div>
              </div>
            ))}
          </GroupInfo>
        </ColumnInfo>
        <CardImage>
          <img src={imgCartao} alt="Imagem do cartão" />
        </CardImage>
      </CardBody>

      {listaPessoaCartao && listaPessoaCartao.length > 1 && (
        <div>
          <button type="button" onClick={limparPessoaCartao}>
            <FaArrowLeft />
            Voltar
          </button>
        </div>
      )}
    </Card>
  ) : null;
};

export default CardPessoaCartao;
