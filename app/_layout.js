import { Stack } from 'expo-router';
import LoginScreen from './login';

export default function AppLayout() {
    return (
      <Stack initialRouteName="login">
        <Stack.Screen name="login" options={{ headerShown: false }} />
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

export const unstable_settings = {
  initialRouteName: "login",
};
