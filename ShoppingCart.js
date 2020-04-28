import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './containers/HomeScreen'
import ElectronicsScreen from './containers/ElectronicsScreen'
import BookScreen from './containers/BooksScreen'
import CartScreen from './containers/CartScreen'

import ShoppingCartIcon from './containers/ShoppingCartIcon'

class ShoppingCart extends React.Component{
    render(){
        return(
            <AppStackNavigator />
        );
    }
}
export default ShoppingCart;

const AppStackNavigator = createStackNavigator({
    Home: {screen : HomeScreen } ,
    Electronics: {screen :ElectronicsScreen},
    Books: { screen :BookScreen},
    Cart: {screen :CartScreen}
},{ 
    navigationOptions:{
        headerTitle: 'Basic Shopping App',
        headerRight: (
            <ShoppingCartIcon/>
        )

    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});