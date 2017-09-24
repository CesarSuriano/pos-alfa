import React, { Component } from 'react';
import axios from 'axios';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Modal
} from 'react-native';

const KEY = "AIzaSyApJDvdHZ7IAQtjS4KNGEMknM_aniqQMFw"
const URL_BASE = "https://maps.googleapis.com/maps/api/place/textsearch/json?key=" + KEY + "&query=";
let url_mapa_estatico = "https://maps.googleapis.com/maps/api/staticmap?key=" + KEY + "&zoom=16&size=600x300&markers="

export default class SourceScreen extends Component {

  state = {
    text: "",
    animating: false,
    dados: "",
    imagens: [],
    data_list: [],
    details: [{
      name: "",
      endereco: "",
      telefone: "",
      imagem: "",
      img_mapa: ""
    }],
    modalVisible: false
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  componentDidMount() {
    const config = { enableHighAccuracy: false };
    navigator.geolocation.getCurrentPosition(this.locationSuccess, this.locationError, config);
  }

  // Callback disparado quando a localização é obtida.
  locationSuccess = (position) => {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    })
  }

  // Callback disparado se ocorrer algum erro ao obter a localização.
  locationError = (error) => {
    console.warn(error);
  }

  searchLocal = () => {

    this.setState({ data_list: [] })
    //this.setState({ animating: !this.state.animating })
    let url_final = URL_BASE + this.state.text + "&location=" + this.state.latitude + "," + this.state.longitude;
    //let url_imagem = https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyBzx2BBJdh-UwpG2eIt4a-HEMdj8yDW47k&maxwidth=400&photoreference="
    let self = this;
    this.setState({ animating: true })
    axios.get(url_final)
      .then(function (response) {
        //self.setState({ dados: response })

        let arrayData_list = self.state.data_list.slice()
        //console.log(response.data.results.length)
        for (let i = 0; i < response.data.results.length; i++) {
          arrayData_list.push({
            id: response.data.results[i].place_id,
            name: response.data.results[i].name,
            endereco: response.data.results[i].formatted_address,
            imagem: "https://maps.googleapis.com/maps/api/place/photo?key=" + KEY + "&maxwidth=100&photoreference=" + response.data.results[i].photos[0].photo_reference
          })
        }

        self.setState({ data_list: arrayData_list })
        //console.log(arrayData_list)
        self.setState({ animating: false })

        //axios.get(url_imagem)
      })
      .catch(function (error) {
        console.log(error);
        self.setState({ animating: false })
      });

    //console.log(this.state.data_list);
  }

  renderAnimation = () => {
    if (this.state.animating) {
      return <ActivityIndicator size='large' style={styles.loading} />
    } else {
      return
    }

  }

  onItemPress = (item) => {
    let url_details = "https://maps.googleapis.com/maps/api/place/details/json?key=" + KEY + "&placeid=" + item.id;

    this.setState({ details: {} })
    let self = this;
    axios.get(url_details)
      .then((response) => {

        let latitude = response.data.result.geometry.location.lat;
        let longitude = response.data.result.geometry.location.lng;

        if (response.status === 200) {
          self.setState({
            details: {
              name: response.data.result.name,
              endereco: response.data.result.formatted_address,
              telefone: response.data.result.formatted_phone_number,
              imagem: "https://maps.googleapis.com/maps/api/place/photo?key=" + KEY + "&maxwidth=500&photoreference=" + response.data.result.photos[0].photo_reference,
              img_mapa: url_mapa_estatico + latitude + "," + longitude
            }
          })

          //self.setState({details: arrayDetails})
          console.log(self.state.details);
          this.setModalVisible(true)
        } else {
          alert("Tente novamente mais tarde");
        }
      }).catch((exception) => {
        console.warn(exception);
        alert('Verifique sua conexão com a Internet.');
      }).finally(() => {

      })

  }

  renderItem = (record) => {
    const { item, index } = record;
    console.log(record)
    return (
      <TouchableOpacity
        onPress={() => this.onItemPress(item)}>

        <View style={{
          flexDirection: "row",
          backgroundColor: '#fff',
          marginHorizontal: 16, marginVertical: 8,
          padding: 16, borderRadius: 5,
          elevation: 2, shadowOffset: {
            width: 2,
            height: 2,
          }, shadowColor: '#333'
        }}>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: item.imagem }}
          />
          <View
            style={{ marginLeft: 10, paddingRight: 10 }}>

            <Text
              style={{ color: '#000' }}>
              {item.name}
            </Text>
            <Text
              style={{ maxWidth: 150 }}>
              {item.endereco}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  fecharModal = () => {
    this.setModalVisible(false)
  }

  render() {

    const latitude = this.state.latitude;
    const longitude = this.state.longitude;

    if (latitude && longitude) {
      return (
        <View style={styles.container}>
          {this.renderAnimation()}
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <TextInput
              style={{ height: 40, borderColor: 'gray', width: 250 }}
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
            />
            <Button
              onPress={this.searchLocal}
              title="Buscar"
              color="#841584"
              accessibilityLabel=""
            />
          </View>
          <FlatList
            data={this.state.data_list}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
          />

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => { alert("Modal has been closed.") }}
          >
            <ScrollView style={{ marginTop: 22 }}>
              <View>
                <Button
                  onPress={this.fecharModal}
                  title="Fechar X" />
                <View
                  style={{ marginTop: 50 }}>
                  <Image
                    style={{
                      width: 500, height: 300
                    }}
                    source={{ uri: this.state.details.imagem }}
                  />
                  <Text>{this.state.details.name}</Text>
                  <Text>{this.state.details.endereco}</Text>
                  <Text>{this.state.details.telefone}</Text>
                  <Image
                    style={{ width: 400, height: 200 }}
                    source={{ uri: this.state.details.img_mapa }}
                  />
                </View>

              </View>
            </ScrollView>
          </Modal>
        </View>
      )
    }

    return (
      <View>
        <Text>Aguardando localização...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
