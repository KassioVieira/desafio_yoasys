import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class Loading extends Component {

  componentDidMount(){
    const { navigate,  } = this.props.navigation
    if(this.props.user){
      navigate('App')
    }else{
      navigate('Auth')
    }
  }

  render() {
    return (
      <View>
        <Text>SplashScreen</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(Loading)