import React from 'react';

import { WrapButton, Label } from './styles';

const Button = ({label, ...rest}) => (
  <WrapButton {...rest}>
    <Label>{label}</Label>
  </WrapButton>
)

export default Button;
