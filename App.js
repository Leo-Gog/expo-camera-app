import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CameraScreen from './CameraScreen';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView>
          <CameraScreen/>
        </SafeAreaView>
      </SafeAreaProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
