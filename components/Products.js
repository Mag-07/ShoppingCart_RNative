import React , {Component} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

class Products extends Component {

    renderProducts = (products) => {
       // console.log(products)
        return products.map((item, index) => {
            return (
                <View key={index} style={{ padding: 10}}>
                    <Button onPress={() =>this.props.onPress(item)} 
                            title={item.name + " - " + item.price} />
                </View>
            )
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderProducts(this.props.products)}
            </View>
        );
    }
}
export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
