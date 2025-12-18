import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, StatusBar } from "react-native";
import { router } from "expo-router";
import { Star, Filter } from "lucide-react-native";
import { Colors } from "@/constants/colors";
import { ACCOMMODATIONS } from "@/mocks/accommodations";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good Morning</Text>
            <Text style={styles.title}>Find your campus home</Text>
          </View>
          <TouchableOpacity 
            style={styles.filterButton} 
            onPress={() => router.push("/modal")}
            activeOpacity={0.7}
          >
            <Filter size={20} color={Colors.text} />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Places</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          {ACCOMMODATIONS.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card} activeOpacity={0.9}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.priceTag}>
                  <Text style={styles.priceText}>${item.price}</Text>
                  <Text style={styles.periodText}>/{item.period}</Text>
                </View>
                {item.isSuperhost && (
                  <View style={styles.superhostTag}>
                    <Text style={styles.superhostText}>SUPERHOST</Text>
                  </View>
                )}
              </View>
              
              <View style={styles.cardContent}>
                <View style={styles.row}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <View style={styles.ratingContainer}>
                    <Star size={14} color={Colors.warning} fill={Colors.warning} />
                    <Text style={styles.rating}>{item.rating}</Text>
                  </View>
                </View>
                
                <Text style={styles.type}>{item.type} • {item.distance}</Text>
                
                <View style={styles.tagsContainer}>
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <View key={index} style={styles.tag}>
                      <Text style={styles.tagText}>{tag}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </TouchableOpacity>
          ))}
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
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 4,
    fontWeight: "500",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.text,
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.surface,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.text,
  },
  seeAll: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "600",
  },
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  imageContainer: {
    height: 200,
    width: "100%",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  priceTag: {
    position: "absolute",
    bottom: 12,
    right: 12,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "baseline",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
  },
  periodText: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginLeft: 2,
  },
  superhostTag: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  superhostText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  cardContent: {
    padding: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.text,
    flex: 1,
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.background,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    gap: 4,
  },
  rating: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.text,
  },
  type: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    backgroundColor: Colors.background,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  tagText: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: "500",
  },
});