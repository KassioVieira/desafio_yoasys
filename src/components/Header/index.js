import React, { Component } from 'react';

import { Image } from 'react-native';

import { WrapHeader, Label } from './styles';

export default class Header extends Component {
  render() {
    const { photo, enterprise_name } = this.props.data
    return (
      <WrapHeader>
        <Image
        source={{ uri: `http://empresas.ioasys.com.br${photo}`}} 
        style={{ width: 80, height: 80, borderRadius: 40}}/>
        <Label>{enterprise_name}</Label>
      </WrapHeader>
    );
  }
}
