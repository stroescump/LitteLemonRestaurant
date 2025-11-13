import { View, Text } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <LittleLemonHeader />
        {/* <MenuItems/> */}
        <WelcomeScreen/>
      </View>

      <View>
        <LittleLemonFooter />
      </View>
    </>
  );
}
