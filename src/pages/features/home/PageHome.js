import React, { useState } from 'react';
import Header from '../../../components/header/Header';
import HistoricoList from '../../../components/historicoList/HitoricoList';

import {
  Background,
  Container,
  Name,
  Saldo,
  Title,
  List,
} from './PageHome.styles';

export default function PageHome() {
  const [historico, setHistorico] = useState([
    { key: '1', tipo: 'receita', valor: '1200' },
    { key: '2', tipo: 'despesa', valor: '1300' },
    { key: '3', tipo: 'receita', valor: '1400' },
    { key: '4', tipo: 'receita', valor: '1500' },
    { key: '5', tipo: 'despesa', valor: '1600' },
    { key: '6', tipo: 'receita', valor: '100' },
    { key: '7', tipo: 'receita', valor: '300' },
    { key: '8', tipo: 'despesa', valor: '500' },
    { key: '9', tipo: 'receita', valor: '450' },
  ]);

  return (
    <Background>
      <Header />
      <Container>
        <Name> Amanda </Name>
        <Saldo>R$ 150,00</Saldo>
      </Container>
      <Title>Ultimas Movimentações</Title>
      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <HistoricoList data={item} />}
      ></List>
    </Background>
  );
}
