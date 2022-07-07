import lightning1 from "../../images/lightning1.webp";
import lightning1a from "../../images/lightning1a.webp";
import lightning1b from "../../images/lightning1b.webp";
import lightning2 from "../../images/lightning2.webp";
import lightning2a from "../../images/lightning2a.webp";
import lightning2b from "../../images/lightning2b.webp";
import lightning3 from "../../images/lightning3.webp";
import lightning3a from "../../images/lightning3a.webp";
import lightning3b from "../../images/lightning3b.webp";

const computers = [
  {
    id: "lightning1",
    name: "Lightning 1",
    description: "AMD Ryzen 5 / Nvidia RTX / 8GB RAM / 1TB SSD",
    category: "computers",
    price: 1000,
    quantity: 1,
    image: lightning1,
    gallery: [lightning1, lightning1a, lightning1b],
  },
  {
    id: "lightning2",
    name: "Lightning 2",
    description: "AMD Ryzen 7 / Nvidia GTX / 16GB RAM / 2TB SSD",
    category: "computers",
    price: 1500,
    quantity: 1,
    image: lightning2,
    gallery: [lightning2, lightning2a, lightning2b],
  },
  {
    id: "lightning3",
    name: "Lightning 3",
    description: "AMD Ryzen 9 / Nvidia Titan / 32GB RAM / 3TB SSD",
    category: "computers",
    price: 2000,
    quantity: 1,
    image: lightning3,
    gallery: [lightning3, lightning3a, lightning3b],
  },
];

export default computers;
