import { FC } from 'react';
import './container.scss';

export const Container: FC = ({ children }) => (
  <div className="container">
    {children}
  </div>
);
