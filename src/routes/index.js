import {NavigationContainer} from '@react-navigation/native'
// import TabRoutes from './ta.routes'
import DrawerRoutes from './drawer.routes';

export default function Routes() {
  return(
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  )
}