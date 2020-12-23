import React, { Fragment } from 'react';

import { InfoTitle, Infos } from './styles';

interface GroupInfoProps {
  title: string;
}
const GroupInfo: React.FC<GroupInfoProps> = ({ title, children }) => {
  return (
    <>
      <InfoTitle>{title}</InfoTitle>
      <Infos>{children}</Infos>
    </>
  );
};
export default GroupInfo;
