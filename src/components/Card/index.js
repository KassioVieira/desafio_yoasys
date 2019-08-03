import React from 'react';
import { WrapCard, Label } from './styles';

const Card = ({description}) => (
  <WrapCard>
    <Label>
      {description}
    </Label>
  </WrapCard>
);

export default Card;
