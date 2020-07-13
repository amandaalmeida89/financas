import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/header/Header';
import { 
  Container,
  Nome,
  NewLink,
  NewText,
  Logout,
  LogoutText
  } from './PageProfile.styles';

export default function Profile() {
  const navigation = useNavigation();

 return (
   <Container>
     <Header/>
     <Nome>
       Sujeito
     </Nome>
     <NewLink>
      <NewText onPress={()=> navigation.navigate('Registar')}>
        Registar Gastos
      </NewText>
     </NewLink>
     {/* <Logout>
       <LogoutText>
         Sair
       </LogoutText>
     </Logout> */}
   </Container>
  );
}