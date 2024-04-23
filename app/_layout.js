/// import { Stack } from '@react-navigation/stack';
import { Stack } from 'expo-router';
import LoginScreen from './login';



export default function AppLayout() {
    return (
      <Stack>
        <Stack.Screen name="login" options = {{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{
            presentation: 'modal',
            headerShown: false
          }}
        />
      </Stack>
    );
}
