import React from 'react';
import { FaSync, FaUser } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { useAuth } from '../../../../hooks/auth';
import { FixedBar, LogoArea, UserArea } from './styles';
import logo from '../../../../assets/logoLight.svg';
import { useRestaurante } from '../../../../hooks/restaurante';

const FixedTopBar: React.FC = () => {
  const { user, signOut } = useAuth();
  const {
    restaurante,
    trocarRestaurante,
    signOutRestaurante,
  } = useRestaurante();

  const handleSignOut = async (): Promise<void> => {
    await signOutRestaurante();
    await signOut();
  };
  return (
    <FixedBar>
      <div>
        <LogoArea>
          <img src={logo} alt="Logo da Unifesspa" />
          <h1>RU Unifesspa</h1>
          <button type="button">
            <FiMenu />
          </button>
        </LogoArea>
        <UserArea>
          {restaurante.nome && (
            <div>
              <span>{restaurante.nome}</span>
              <button type="button" onClick={trocarRestaurante}>
                <FaSync />
              </button>
            </div>
          )}
          <span>Olá {user.name}!</span>
          <button type="button" onClick={handleSignOut}>
            <FaUser />
          </button>
        </UserArea>
      </div>
    </FixedBar>
  );
};

export default FixedTopBar;
