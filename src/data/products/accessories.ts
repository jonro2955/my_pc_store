import acc1 from "../../images/acc1.webp";
import acc2 from "../../images/acc2.webp";
import acc3 from "../../images/acc3.webp";
// src/images/monitor1.webp

const computers = [
  {
    id: "keyboard",
    name: "Keyboard",
    description:'Backlit / Brightness Dial',
    category: "accessories",
    price: 50,
    image: acc1,
    gallery: [acc1],
  },
  {
    id: "headset",
    name: "Headset",
    description:'105dB / Omnidirectional Mic',
    category: "accessories",
    price: 25,
    image: acc2,
    gallery: [acc2],
  },
  {
    id: "mousepad",
    name: "Mousepad",
    description:'Low Friction / Anti-Slip Base',
    category: "accessories",
    price: 10,
    image: acc3,
    gallery: [acc3],
  },
];

export default computers;
