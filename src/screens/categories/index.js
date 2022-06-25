import React from 'react';
import { View, Text, Button } from 'react-native';
import {styles} from './styles';

const CategorieScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Categorie Screen</Text>
            <Button title='Go to productScreen' onPress={() => navigation.navigate("Products")} />
        </View>
    )
}

export default CategorieScreen;