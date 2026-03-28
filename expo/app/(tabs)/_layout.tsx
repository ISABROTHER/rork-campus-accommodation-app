import React from "react";
import { Tabs } from "expo-router";
import { Compass, Search, Heart, User } from "lucide-react-native";
import { Platform, StyleSheet } from "react-native";

import { Colors } from "@/constants/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.tabIconDefault,

        tabBarShowLabel: true,
        tabBarLabelStyle: styles.tabLabel,

        // “Banking-style” floating, rounded tab bar
        tabBarStyle: styles.tabBar,

        tabBarItemStyle: styles.tabItem,
        tabBarIconStyle: styles.tabIcon,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Compass size={Math.max(22, size)} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Search size={Math.max(22, size)} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color, size }) => (
            <Heart size={Math.max(22, size)} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <User size={Math.max(22, size)} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.surface,
    borderTopWidth: 0,

    // Floating pill
    position: "absolute",
    left: 14,
    right: 14,
    bottom: 12,
    height: 72,
    paddingTop: 10,
    paddingBottom: 10,

    borderRadius: 22,

    // Subtle outline (premium feel)
    borderWidth: 1,
    borderColor: Colors.border,

    // Shadow (iOS) + Elevation (Android)
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 10 },
      },
      android: {
        elevation: 10,
      },
      default: {},
    }),
  },

  tabItem: {
    borderRadius: 16,
    paddingVertical: 6,
  },

  tabIcon: {
    marginTop: 2,
  },

  tabLabel: {
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 0.2,
    marginTop: 4,
  },
});
