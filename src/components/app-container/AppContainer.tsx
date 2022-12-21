import React, { FC } from 'react';
import { SAppContainer } from './styles/SAppContainer';

interface IAppContainer{
  children?: React.ReactNode
}

export const AppContainer: FC <IAppContainer> = ({ ...props }) => {

  return (
    <SAppContainer>
      {props.children}
    </SAppContainer>
  )
}
