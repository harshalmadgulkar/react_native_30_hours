import { StyleSheet } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/hooks/useTheme';

const TabsLayout = () => {
    const { colors } = useTheme();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,

                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'green',
                // tabBarActiveBackgroundColor: 'black',
                // tabBarInactiveBackgroundColor:'grey'
                tabBarStyle: {
                    backgroundColor: '#1e293b',
                    borderTopWidth: 1,
                    borderTopColor: 'yellow',
                    height: 90,
                    paddingBottom: 30,
                    paddingTop: 10,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Todos',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='document'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Tabs.Screen
                name='settings'
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='settings'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

        </Tabs>
    );
};

export default TabsLayout;

const styles = StyleSheet.create({});