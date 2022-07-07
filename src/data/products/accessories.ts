import acc1 from "../../images/acc1.webp";
import acc1a from "../../images/acc1a.webp";
import acc1b from "../../images/acc1b.webp";

import acc2 from "../../images/acc2.webp";
import acc2a from "../../images/acc2a.png";
import acc2b from "../../images/acc2b.png";

import acc3 from "../../images/acc3.webp";
import acc3a from "../../images/acc3a.png";
import acc3b from "../../images/acc3b.png";

// src/images/monitor1.webp

const computers = [
  {
    id: "keyboard",
    name: "Keyboard",
    description: "Backlit / Brightness Dial",
    category: "accessories",
    price: 50,
    quantity: 1,
    image: acc1,
    gallery: [acc1, acc1a, acc1b],
  },
  {
    id: "headset",
    name: "Headset",
    description: "105dB / Omnidirectional Mic",
    category: "accessories",
    price: 25,
    quantity: 1,
    image: acc2,
    gallery: [acc2, acc2a, acc2b],
  },
  {
    id: "mousepad",
    name: "Mousepad",
    description: "Low Friction / Anti-Slip Base",
    category: "accessories",
    price: 10,
    quantity: 1,
    image: acc3,
    gallery: [acc3, acc3a, acc3b],
  },
];

export default computers;
