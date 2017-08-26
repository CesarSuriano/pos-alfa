import React, {Component} from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    RefreshControl
} from 'react-native';

const DATA_LIST = [
    { nome: "Cesar2 TOP TOP" },
    { nome: "Cesar2 TOP2 TOP2" },
    { nome: "Cesar3 TOP3 TOP3" },
    { nome: "Cesar4 TOP4 TOP4" },
    { nome: "Cesar5 TOP5 TOP5" },
]

class ListScreen extends Component {

    onItemPress = (item) => {
        console.log("Clicou no item");
        console.log(item);
    }

    renderItem = (record) => {
        const {item, index} = record;

        return(
            <TouchableOpacity
                onPress={ () => this.onItemPress(item) }
            >

                <View style={{
                    backgroundColor: '#fff',
                    marginHorizontal: 16,
                    marginVertical: 8,
                    padding: 16,
                    borderRadius: 5,
                    elevation: 2,
                    shadowOffset: {
                        width: 2,
                        height: 2,
                    },
                    shadowColor: '#333'
                }}>
                    <Text>{item.nome}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <FlatList
                data={ DATA_LIST }
                renderItem={ this.renderItem }
                keyExtractor={ (item) => item.nome }
                refreshControl={ <RefreshControl/> }
            />
        )
    }
}

export default ListScreen;