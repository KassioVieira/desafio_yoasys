import React, { Component } from 'react';
import { Alert } from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Container from '../../components/Container'
import TextInputLayout from '../../components/TextInputLayout'
import Logo from '../../components/Logo';
import Button from '../../components/Button'
import Api from '../../services/Api'

import { setLogged, setUser, setHeaders} from '../../store/ducks/auth'

class Login extends Component {

  state = {
    email: 'testeapple@ioasys.com.br',
    password: '12341234',
  }

  login = async() => {
    const { email, password } = this.state;
    const { setHeaders, setLogged, setUser, navigation} = this.props
    try{
      const response = await Api.post('/users/auth/sign_in',{
        email,
        password
      })

      setHeaders(response.headers)
      setUser(response.data.investor)
      setLogged(true)
      console.log(response)
      navigation.navigate('App')

    }catch(erro){
      Alert.alert("Atenção", "Tivemos um erro ao efetuar o login")
      console.log(erro)
    }
  }
  

  render() {
    const { email, password } = this.state;

    return (
      <Container>
          <Logo/>
          <TextInputLayout
            autoFocus
            label="Email"
            value={email}
            onChangeText={(text) => this.setState({ email: text })}
            keyboardType="email-address"
          />

          <TextInputLayout
            label="Senha"
            value={password}
            onChangeText={(text) => this.setState({ password: text })}
            secureTextEntry
          />
          <Button label="Entrar"
            onPress={() => this.login()}
          />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispacthToProps = dispacth => bindActionCreators({ setHeaders, setLogged, setUser }, dispacth)
export default connect(mapStateToProps, mapDispacthToProps)(Login)