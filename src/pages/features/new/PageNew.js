import React, { useState } from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';

import Header from '../../../components/header/Header';
import Picker from '../../../components/picker/Picker.android';
import { Background, Input, SubmitButton, SubmitText } from './PageNew.styles';

export default function PageNew() {
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState(null);

  function handleSubmit() {
    alert(tipo);
    alert(valor);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Header />

        <SafeAreaView style={{ alignItems: 'center' }}>
          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
            value={valor}
            onChangeText={(text) => setValor(text)}
          ></Input>
          <Picker onChange={setTipo}></Picker>
          <SubmitButton onPress={handleSubmit}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}
