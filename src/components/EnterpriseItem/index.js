import React from 'react';

import { Image } from 'react-native';

import {
  WrapItem,
  Label,
  WrapContent
} from './styles';

const EnterpriseItem = ({
  enterprise_name,
  city,
  photo,
  ...rest
}) => (
    <WrapItem {...rest}>
      <Image
        source={{ uri: `http://empresas.ioasys.com.br${photo}`}} 
        style={{ width: 80, height: 80, borderRadius: 40}}/>
      <WrapContent>
      <Label bold>{enterprise_name}</Label>
        <Label>
          {city}
        </Label>
      </WrapContent>
    </WrapItem>
  );

export default EnterpriseItem;