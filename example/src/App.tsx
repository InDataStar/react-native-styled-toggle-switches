import { Text, View, StyleSheet } from 'react-native';
import  SlideSwitch  from 'react-native-styled-toggle-switches';
 

export default function App() {
  return (
    <View style={styles.container}>
      <SlideSwitch  beforeColor='blue'afterColor='black' duration={400} width={200} height={40} onToggle={(val) => console.log('Switch toggled:', val)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
