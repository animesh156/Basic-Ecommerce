import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

// npx ts-node-dev src/seeds/seedProducts.ts  - command


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Your dummy products data
const products = [
  {
    image:
      "https://res.cloudinary.com/dcnqzrwkb/image/upload/v1763730164/c60277281d2290eadf074962b6dcc325f00baf7f_q75knk.png",
    type: "Snack",
    name: "Fresh organic villa farm lomon 500gm pack",
    price: 28.85,
    originalPrice: 32.8,
    company: "NestFood",
    rating: 4.0,
    badgeText: "Hot",
    badgeColor: "#F74B81",
  },
  {
    image:
      "https://res.cloudinary.com/dcnqzrwkb/image/upload/v1763730236/75465ca3a71205c24a54ac70f28c312cbeabe6fc_opi8mv.png",
    type: "Hodo Foods",
    name: "Best snakes with hazel nut pack 200gm",
    price: 52.85,
    originalPrice: 55.8,
    company: "Stouffer",
    rating: 3.5,
    badgeText: "Sale",
    badgeColor: "#67BCEE",
  },
  {
    image:
      "https://res.cloudinary.com/dcnqzrwkb/image/upload/v1763730286/adacd42858637fe216460f8f1ad1bd520a5747d6_zaucps.png",
    type: "Snack",
    name: "Organic fresh venila farm watermelon 5kg",
    price: 48.85,
    originalPrice: 52.8,
    company: "StarKist",
    rating: 4.0,
    badgeText: "New",
    badgeColor: "#3BB77E",
  },
  {
    image:
      "https://res.cloudinary.com/dcnqzrwkb/image/upload/v1763730329/cbfdbc9c7762cc10616463cb041a91a0ee13a6e3_bsdou7.png",
    type: "Vegetables",
    name: "Fresh organic apple 1kg simla marming",
    price: 17.85,
    originalPrice: 19.8,
    company: "NestFood",
    rating: 4.0,
    badgeText: "",
    badgeColor: "",
  },
  {
    image:
      "https://res.cloudinary.com/dcnqzrwkb/image/upload/v1763730373/5e54ca86f58be985a7ea1082b7da9261aef20407_j1cryh.jpg",
    type: "Vegetables",
    name: "Blue Diamond Almonds Lightly Salted Vegetables",
    price: 23.85,
    originalPrice: 25.8,
    company: "NestFood",
    rating: 4.0,
    badgeText: "-14%",
    badgeColor: "#F59758",
  },
  {
    image:
      "https://res.cloudinary.com/dcnqzrwkb/image/upload/v1763730423/3211afa8d825ab6f2393cbee26cbfa9704be33e0_qoagou.jpg",
    type: "Hodo Foods",
    name: "Chobani Complete Vanilla Greek Yogurt",
    price: 54.85,
    originalPrice: 55.8,
    company: "NestFood",
    rating: 4.0,
    badgeText: "",
    badgeColor: "",
  },
  {
    image:
      "https://res.cloudinary.com/dcnqzrwkb/image/upload/v1763730476/16ad20bce5083f69f997f82bfa2833467ae09a72_xqhb5e.jpg",
    type: "Meats",
    name: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
    price: 32.85,
    originalPrice: 33.8,
    company: "NestFood",
    rating: 4.0,
    badgeText: "",
    badgeColor: "",
  },
  {
    image:
      "https://res.cloudinary.com/dcnqzrwkb/image/upload/v1763730508/1e5d057a8455b355e1a13381a9e8f0c87159743c_s8z3x8.jpg",
    type: "Snack",
    name: "Encore Seafoods Stuffed Alaskan Salmon",
    price: 35.85,
    originalPrice: 37.8,
    company: "NestFood",
    rating: 4.0,
    badgeText: "Sale",
    badgeColor: "#67BCEE",
  },
  {
    image:
      "https://res.cloudinary.com/dcnqzrwkb/image/upload/v1763730556/6239b4205639a8617b6a5e70cb9daf26aed2ac95_htfw6k.jpg",
    type: "Coffes",
    name: "Gorton’s Beer Battered Fish Fillets with soft paper",
    price: 23.85,
    originalPrice: 25.8,
    company: "Old El Paso",
    rating: 4.0,
    badgeText: "Hot",
    badgeColor: "#F74B81",
  },
  {
    image:
      "https://res.cloudinary.com/dcnqzrwkb/image/upload/v1763730476/16ad20bce5083f69f997f82bfa2833467ae09a72_xqhb5e.jpg",
    type: "Cream",
    name: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
    price: 22.85,
    originalPrice: 24.8,
    company: "Tyson",
    rating: 2.0,
    badgeText: "",
    badgeColor: "",
  },
];

// Seeder Function
async function seedProducts() {
  try {
    console.log("Seeding product items...");

    // Create table if not exists
    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        image TEXT,
        type VARCHAR(255),
        name TEXT,
        price NUMERIC(10,2),
        original_price NUMERIC(10,2),
        company VARCHAR(255),
        rating NUMERIC(3,1),
        badge_text VARCHAR(50),
        badge_color VARCHAR(20),
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Insert each product
    for (const p of products) {
      await pool.query(
        `INSERT INTO products 
        (image, type, name, price, original_price, company, rating, badge_text, badge_color)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
        `,
        [
          p.image,
          p.type,
          p.name,
          p.price,
          p.originalPrice,
          p.company,
          p.rating,
          p.badgeText || null,
          p.badgeColor || null,
        ]
      );
    }

    console.log("Products seeded successfully.");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding products:", err);
    process.exit(1);
  }
}

seedProducts();
