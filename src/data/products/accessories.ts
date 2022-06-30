import acc1 from "../../images/acc1.webp";
import acc2 from "../../images/acc2.webp";
import acc3 from "../../images/acc3.webp";
// src/images/monitor1.webp

const computers = [
  {
    id: "acc1",
    name: "Keyboard",
    description:'Backlit / Wired / Brightness Dial',
    category: "accessories",
    price: 50,
    image: acc1,
    gallery: [acc1],
  },
  {
    id: "acc2",
    name: "Headset",
    description:'105dB / Omnidirectional Mic / USB Powered',
    category: "accessories",
    price: 25,
    image: acc2,
    gallery: [acc2],
  },
  {
    id: "acc3",
    name: "Mousepad",
    description:'Low Friction Surface / Anti-Slip Base',
    category: "accessories",
    price: 10,
    image: acc3,
    gallery: [acc3],
  },
];

export default computers;
