import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";
import { Heart, Star, MapPin } from "lucide-react-native";
import { Colors } from "@/constants/colors";
import { ACCOMMODATIONS } from "@/mocks/accommodations";

export default function SavedScreen() {
  // Mock saved items (just taking the first 3 for demo)
  const savedItems = ACCOMMODATIONS.slice(0, 3);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.title}>Saved</Text>
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          {savedItems.length === 0 ? (
            <View style={styles.emptyState}>
              <Heart size={64} color={Colors.border} />
              <Text style={styles.emptyTitle}>No saved places yet</Text>
              <Text style={styles.emptyText}>Start exploring to find your dream home</Text>
            </View>
          ) : (
            savedItems.map((item) => (
              <TouchableOpacity key={item.id} style={styles.card} activeOpacity={0.9}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.cardContent}>
                  <View style={styles.row}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <TouchableOpacity>
                      <Heart size={20} color={Colors.error} fill={Colors.error} />
                    </TouchableOpacity>
                  </View>
                  
                  <View style={styles.infoRow}>
                    <Star size={14} color={Colors.warning} fill={Colors.warning} />
                    <Text style={styles.rating}>{item.rating} ({item.reviews})</Text>
                    <Text style={styles.dot}>•</Text>
                    <Text style={styles.type}>{item.type}</Text>
                  </View>

                  <View style={styles.locationRow}>
                    <MapPin size={14} color={Colors.textSecondary} />
                    <Text style={styles.distance}>{item.distance} from campus</Text>
                  </View>

                  <View style={styles.priceContainer}>
                    <Text style={styles.price}>${item.price}</Text>
                    <Text style={styles.period}>/{item.period}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))
          )}
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
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
  },
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    marginBottom: 16,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    height: 120,
  },
  image: {
    width: 120,
    height: "100%",
  },
  cardContent: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.text,
    flex: 1,
    marginRight: 8,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  rating: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.text,
  },
  dot: {
    color: Colors.textSecondary,
    marginHorizontal: 4,
  },
  type: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  distance: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
  },
  period: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
});
