import './i18n.config';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '@src/screens';
import { navigationRef } from '@src/navigation/RootNavigation';

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
