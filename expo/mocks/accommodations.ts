export interface Accommodation {
  id: string;
  title: string;
  type: "Dorm" | "Apartment" | "Studio" | "Shared House";
  price: number;
  period: "week" | "month" | "semester";
  rating: number;
  reviews: number;
  distance: string; // distance to campus
  image: string;
  tags: string[];
  isSuperhost?: boolean;
}

export const ACCOMMODATIONS: Accommodation[] = [
  {
    id: "1",
    title: "Modern Student Hub",
    type: "Dorm",
    price: 250,
    period: "week",
    rating: 4.8,
    reviews: 124,
    distance: "0.2 miles",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000&auto=format&fit=crop",
    tags: ["WiFi", "Gym", "Study Room"],
    isSuperhost: true,
  },
  {
    id: "2",
    title: "Cozy Loft near Library",
    type: "Apartment",
    price: 1200,
    period: "month",
    rating: 4.5,
    reviews: 89,
    distance: "0.5 miles",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop",
    tags: ["Private Bath", "Kitchen", "Quiet"],
  },
  {
    id: "3",
    title: "Sunny Studio with View",
    type: "Studio",
    price: 1100,
    period: "month",
    rating: 4.9,
    reviews: 56,
    distance: "1.2 miles",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000&auto=format&fit=crop",
    tags: ["Balcony", "Pet Friendly", "AC"],
    isSuperhost: true,
  },
  {
    id: "4",
    title: "The Green House Shared",
    type: "Shared House",
    price: 180,
    period: "week",
    rating: 4.2,
    reviews: 210,
    distance: "0.8 miles",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1000&auto=format&fit=crop",
    tags: ["Garden", "Social", "Bike Storage"],
  },
  {
    id: "5",
    title: "Luxury Campus Suites",
    type: "Apartment",
    price: 1500,
    period: "month",
    rating: 4.7,
    reviews: 42,
    distance: "0.1 miles",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop",
    tags: ["Pool", "24/7 Security", "Furnished"],
    isSuperhost: true,
  },
  {
    id: "6",
    title: "Budget Friendly Dorm",
    type: "Dorm",
    price: 150,
    period: "week",
    rating: 3.9,
    reviews: 315,
    distance: "1.5 miles",
    image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1000&auto=format&fit=crop",
    tags: ["Shared Kitchen", "Laundry", "Events"],
  },
];
