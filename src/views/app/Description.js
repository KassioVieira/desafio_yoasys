import React, { Component } from 'react';

import { Alert, ActivityIndicator, View } from 'react-native'
import { connect } from 'react-redux'
import Container from '../../components/Container'
import Toolbar from '../../components/Toolbar'
import Header from '../../components/Header'
import Card from '../../components/Card'
import Api from '../../services/Api'
import colors from '../../values/colors';

class Description extends Component {
 
  state = {
    enterprise: [],
    loading: false,
  }

  componentDidMount(){
    const { navigation } = this.props
    const id = navigation.getParam('id',1)
    this.getEnterprise(id)
  }

  getEnterprise = async(id) => {
    const { header } = this.props
    this.setState({ loading: true})
    try{
      const response = await Api.get(`/enterprises/${id}`,{
        headers:{
          "Content-Type" :"application/json",
          "access-token": header["access-token"],
          "client": header.client,
          "uid": header.uid
        }
      }
      )
      this.setState({ enterprise: response.data.enterprise, loading: false})
      console.log(response)
    }catch(error){
      Alert.alert("Ops, tivemos um erro")
      console.log(error)
      this.setState({ loading: false})
      this.props.navigation.navigate("Auth")
    }
  }

  render() {
    const { enterprise, loading } = this.state
    return (
      <Container>
        <Toolbar title="Enterprise"/>
        {
          loading ? <ActivityIndicator 
              size={50}
              color={colors.primary}
              style={{marginTop: 50}}/>
          : <View>
            <Header data={enterprise}/>
            <Card {...enterprise}/>
          </View>
        }
        
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  header: state.auth.headers
});
export default connect(mapStateToProps)(Description)
