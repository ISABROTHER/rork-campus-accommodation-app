import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView, Switch } from "react-native";
import { X } from "lucide-react-native";
import { Colors } from "@/constants/colors";
import React, { useState } from "react";

export default function ModalScreen() {
  // Mock filter states
  const [filters, setFilters] = useState({
    priceRange: [0, 2000],
    instantBook: false,
    superhost: false,
    pets: false,
  });

  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
          <X size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Filters</Text>
        <TouchableOpacity onPress={() => console.log("Reset")}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price Range</Text>
          <Text style={styles.priceDescription}>Monthly rent</Text>
          {/* Slider placeholder */}
          <View style={styles.sliderPlaceholder}>
            <Text style={styles.sliderText}>$0 - $2000+</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Type of place</Text>
          <View style={styles.checkboxGroup}>
             {["Entire place", "Private room", "Shared room"].map((item, index) => (
                <View key={index} style={styles.checkboxRow}>
                  <Text style={styles.checkboxLabel}>{item}</Text>
                  <View style={styles.checkbox} />
                </View>
             ))}
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Amenities</Text>
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Superhost</Text>
            <Switch 
              value={filters.superhost} 
              onValueChange={(v) => setFilters({...filters, superhost: v})}
              trackColor={{ false: Colors.border, true: Colors.primary }}
            />
          </View>
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Pets allowed</Text>
            <Switch 
              value={filters.pets} 
              onValueChange={(v) => setFilters({...filters, pets: v})}
              trackColor={{ false: Colors.border, true: Colors.primary }}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.showButton} onPress={() => router.back()}>
          <Text style={styles.showButtonText}>Show 124 homes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text,
  },
  closeButton: {
    padding: 4,
  },
  resetText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.textSecondary,
    textDecorationLine: "underline",
  },
  content: {
    padding: 20,
  },
  section: {
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 8,
  },
  priceDescription: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 16,
  },
  sliderPlaceholder: {
    height: 48,
    backgroundColor: Colors.background,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  sliderText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 24,
  },
  checkboxGroup: {
    gap: 16,
  },
  checkboxRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkboxLabel: {
    fontSize: 16,
    color: Colors.text,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.border,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  switchLabel: {
    fontSize: 16,
    color: Colors.text,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    backgroundColor: Colors.surface,
    paddingBottom: Platform.OS === "ios" ? 40 : 20,
  },
  showButton: {
    backgroundColor: Colors.primary,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  showButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
