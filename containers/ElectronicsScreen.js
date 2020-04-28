import React , {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {electronics} from '../data';
import Products from '../components/Products';
import {connect} from 'react-redux';

class ElectronicsScreen extends Component{
static navigationOptions = {
    headerTitle : 'Electronics'
}
  render(){
    return (
      <View style={styles.container}>
      <Products  style={{ padding: 10 , alignItems: 'left', }} 
      products = { electronics } 
      onPress = {this.props.addItemToCart}/>
    </View>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    addItemToCart : (product) => dispatch ({type:'ADD_TO_CART', payload : product})
  }
}
export default connect(null, mapDispatchToProps)(ElectronicsScreen)  ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
