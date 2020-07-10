import React from 'react';
import { Container, Nome, NewLink, NewText, Logout, LogoutText } from './PageProfile.styles';

export default function Profile() {
 return (
   <Container>
     <Nome>
       Sujeito
     </Nome>
     <NewLink>
      <NewText>
        Registar Gastos
      </NewText>
     </NewLink>
     <Logout>
       <LogoutText>
         Sair
       </LogoutText>
     </Logout>
   </Container>
  );
}