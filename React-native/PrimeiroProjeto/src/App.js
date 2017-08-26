import React, { Component } from 'react';
import {
    View,
    AppRegistry,
    Text,
    Modal,
    Button
} from 'react-native';

import ImageTouch from './components/ImageTouch';
import ListScreen from './screens/ListScreen'
import FormScreen from './screens/FormScreen'
import RequestScreen from './screens/RequestScreen'

class App extends Component {

    state = {
        exibirModal: false
    }
    
    renderModal = () => {
        return (
            <View>
                <Button 
                    backgroundColor = "#00f"
                    title="Abrir modal"
                    onPress = { () => this.setState({ exibirModal: true }) }
                />
                <Modal 
                    visible = { this.state.exibirModal }
                    onRequestClose = {this.teste}
                    onRequestClose = { () => this.setState({ exibirModal: false }) }>

                    <View
                        style = {{
                            flex: 1,
                            backgroundColor: "#f00"
                        }}>

                        <Text>Este é o conteudo do modal</Text>
                        <Button
                            title = "Fechar"
                            onPress = { () => this.setState({ exibirModal: false }) }
                        ></Button>
                    </View>
                    
                </Modal>
            </View>
        )
    }

    render() {
        return (
            <View style={{
                backgroundColor: '#237865',
                flex: 1
            }}>

                {/* <Text>App é o meu componente principal.</Text> */}

                {/* <ImageTouch url="https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png" />
                <ImageTouch url="https://blog.algolia.com/wp-content/uploads/2015/12/react-native.png" />
                <ImageTouch url="http://i.imgur.com/oudmGva.png" /> */}
                {/* <ListScreen/> */}
                {/* <FormScreen/> */}
                {/* this.renderModal()*/ }

                <RequestScreen/>

            </View>
        )
    }
}

AppRegistry.registerComponent('PrimeiroProjeto', () => App);
