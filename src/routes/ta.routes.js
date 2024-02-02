import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Feather} from '@expo/vector-icons'

import Feed from '../srceens/Feed'
import New from '../srceens/New'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name='feed'
        component={Feed}
        options={{
          tabBarIcon: ({ color, size}) => <Feather name='home' color={color} size={size}/>,
          tabBarLabel: 'Inicio'
        }}
      />
      <Tab.Screen
        name='new'
        component={New}
        options={{
          tabBarIcon: ({ color, size}) => <Feather name='plus' color={color} size={size}/>,
          tabBarLabel: 'Novo'
        }}
      />
    </Tab.Navigator>
  )
}