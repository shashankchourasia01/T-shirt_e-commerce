export const categories = [
  { id: 1, name: "TRENDING", slug: "trending" },
  { id: 2, name: "OVERSIZED", slug: "oversized" },
  { id: 3, name: "SHIRTS", slug: "shirts" },
  { id: 4, name: "POLOS", slug: "polos" },
  { id: 5, name: "GRAPHIC TEES", slug: "graphic-tees" }
];

export const productsByCategory = {
  trending: [
    {
      id: 101,
      name: "Naruto Shippuden: Curs...",
      type: "BAGGY FIT",
      price: 2499,
      originalPrice: 3499,
      discount: 28,
      image: "/images/allimg1.jpg",
      tag: "BAGGYFIT"
    },
    {
      id: 102,
      name: "TSS Originals: Neutral",
      type: "OVERSIZED",
      price: 1799,
      originalPrice: 2599,
      discount: 30,
      image: "/images/allimg2.jpg",
      tag: "OVERSIZED"
    },
    {
      id: 103,
      name: "Men Low Top Sneakers",
      type: "SNEAKERS",
      price: 2499,
      originalPrice: 3999,
      discount: 37,
      image: "/images/allimg3.jpg",
      tag: "FOOTWEAR"
    },
    {
      id: 104,
      name: "Men Oversized Joggers",
      type: "BAGGY FIT",
      price: 1799,
      originalPrice: 2499,
      discount: 28,
      image: "/images/allimg4.jpg",
      tag: "BOTTOMS"
    },
    {
      id: 105,
      name: "TSS Originals: Kaal Chakra",
      type: "PREMIUM",
      price: 1999,
      originalPrice: 2999,
      discount: 33,
      image: "/images/allimg5.jpg",
      tag: "PREMIUM"
    },
    {
      id: 106,
      name: "TSS Originals: Indiso",
      type: "PREMIUM HEAVY",
      price: 2199,
      originalPrice: 3299,
      discount: 33,
      image: "/images/allimg5.jpg",
      tag: "PREMIUMHEAVY"
    }
  ],
  oversized: [
    {
      id: 201,
      name: "Super Oversized Tee",
      type: "SUPER OVERSIZED",
      price: 1899,
      originalPrice: 2799,
      discount: 32,
      image: "/images/new_arr1.avif",
      tag: "SUPEROVERSIZED"
    },
    {
      id: 202,
      name: "Drop Shoulder Tee",
      type: "OVERSIZED",
      price: 1599,
      originalPrice: 2299,
      discount: 30,
      image: "/images/new_arr2.avif",
      tag: "IFIT"
    },
    {
      id: 203,
      name: "Streetwear Oversized",
      type: "PREMIUM",
      price: 1999,
      originalPrice: 2899,
      discount: 31,
      image: "/images/new_arr3.avif",
      tag: "PREMIUM"
    },
    {
      id: 204,
      name: "Heavy Cotton Tee",
      type: "PREMIUM HEAVY",
      price: 2299,
      originalPrice: 3299,
      discount: 30,
      image: "/images/new_arr4.avif",
      tag: "PREMIUMHEAVY"
    },
    {
      id: 205,
      name: "Interlock Fabric Tee",
      type: "INTERLOCK",
      price: 1699,
      originalPrice: 2499,
      discount: 32,
      image: "/images/new_arr6.avif",
      tag: "INTERLOCKFABRIC"
    },
    {
      id: 206,
      name: "Gauge Fabric Tee",
      type: "GAUGE",
      price: 1799,
      originalPrice: 2599,
      discount: 30,
      image: "/images/new_arr6.avif",
      tag: "GAUGEFABRIC"
    }
  ],
  shirts: [
    {
      id: 301,
      name: "Casual Button Down",
      type: "REGULAR FIT",
      price: 1499,
      originalPrice: 2299,
      discount: 34,
      image: "/images/allimg1.jpg",
      tag: "CASUAL"
    },
    {
      id: 302,
      name: "Oversized Denim Shirt",
      type: "OVERSIZED",
      price: 2299,
      originalPrice: 3299,
      discount: 30,
      image: "/images/allimg2.jpg",
      tag: "DENIM"
    },
    {
      id: 303,
      name: "Linen Cotton Shirt",
      type: "RELAXED FIT",
      price: 1899,
      originalPrice: 2799,
      discount: 32,
      image: "/images/allimg3.jpg",
      tag: "LINEN"
    },
    {
      id: 304,
      name: "Printed Casual Shirt",
      type: "REGULAR FIT",
      price: 1299,
      originalPrice: 1999,
      discount: 35,
      image: "/images/allimg4.jpg",
      tag: "PRINTED"
    },
    {
      id: 305,
      name: "Flannel Check Shirt",
      type: "RELAXED FIT",
      price: 1699,
      originalPrice: 2499,
      discount: 32,
      image: "/images/allimg5.jpg",
      tag: "FLANNEL"
    },
    {
      id: 306,
      name: "Oversized Oxford",
      type: "OVERSIZED",
      price: 1999,
      originalPrice: 2999,
      discount: 33,
      image: "/images/allimg6.jpg",
      tag: "OXFORD"
    }
  ],
  polos: [
    {
      id: 401,
      name: "Classic Pique Polo",
      type: "REGULAR FIT",
      price: 999,
      originalPrice: 1599,
      discount: 37,
      image: "/images/new_arr1.avif",
      tag: "PIQUE"
    },
    {
      id: 402,
      name: "Oversized Knitted Polo",
      type: "OVERSIZED",
      price: 1799,
      originalPrice: 2599,
      discount: 30,
      image: "/images/new_arr2.avif",
      tag: "KNITTED"
    },
    {
      id: 403,
      name: "Sporty Performance Polo",
      type: "ATHLETIC FIT",
      price: 1299,
      originalPrice: 1999,
      discount: 35,
      image: "/images/new_arr3.avif",
      tag: "PERFORMANCE"
    },
    {
      id: 404,
      name: "Linen Blend Polo",
      type: "RELAXED FIT",
      price: 1499,
      originalPrice: 2199,
      discount: 31,
      image: "/images/new_arr4.avif",
      tag: "LINEN"
    },
    {
      id: 405,
      name: "Striped Cotton Polo",
      type: "REGULAR FIT",
      price: 1099,
      originalPrice: 1699,
      discount: 35,
      image: "/images/new_arr5.avif",
      tag: "STRIPED"
    },
    {
      id: 406,
      name: "Premium Heavy Polo",
      type: "PREMIUM",
      price: 1899,
      originalPrice: 2799,
      discount: 32,
      image: "/images/new_arr6.avif",
      tag: "PREMIUM"
    }
  ],
  "graphic-tees": [
    {
      id: 501,
      name: "Anime Graphic Tee",
      type: "OVERSIZED",
      price: 1199,
      originalPrice: 1799,
      discount: 33,
      image: "/images/allimg1.jpg",
      tag: "ANIME"
    },
    {
      id: 502,
      name: "Pop Culture Print",
      type: "REGULAR FIT",
      price: 999,
      originalPrice: 1499,
      discount: 33,
      image: "/images/allimg2.jpg",
      tag: "POP CULTURE"
    },
    {
      id: 503,
      name: "Abstract Art Tee",
      type: "BAGGY FIT",
      price: 1399,
      originalPrice: 1999,
      discount: 30,
      image: "/images/allimg3.jpg",
      tag: "ART"
    },
    {
      id: 504,
      name: "Retro Vintage Tee",
      type: "VINTAGE FIT",
      price: 1099,
      originalPrice: 1699,
      discount: 35,
      image: "/images/allimg4.jpg",
      tag: "VINTAGE"
    },
    {
      id: 505,
      name: "Music Band Tee",
      type: "OVERSIZED",
      price: 1299,
      originalPrice: 1899,
      discount: 31,
      image: "/images/allimg5.jpg",
      tag: "MUSIC"
    },
    {
      id: 506,
      name: "Street Art Graphic",
      type: "BAGGY FIT",
      price: 1499,
      originalPrice: 2199,
      discount: 31,
      image: "/images/allimg6.jpg",
      tag: "STREET"
    }
  ]
};