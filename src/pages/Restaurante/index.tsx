import React, { useEffect, useState } from 'react';
import 'react-day-picker/lib/style.css';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useRestaurante } from '../../hooks/restaurante';
import { useToast } from '../../hooks/toast';
import { getLocalRestauranteList } from '../../DTO/RestauranteDTO';

const Restaurante: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState('0');
  const {
    buscarListaRestaurantes,
    listaRestaurantes,
    selecionarRestaurante,
  } = useRestaurante();
  const history = useHistory();
  const { addToast } = useToast();

  useEffect(() => {
    const buscarRestaurantes = async (): Promise<void> => {
      await buscarListaRestaurantes();
    };
    if (!getLocalRestauranteList() || listaRestaurantes.length < 1) {
      buscarRestaurantes();
    }
  }, [buscarListaRestaurantes, listaRestaurantes]);

  const handleSelecionarRestaurante = async (): Promise<void> => {
    try {
      const data = { toValidate: Number(selectedIndex) };
      const schema = Yup.object().shape({
        toValidate: Yup.number()
          .required('Selecione um restaurante')
          .moreThan(0, 'Selecione um restaurante'),
      });

      await schema.validate(data, { abortEarly: false });
      await selecionarRestaurante({ id: selectedIndex });
      history.push('/dashboard');
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro ao Selecionar Restaurante',
        description: 'Restaurante deve ser selecionado.',
      });
    }
  };

  const handleChangeSelected = (event: any): void => {
    setSelectedIndex(event.target.value);
  };

  return (
    <>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label style={{ color: 'black' }}>
            Selecione o restaurante para continuar
          </Form.Label>
          <Form.Control
            as="select"
            size="lg"
            onChange={handleChangeSelected}
            defaultValue="0"
          >
            {(listaRestaurantes.length === 0 && (
              <option key={0} value="" disabled>
                Nenhum restaurante encontrado
              </option>
            )) || (
              <option key={0} value="0" disabled>
                selecione um restaurante
              </option>
            )}
            {listaRestaurantes.length > 0 &&
              listaRestaurantes.map(restauranteItem => (
                <option key={restauranteItem.id} value={restauranteItem.id}>
                  {restauranteItem.nome}
                </option>
              ))}{' '}
          </Form.Control>
        </Form.Group>
        <Button type="button" onClick={handleSelecionarRestaurante}>
          Confirmar
        </Button>
      </Form>
    </>
  );
};
export default Restaurante;
