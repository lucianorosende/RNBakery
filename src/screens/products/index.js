import React from 'react';
import { View, Text, Button } from 'react-native';
import {styles} from './styles';

const ProductScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Product Screen</Text>
            <Button title='Go to ProductDetail' onPress={() => navigation.navigate("ProductDetail")}/>
        </View>
    )
}

export default ProductScreen;