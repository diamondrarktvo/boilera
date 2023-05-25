import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StackNavigation } from "_navigations";


export default function App() {
  return (
    <SafeAreaProvider>
      <StackNavigation />
    </SafeAreaProvider>
  );
}

