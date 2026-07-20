import contactImage from "../assets/contact/contact.png";

import {
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

export const contactData = {
  title: "Get In Touch With us",

  image: contactImage,

  buttonText: "SEND MESSAGE",
};

export const contactInfo = [
  {
    id: 1,
    icon: Phone,
    title: "CALL US",
    text1: "8-800-10-500,",
    text2: "8-800-10-500",
  },

  {
    id: 2,
    icon: MapPin,
    title: "LOCATION",
    text1: "121 Rock Street, 21 Avenue,",
    text2: "New York, NY 92103-9000",
  },

  {
    id: 3,
    icon: Clock3,
    title: "HOURS",
    text1: "Mon – Fri ...... 11 am – 8 pm",
    text2: "Sat, Sun ...... 6 am – 8 pm",
  },
];