import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import {books} from '../data'
import Products from '../components/Products'
import {connect} from 'react-redux'

class BookScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Products style={{ padding: 10 , alignItems: 'left', }} 
                 products={books} onPress=
                {this.props.addItemToCart} />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addItemToCart:(product) => dispatch({type:'ADD_TO_CART',
    payload:product})
    }
}
export default connect(null, mapDispatchToProps)(BookScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',    
        alignItems: 'center',
        justifyContent: 'center'
    }
}); 