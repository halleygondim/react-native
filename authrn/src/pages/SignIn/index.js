import React, { useState } from 'react';
import {View, Button, StyleSheet,Text, TextInput} from 'react-native';
import {useAuth} from '../../contexts/auth';


//RESPONSÁVEL EM FAZER O LOGIN, TELA INICIAL

export function SignIn(){

  const [usuario,setUsuario] = useState({})
  const {signIn} = useAuth();

  function handleSign() {
    signIn(usuario);
  }

  return (
    <View style={styles.container}>

<Text>E-mail</Text>
      <TextInput value={usuario.email} onChangeText={email => setUsuario({ ...usuario, email })} />
      <Text>Senha</Text>
      <TextInput value={usuario.password} onChangeText={password => setUsuario({ ...usuario, password })} />
      <Button title="Sign In" onPress={handleSign} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

