import React, { Component } from 'react';

import { View, Text, Alert, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux'

import Container from '../../components/Container'
import Toolbar from '../../components/Toolbar'
import EnterprisesItem from '../../components/EnterpriseItem'
import Api from '../../services/Api'
import colors from '../../values/colors';
class Enterprises extends Component {

  state = {
    enterprises: []
  }

  componentDidMount(){
    this.getEnterprises()
  }

  getEnterprises = async() => {
    const { header } = this.props
    try{
      const response = await Api.get('/enterprises',{
        headers:{
          "Content-Type" :"application/json",
          "access-token": header["access-token"],
          "client": header.client,
          "uid": header.uid
        }
      }
      )
      this.setState({ enterprises: response.data.enterprises})
      console.log(response)
    }catch(error){
      Alert.alert("Ops, tivemos um erro")
      console.log(error)
      this.props.navigation.navigate("Auth")
    }
  }

  render() {
    const { enterprises } = this.state
    const { navigation } = this.props
    return (
      <Container>
        <Toolbar title="Enterprises"/>
        <FlatList
          data={enterprises}
          renderItem={({ item }) => (
            <EnterprisesItem
              {...item}
              onPress={()=> navigation.navigate('Description',{id: item.id})}
            />
          )}
          ListEmptyComponent={<ActivityIndicator 
            size={50}
            color={colors.primary}
            style={{marginTop: 50}}/>}
          keyExtractor={item => `${item.id}`}
        />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  header: state.auth.headers
});

export default connect(mapStateToProps)(Enterprises)
