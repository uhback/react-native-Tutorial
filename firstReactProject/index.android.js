import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native'

import Component1 from './src/components/Component1/Component1';
import Component2 from './src/components/Component2/Component2';
import Component3 from './src/components/Component3/Component3';

export default class firstReactProject extends Component{
  render(){
    return(
      <View>
        <Component3 />
      </View>
    );
  }
}

AppRegistry.registerComponent('firstReactProject', ()=> firstReactProject);