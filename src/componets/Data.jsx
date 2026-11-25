import milk from "../assets/images/milk.png";
import bread from "../assets/images/white-bread.png";
import papai from "../assets/images/papai.png";
import potato from "../assets/images/potato.png";
import shrimp from "../assets/images/shrimp.png";
import fish from "../assets/images/fish.png";
import strawberry from "../assets/images/strawberry.png";
import sugar from "../assets/images/sugar.png";
import flour from "../assets/images/flour.png";
import oil from "../assets/images/cooking-oil.png";
import mango from "../assets/images/mango.png";
import meat from "../assets/images/meat.png";
import grapes from "../assets/images/grapes.png";
import greek from "../assets/images/greek.png";

const Data = [
  {
    id: 1,
    name: "Broadways Bread 500g",
    price: 60,
    originalPrice: 105,
    expiresIn: "3 hrs",
    savePercent: 40,
    dukaName: "Kabere's Mini Mart",
    category: "Baked Goods",
    image: bread,
    description:
      "Soft, fresh white sliced loaf baked locally. Best enjoyed toasted or as sandwiches today before its best-by window closes.",
    storageTip:
      "Keep sealed in a cool, dry place or freeze to extend freshness.",
  },
  {
    id: 2,
    name: "Unga Wa Dola 1kg",
    price: 60,
    originalPrice: 100,
    expiresIn: "12 hrs",
    savePercent: 40,
    dukaName: "Iminza's Groceries",
    category: "Grains & Flour",
    image: flour,
    description:
      "Fortified sifted maize meal ideal for soft, hearty ugali. Packaging is intact and factory-sealed—marked down for quick shelf turnover.",
    storageTip: "Store in an airtight container away from moisture.",
  },
  {
    id: 3,
    name: "Pwani Fresh Oil 500ml",
    price: 60,
    originalPrice: 100,
    expiresIn: "12 hrs",
    savePercent: 40,
    dukaName: "Kivuli Retail",
    category: "Cooking Oils",
    image: oil,
    description:
      "Pure vegetable cooking oil fortified with Vitamin A. Unopened 500ml bottle perfect for everyday frying and stews.",
    storageTip: "Keep tightly capped away from direct sunlight.",
  },
  {
    id: 4,
    name: "Cowbell Milk ",
    price: 40,
    originalPrice: 400,
    expiresIn: "12 hrs",
    savePercent: 90,
    dukaName: "SuperDuka",
    category: "Dairy",
    image: milk,
    description:
      "Creamy instant full-cream milk powder sachet. Dissolves easily in warm water for tea, porridge, or baking.",
    storageTip: "Reseal tightly after opening and keep dry.",
  },
  {
    id: 5,
    name: "Papai",
    price: 40,
    originalPrice: 400,
    expiresIn: "12 hrs",
    savePercent: 90,
    dukaName: "Kibera Fresh",
    category: "Fresh Fruits",
    image: papai,
    description:
      "Sweet, tree-ripened red papaya packed with vitamins. Perfectly ripe and ready to slice and eat immediately.",
    storageTip: "Refrigerate once cut and consume within 24 hours.",
  },
  {
    id: 6,
    name: "Potataoes",
    price: 40,
    originalPrice: 65,
    expiresIn: "1 day",
    savePercent: 40,
    dukaName: "Kivuli Fresh",
    category: "Fresh Vegetables",
    image: potato,
    description:
      "Farm-fresh Kenyan potatoes ideal for chips, mukimo, or hearty beef stew. Sorted and clean for immediate cooking.",
    storageTip: "Keep in a cool, dark, well-ventilated basket.",
  },
  {
    id: 7,
    name: "Shrimp",
    price: 40,
    originalPrice: 100,
    expiresIn: "1 day",
    savePercent: 60,
    dukaName: "Iminza's Butchery",
    category: "Seafood & Meat",
    image: shrimp,
    description:
      "Chilled, cleaned coastal shrimp kept under strict cold-chain storage. Cook today for quick garlic butter prawns or stir-fry.",
    storageTip: "Keep refrigerated below 4°C and cook thoroughly today.",
  },
  {
    id: 8,
    name: "StrawBerry",
    price: 40,
    originalPrice: 400,
    expiresIn: "1 day",
    savePercent: 90,
    dukaName: "Adema's Groceries",
    category: "Fresh Fruits",
    image: strawberry,
    description:
      "Juicy, ripe red strawberries great for smoothies, fruit salads, or snacking. Hand-inspected and packed fresh.",
    storageTip: "Rinse just before eating and keep chilled.",
  },
  {
    id: 9,
    name: "Sugar",
    price: 50,
    originalPrice: 120,
    expiresIn: "1 day",
    savePercent: 58,
    dukaName: "Kabere's Mini Mart",
    category: "Pantry Staples",
    image: sugar,
    description:
      "Fine brown table sugar packed for daily household tea and baking. Clean, dry sack clearance deal.",
    storageTip: "Store in a sealed dry jar.",
  },
  {
    id: 10,
    name: "Baking Flour",
    price: 55,
    originalPrice: 110,
    expiresIn: "1 day",
    savePercent: 50,
    dukaName: "Zack's Retail",
    category: "Grains & Flour",
    image: flour,
    description:
      "All-purpose home baking wheat flour perfect for soft chapatis, mandazi, and pancakes.",
    storageTip: "Keep sealed in a cool, dry cupboard.",
  },
  {
    id: 11,
    name: "Ripe Mango",
    price: 30,
    originalPrice: 70,
    expiresIn: "1 day",
    savePercent: 57,
    dukaName: "Kabere Fresh",
    category: "Fresh Fruits",
    image: mango,
    description:
      "Fragrant, juicy ripe apple mango at peak sweetness. Ready to peel, slice, or blend into fresh juice.",
    storageTip: "Keep refrigerated to slow further ripening.",
  },
  {
    id: 12,
    name: "Greek Yoghurt",
    price: 180,
    originalPrice: 350,
    expiresIn: "1 day",
    savePercent: 48,
    dukaName: "Adema Butchery",
    category: "Dairy",
    image: greek,
    description:
      "Sweet.Fresh yoghurt for your brekafast or a sunny day.Can be eaten with anything",
    storageTip: "Refrigerate immediately and cook within 24 hours.",
  },
  {
    id: 13,
    name: "Fresh Sea Fish",
    price: 180,
    originalPrice: 350,
    expiresIn: "1 day",
    savePercent: 48,
    dukaName: "Adema Butchery",
    category: "Seafood & Meat",
    image: fish,
    description:
      "Fresh Tuna Fish straight from Indian Ocean to your Kitchen.Perfect for that hot afternoon sea food cravings.",
    storageTip: "Refrigerate immediately and cook within 24 hours.",
  },
  {
    id: 14,
    name: "Fresh Beef Cut",
    price: 180,
    originalPrice: 350,
    expiresIn: "1 day",
    savePercent: 48,
    dukaName: "Adema Butchery",
    category: "Seafood & Meat",
    image: meat,
    description:
      "Tender, fresh boneless beef cut kept chilled in display counter. Ideal for karanga, stew, or grilling tonight.",
    storageTip: "Refrigerate immediately and cook within 24 hours.",
  },
  {
    id: 15,
    name: "Grapes",
    price: 180,
    originalPrice: 350,
    expiresIn: "1 day",
    savePercent: 48,
    dukaName: "Iminza's Fruitstand",
    category: "Fresh Fruits",
    image: grapes,
    description:
      "Fresh grapes for eating or making wine .Come grab yours and enjpy it with ur family and friends.",
    storageTip: "Refrigerate immediately and cook within 24 hours.",
  },
];

export default Data;
