import React, { useState, useEffect } from 'react'
import { Alert, View, Text, Button, Image } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps'
import * as Location from 'expo-location';
import { getDistance, getPreciseDistance } from  'geolib'

export default function App() {

  const [posicoes, setPosicoes] = new useState([
    { key: 10, coords: { latitude: -16.678343, longitude: -49.248944 }, pinColor: '#FF0000' },
    { key: 11, coords: { latitude: -16.675335, longitude: -49.238046 }, pinColor: '#00FF00' },
  ]

  );
  const [localizacao, setLocalizacao] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  let posicao = '';
  if (errorMsg) {
    posicao = errorMsg;
  } else if (localizacao) {
    posicao = JSON.stringify(localizacao);
  }


  const calculaDistancia = () => {
    var dis = getDistance(
      {latitude: -16.678343, longitude: -49.248944},
      {latitude: -16.675335, longitude:  -49.238046},
    );
    alert(
      `Distância\n\n${dis} Metros\nOu\n${dis / 1000} KM`
    );
  };

  const calculaDistanciaPrecisao = () => {
    var pdis = getPreciseDistance(
      {latitude: -16.678343, longitude: -49.248944},
      {latitude: -16.675335, longitude:  -49.238046},
    );
    alert(
      `Distância c/ Precisão\n\n${pdis} Metros\nOu\n${pdis / 1000} KM`
    );
  };


  //yarn add react-native-maps
  //expo install expo-location
  //yarn add geolib
  //Configurar Maps para localização, GPS LOCAL

  /*
    region ou 
    initialRegion={{
      latitude: -23.5492243,
      longitude: -46.5813785,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }}
  */

  function alterouMapa(region) {

  }

 function posicaoAtual(){
  (async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    setLocalizacao(location);
  })();
 }


  function clicouMapa(e) {
    alert(e.nativeEvent.coordinate.latitude + "\n" + e.nativeEvent.coordinate.longitude)
  }


  return (
    <View style={{ flex: 1 }}>
        <Button style={{ flex: 2 }}  onPress={calculaDistancia} title="Distancia"></Button>
      <Button style={{ flex: 2 }}  onPress={calculaDistanciaPrecisao} title="Distancia c/ Precisão"></Button>
      <Button style={{ flex: 2 }}  onPress={posicaoAtual} title="Pegar posição Corrente"></Button>

      <MapView
        //satellite e hybrid
        mapType="standard"
        onMapReady={() => Alert.alert('Totalmente carregado!')}
        onRegionChangeComplete={alterouMapa}
        onPress={clicouMapa}
        //scrollEnabled={false}
        //zoomEnabled={false}
        //showsTraffic={true}
        style={{ flex: 1 }}
        region={{
          latitude: -16.677148,
          longitude: -49.244041,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
 
        <Marker
          coordinate={{
            latitude: -16.677415,
            longitude: -49.245136
          }}
          title="Teste" color="#777" description="Descrição" pinColor={"#0000ff"} >
        </Marker>

        {

          posicoes.map((marcador) => {
            return (
              <Marker key={marcador.key} coordinate={marcador.coords} pinColor={marcador.pinColor} />
            );
          })

        }

        <Marker
          coordinate={{
            latitude: -16.676223,
            longitude: -49.241423
          }}
          title="Teste" color="#777" description="Descrição" image={require('./src/assets/images/home.png')} >
        </Marker>

        {/*pode-se colocar JSX dentro da tag Marker*/}


        <Marker
          coordinate={{
            latitude: -16.678731,
            longitude: -49.244486
          }} >
            <Callout tooltip={true}>
              <View style={{backgroundColor:'#fff', width:350, height:350}}>
                <Text>Oi</Text>
              </View>
            </Callout>
        </Marker>


      </MapView>
      <Text >{posicao}</Text>

    </View>
  )
}