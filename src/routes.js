import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import PageHome from './pages/features/home/PageHome';
import PageProfile from './pages/features/profile/PageProfile';
import PageNew from './pages/features/new/PageNew';
import { GREY_MEDIUM, WHITE, GREY_LIGHTER, GREEN, BLACK } from './styles.js';

const Public = createDrawerNavigator();

const PublicRoutes = () => {
  return (
    <Public.Navigator
      drawerStyle={{
        backgroundColor: GREY_MEDIUM,
      }}
      drawerContentOptions={{
        labelStyle:{
          fontWeight: 'bold',
        },
        activeTintColor: WHITE,
        activeBackgroundColor: GREEN,
        inactiveBackgroundColor: BLACK,
        inactiveTintColor: GREY_LIGHTER,
        itemStyle: {
          marginVertical: 5,
        }
      }}
    >
      <Public.Screen
        name="Home"
        component={PageHome}
        options={{ headerShown: false }}
      />
      <Public.Screen
        name="Perfil"
        component={PageProfile}
        options={{ headerShown: false }}
      />
      <Public.Screen
        name="Registar"
        component={PageNew}
        options={{ headerShown: false }}
      />
    </Public.Navigator>
  );
};

export default PublicRoutes;
