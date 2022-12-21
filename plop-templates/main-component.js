import React, { FC } from 'react';
import { S{{ properCase name }} } from './styles/S{{ properCase name }}';

interface I{{ properCase name }}{
  children?: React.ReactNode
}

export const {{ properCase name }}: FC <I{{ properCase name }}> = ({ ...props }) => {
  if (typeof window !== "undefined") {
    console.log(`{{properCase name}} props: `, props);
  }
  return (
    <S{{ properCase name}}>
      {props.children}
    </S{{ properCase name }}>
  )
}
