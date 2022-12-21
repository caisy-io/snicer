import React from 'react';
import { SImageArea } from './styles/SImageArea';

interface IImageArea{
  children?: React.ReactNode

}

export const ImageArea: React.FC <IImageArea> = ({ ...props }) => {
  return (
    <SImageArea>
      {props.children}
    </SImageArea>
  )
}
