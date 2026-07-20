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
    icon: Phone, // apna existing icon import
    title: "CALL US",
    text1: "8-800-10-500,",
    text2: "8-800-10-500",
    stacked: true, // extra gap wale do lines
  },
  {
    id: 2,
    icon: MapPin,
    title: "LOCATION",
    text1: "121 Rock Street, 21 Avenue, New York,",
    text2: "NY 92103-9000",
    stacked: false, // natural wrap, ek hi paragraph
  },
  {
    id: 3,
    icon: Clock,
    title: "HOURS",
    text1: "Mon – Fri …… 11 am – 8 pm, Sat,",
    text2: "Sun …… 6 am – 8 pm",
    stacked: false, // natural wrap
  },
];