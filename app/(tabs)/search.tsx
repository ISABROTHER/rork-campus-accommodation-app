import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Search as SearchIcon, SlidersHorizontal, MapPin } from "lucide-react-native";
import { Colors } from "@/constants/colors";

const CATEGORIES = ["All", "Dorm", "Apartment", "Studio", "Shared House"];
const RECENT_SEARCHES = ["University Campus", "Downtown", "Science Park", "Medical Center"];

export default function SearchScreen() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.title}>Search</Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <SearchIcon size={20} color={Colors.textSecondary} />
            <TextInput
              style={styles.input}
              placeholder="Where do you want to live?"
              placeholderTextColor={Colors.textSecondary}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <TouchableOpacity style={styles.filterButton} onPress={() => router.push("/modal")}>
            <SlidersHorizontal size={20} color={Colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContent}>
            {CATEGORIES.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryChip,
                  activeCategory === category && styles.categoryChipActive,
                ]}
                onPress={() => setActiveCategory(category)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    activeCategory === category && styles.categoryTextActive,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <ScrollView style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Searches</Text>
            {RECENT_SEARCHES.map((search, index) => (
              <TouchableOpacity key={index} style={styles.recentSearchItem}>
                <View style={styles.recentIconContainer}>
                  <SearchIcon size={16} color={Colors.textSecondary} />
                </View>
                <Text style={styles.recentText}>{search}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Popular Areas</Text>
            <View style={styles.popularGrid}>
              {[1, 2, 3, 4].map((i) => (
                <TouchableOpacity key={i} style={styles.areaCard}>
                  <View style={styles.areaIcon}>
                    <MapPin size={24} color={Colors.primary} />
                  </View>
                  <Text style={styles.areaName}>Area {i}</Text>
                  <Text style={styles.areaCount}>124 places</Text>
                </TouchableOpacity>
              ))}
            </View>
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
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.text,
  },
  searchContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    paddingHorizontal: 12,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    gap: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.text,
  },
  filterButton: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  categoriesContent: {
    paddingHorizontal: 20,
    gap: 8,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  categoryChipActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.textSecondary,
  },
  categoryTextActive: {
    color: "#fff",
  },
  content: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: 12,
  },
  recentSearchItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    gap: 12,
  },
  recentIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  recentText: {
    fontSize: 16,
    color: Colors.text,
  },
  popularGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  areaCard: {
    width: "48%",
    backgroundColor: Colors.surface,
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  areaIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#EEF2FF", // Light indigo
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  areaName: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: 4,
  },
  areaCount: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
});
