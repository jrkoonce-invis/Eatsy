import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faGear } from '@fortawesome/free-solid-svg-icons'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'maroon', headerShown: false}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faHouse} size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faGear} size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
