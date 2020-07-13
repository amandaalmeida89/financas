import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex:1;
  background-color: #131313;
  align-items: center;
`;
export const Nome = styled.Text`
  text-align: center;
  font-size: 28px;
  margin-bottom: 25px;
  color: #FFF;
  margin-top: ${Platform.select({ ios: '80px', android: '25px' })};
`;
export const NewLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color:#00b94a;
  width: 90%;
  height: 45px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
export const NewText = styled.Text`
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
`;
export const Logout = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color:#c62c36;
  width: 90%;
  height: 45px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
export const LogoutText = styled.Text`
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
`;
