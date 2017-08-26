import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import axios from 'axios';

const POSTS_RL = "https://jsonplaceholder.typicode.com/posts";

class RequestScreen extends Component {

    state = {
        erro: '',
        posts: null,
        aguarde: false,

    }

    onBuscarPress = () => {
        this.setState({ aguarde: true });

        let posts = null;
        let erro = '';
        axios.get(POSTS_RL, { timeout: 2000 })
        .then((response) => {
            if (response.status === 200){
                posts = response.data;
            } else {
                erro = "Codigo de retorno diferente de 200"
            }
        }).catch((exception) => {
            alert("Deu erro parsa" + exception);
            erro = "Internet zuada";
        }).finally(() => {
            this.setState({ 
                aguarde: false,
                posts: posts,
                erro: erro
            });
        })
    }

    renderForm = () => {

        return (
            <Button
                title="Buscar"
                onPress={this.onBuscarPress} />
        )

    }

    renderContent = () => {
        
        if(this.state.aguarde) {
            return(
                <ActivityIndicator size = "large" color = "#e09"/>
            )
        }

        if (this.state.erro) {
            return (
                <Text
                    style = {{ color: '#f00' }}
                >
                    {this.state.erro}
                </Text>
            )
        }

        let content;
        if (this.state.posts) {
            content = this.state.posts.map((item, index) => {
                return (
                    <View
                        key = { index }
                        style = {{ padding: 16 }}
                    >
                        <Text>{ item.title }</Text>
                        <Text>{ item.body }</Text>
                    </View>
                )
            })
        }

        return (
            <View>
                {content}
            </View>
        )

    }

    render() {

        return(
            <ScrollView>

                {this.renderForm()}

                {this.renderContent()}
                
            </ScrollView>
        )
    }

}

export default RequestScreen;