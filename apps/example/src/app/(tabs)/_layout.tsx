import { HeaderNavigation } from '@/components/header-navigation';
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color }) => {
            const name = `home${focused ? '' : '-outline'}`;
            return <Ionicons size={20} name={name} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="package"
        options={{
          title: 'Package',
          tabBarIcon: ({ focused, color }) => {
            const name = `home${focused ? '' : '-outline'}`;
            return <Ionicons size={20} name={name} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
