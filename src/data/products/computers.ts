import lightning1 from "../../images/lightning1.webp";
import lightning2 from "../../images/lightning2.webp";
import lightning3 from "../../images/lightning3.webp";

const computers = [
  {
    id: "lightning1",
    name: "Lightning 1",
    description: "Ryzen 5 / Nvidia RTX / 8GB RAM / 1TB SSD",
    category: "computers",
    price: 1000,
    quantity: 1,
    image: lightning1,
    gallery: [lightning1],
  },
  {
    id: "lightning2",
    name: "Lightning 2",
    description: "Ryzen 7 / Nvidia GTX / 16GB RAM / 2TB SSD",
    category: "computers",
    price: 1500,
    quantity: 1,
    image: lightning2,
    gallery: [lightning2],
  },
  {
    id: "lightning3",
    name: "Lightning 3",
    description: "Ryzen 9 / Nvidia Titan / 32GB RAM / 3TB SSD",
    category: "computers",
    price: 2000,
    quantity: 1,
    image: lightning3,
    gallery: [lightning3],
  },
];

export default computers;
