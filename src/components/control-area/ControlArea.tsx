import React from 'react';
import { useStore } from '../../context/store';
import { SControlArea } from './styles/SControlArea';

interface IControlArea{
  children?: React.ReactNode

}

export const ControlArea: React.FC <IControlArea> = ({ ...props }) => {
  return (
    <SControlArea>
      <div>
      Press CMD + S to save the image
      </div>
      <div>
      Refresh CMD + R to reset the image
      </div>
      {props.children}
    </SControlArea>
  )
}
