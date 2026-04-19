export const mockProducts = [
  {
    id: 1,
    name: "Batman Dark Knight Graphic Tee",
    price: 999,
    originalPrice: 1499,
    category: "Pop Culture",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/product-1.jpg"],
    isNew: true,
    isFeatured: true,
    discount: 33
  },
  {
    id: 2,
    name: "Deadpool Funny Quote T-Shirt",
    price: 899,
    originalPrice: 1299,
    category: "Comedy",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/product-2.jpg"],
    isNew: true,
    isFeatured: true,
    discount: 30
  },
  {
    id: 3,
    name: "Stranger Things 80s Vintage Tee",
    price: 1099,
    originalPrice: 1599,
    category: "TV Shows",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/product-3.jpg"],
    isNew: false,
    isFeatured: true,
    discount: 31
  }
];

export const categories = [
  { name: "Pop Culture", icon: "🎬", count: 24 },
  { name: "Marvel", icon: "🦸", count: 18 },
  { name: "Anime", icon: "🇯🇵", count: 32 },
  { name: "TV Shows", icon: "📺", count: 15 }
];