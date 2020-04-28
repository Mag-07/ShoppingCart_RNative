import React , {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class HomeScreen extends Component{
  render(){
    return (
      <View style={styles.container}>
      <Button style={styles.button} title="Electronics" onPress={()=> this.props.navigation.navigate('Electronics')}/>
      <Button style={styles.button} title="Books" onPress={()=> this.props.navigation.navigate('Books')}/>
    </View>
    );
  }
}

export default HomeScreen ;

const styles = StyleSheet.create({
  container: {
   padding: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  button: {
    
     flex: 1,
     alignItems: 'center',
     backgroundColor: '#4dff4d',
     
   },
});
