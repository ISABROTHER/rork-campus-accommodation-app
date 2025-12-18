import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Switch } from "react-native";
import { Settings, ChevronRight, Bell, Moon, CircleHelp as HelpCircle, LogOut, User } from "lucide-react-native";
import { Colors } from "@/constants/colors";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity>
            <Settings size={24} color={Colors.text} />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.profileSection}>
            <View style={styles.avatarContainer}>
              <Image 
                source={{ uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop" }} 
                style={styles.avatar}
              />
              <View style={styles.editBadge}>
                <User size={12} color="#fff" />
              </View>
            </View>
            <Text style={styles.name}>Alex Johnson</Text>
            <Text style={styles.email}>alex.j@university.edu</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Viewed</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>Saved</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1</Text>
              <Text style={styles.statLabel}>Bookings</Text>
            </View>
          </View>

          <View style={styles.menuSection}>
            <Text style={styles.menuTitle}>Preferences</Text>
            
            <View style={styles.menuItem}>
              <View style={styles.menuIconBg}>
                <Bell size={20} color={Colors.primary} />
              </View>
              <Text style={styles.menuText}>Notifications</Text>
              <Switch value={true} trackColor={{ false: Colors.border, true: Colors.primary }} />
            </View>

            <View style={styles.menuItem}>
              <View style={[styles.menuIconBg, { backgroundColor: "#EEF2FF" }]}>
                <Moon size={20} color={Colors.tint} />
              </View>
              <Text style={styles.menuText}>Dark Mode</Text>
              <Switch value={false} trackColor={{ false: Colors.border, true: Colors.primary }} />
            </View>
          </View>

          <View style={styles.menuSection}>
            <Text style={styles.menuTitle}>Support</Text>
            
            <TouchableOpacity style={styles.menuItem}>
              <View style={[styles.menuIconBg, { backgroundColor: "#F0FDF4" }]}>
                <HelpCircle size={20} color={Colors.success} />
              </View>
              <Text style={styles.menuText}>Help Center</Text>
              <ChevronRight size={20} color={Colors.textSecondary} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={[styles.menuIconBg, { backgroundColor: "#FEF2F2" }]}>
                <LogOut size={20} color={Colors.error} />
              </View>
              <Text style={[styles.menuText, { color: Colors.error }]}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.text,
  },
  content: {
    paddingBottom: 40,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: Colors.surface,
  },
  editBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: Colors.primary,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: Colors.surface,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
  statsContainer: {
    flexDirection: "row",
    backgroundColor: Colors.surface,
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statDivider: {
    width: 1,
    height: "100%",
    backgroundColor: Colors.border,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  menuSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  menuIconBg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#EEF2FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: Colors.text,
  },
});
