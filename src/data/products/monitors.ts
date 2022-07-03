import monitor1 from "../../images/monitor1.webp";
import monitor2 from "../../images/monitor2.webp";
import monitor3 from "../../images/monitor3.webp";

const monitors = [
  {
    id: "asus-monitor",
    name: "Asus Monitor",
    description: '24" / 1920x1080 / 165Hz / 0.5ms',
    category: "monitors",
    price: 200,
    quantity: 1,
    image: monitor1,
    gallery: [monitor1],
  },
  {
    id: "msi-monitor",
    name: "MSI Monitor",
    description: '31.5" / 2560x1440 / 165Hz / 1ms',
    category: "monitors",
    price: 250,
    quantity: 1,
    image: monitor2,
    gallery: [monitor2],
  },
  {
    id: "gigabyte-monitor",
    name: "Gigabyte Monitor",
    description: '34" / 3440x1440 / 144Hz / 1ms',
    category: "monitors",
    price: 300,
    quantity: 1,
    image: monitor3,
    gallery: [monitor3],
  },
];

export default monitors;
