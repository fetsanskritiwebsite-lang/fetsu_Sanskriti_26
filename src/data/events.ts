import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";
import gallery4 from "@/assets/gallery-4.webp";
import gallery5 from "@/assets/gallery-5.webp";
import gallery6 from "@/assets/gallery-6.webp";
import gallery7 from "@/assets/gallery-7.webp";
import gallery8 from "@/assets/gallery-8.webp";

export interface EventData {
  slug: string;
  title: string;
  subtitle: string;
  img: string;
  type: string;
  guidelines: string[];
  prelims: { date: string; time: string; venue: string };
  finals: { date: string; time: string; venue: string };
  coordinators: { name: string; phone: string }[];
  deadline: string;
}

export const events: EventData[] = [
  {
    slug: "nrityanjali",
    title: "Nrityanjali",
    subtitle: "Classical Dance Competition",
    img: gallery1,
    type: "ON-STAGE",
    guidelines: [
      "This is a classical dance competition.",
      "This is an **ON-STAGE** event.",
      "Registration is open to any individual/team, college or otherwise.",
      "Solo or group performances (max 6 members) are allowed.",
      "Participants must bring their own music track in a pen drive.",
      "Time limit during **prelims** is 5+1 minutes, inclusive of stage setup.",
      "Time limit during **finals** is 8+1 minutes, inclusive of stage setup.",
      "Marks will be **deducted** for exceeding the time limit.",
      "Vulgarity in any form will lead to immediate disqualification.",
    ],
    prelims: { date: "1st April, 2025", time: "10:00AM", venue: "Jadavpur Campus" },
    finals: { date: "4th April, 2025", time: "2:00PM", venue: "Jadavpur Campus" },
    coordinators: [
      { name: "Rahul Sen", phone: "+91 9876543210" },
      { name: "Priya Das", phone: "+91 9123456789" },
    ],
    deadline: "25th March, 2025",
  },
  {
    slug: "swarangan",
    title: "Swarangan",
    subtitle: "Battle of Bands",
    img: gallery2,
    type: "ON-STAGE",
    guidelines: [
      "This is a band competition open to all genres.",
      "This is an **ON-STAGE** event.",
      "Each band must have 3-8 members.",
      "Bands must bring their own instruments (drums & amps provided).",
      "Time limit during **prelims** is 10+2 minutes, inclusive of sound check.",
      "Time limit during **finals** is 15+2 minutes, inclusive of sound check.",
      "Backing tracks will not be allowed.",
      "Marks will be **deducted** for exceeding the time limit.",
    ],
    prelims: { date: "2nd April, 2025", time: "11:00AM", venue: "Jadavpur Campus" },
    finals: { date: "5th April, 2025", time: "4:00PM", venue: "Jadavpur Campus" },
    coordinators: [
      { name: "Arnab Ghosh", phone: "+91 9876012345" },
      { name: "Sneha Roy", phone: "+91 9012345678" },
    ],
    deadline: "25th March, 2025",
  },
  {
    slug: "rangmanch",
    title: "Rangmanch",
    subtitle: "Street Theatre",
    img: gallery3,
    type: "ON-STAGE",
    guidelines: [
      "This is a street theatre / nukkad natak competition.",
      "This is an **ON-STAGE** event.",
      "Each team must have 8-20 members.",
      "No use of electrical equipment or props beyond basic costumes.",
      "Time limit is 20+2 minutes.",
      "Performances must be in Hindi, Bengali, or English.",
      "Vulgarity or offensive content will lead to disqualification.",
    ],
    prelims: { date: "1st April, 2025", time: "2:00PM", venue: "Jadavpur Campus" },
    finals: { date: "4th April, 2025", time: "11:00AM", venue: "Jadavpur Campus" },
    coordinators: [
      { name: "Sourav Mitra", phone: "+91 9234567890" },
      { name: "Aditi Banerjee", phone: "+91 9345678901" },
    ],
    deadline: "25th March, 2025",
  },
  {
    slug: "chitrakala",
    title: "Chitrakala",
    subtitle: "Art & Painting",
    img: gallery4,
    type: "OFF-STAGE",
    guidelines: [
      "This is an art and painting competition.",
      "This is an **OFF-STAGE** event.",
      "Individual participation only.",
      "All art materials must be brought by the participant.",
      "Drawing sheets will be provided by the organizers.",
      "Time limit is 2 hours.",
      "Theme will be revealed on the spot.",
      "Digital art is not allowed.",
    ],
    prelims: { date: "2nd April, 2025", time: "10:00AM", venue: "Jadavpur Campus" },
    finals: { date: "2nd April, 2025", time: "10:00AM", venue: "Jadavpur Campus" },
    coordinators: [
      { name: "Tanya Saha", phone: "+91 9456789012" },
      { name: "Debanjan Pal", phone: "+91 9567890123" },
    ],
    deadline: "25th March, 2025",
  },
  {
    slug: "kavyanjali",
    title: "Kavyanjali",
    subtitle: "Poetry Slam",
    img: gallery5,
    type: "ON-STAGE",
    guidelines: [
      "This is a poetry slam competition.",
      "This is an **ON-STAGE** event.",
      "Individual participation only.",
      "Poems can be in Hindi, Bengali, English, or Urdu.",
      "Time limit is 3+1 minutes per poem.",
      "Props and background music are not allowed.",
      "Content must be original; plagiarism will lead to disqualification.",
      "Marks will be **deducted** for exceeding the time limit.",
    ],
    prelims: { date: "3rd April, 2025", time: "11:00AM", venue: "Jadavpur Campus" },
    finals: { date: "5th April, 2025", time: "1:00PM", venue: "Jadavpur Campus" },
    coordinators: [
      { name: "Isha Mukherjee", phone: "+91 9678901234" },
      { name: "Arjun Nandi", phone: "+91 9789012345" },
    ],
    deadline: "25th March, 2025",
  },
  {
    slug: "tarang",
    title: "Tarang",
    subtitle: "Folk Dance Face-Off",
    img: gallery6,
    type: "ON-STAGE",
    guidelines: [
      "This is a folk dance competition.",
      "This is an **ON-STAGE** event.",
      "Group performances only (4-12 members).",
      "Any folk dance form from India is accepted.",
      "Participants must bring their own music track.",
      "Time limit during **prelims** is 6+1 minutes.",
      "Time limit during **finals** is 10+1 minutes.",
      "Costumes and props relevant to the dance form are encouraged.",
    ],
    prelims: { date: "1st April, 2025", time: "3:00PM", venue: "Jadavpur Campus" },
    finals: { date: "5th April, 2025", time: "11:00AM", venue: "Jadavpur Campus" },
    coordinators: [
      { name: "Rohini Dey", phone: "+91 7501609409" },
      { name: "Anish Ray", phone: "+91 6297569664" },
    ],
    deadline: "25th March, 2025",
  },
  {
    slug: "sargam",
    title: "Sargam",
    subtitle: "Solo Singing",
    img: gallery7,
    type: "ON-STAGE",
    guidelines: [
      "This is a solo singing competition.",
      "This is an **ON-STAGE** event.",
      "Registration is open to any individual, college or otherwise.",
      "One singer and one instrument (played by another person) is allowed.",
      "Competitors are expected to bring their own instruments.",
      "Backing tracks will not be allowed.",
      "Time limit during **prelims** is 5+1 minutes, inclusive of sound check.",
      "Time limit during **finals** is 7+1 minutes, inclusive of sound check.",
      "It is **compulsory** to sing two songs during the finals.",
      "Marks will be **deducted** for exceeding the time limit.",
    ],
    prelims: { date: "1st April, 2025", time: "10:00AM", venue: "Jadavpur Campus" },
    finals: { date: "4th April, 2025", time: "12:00PM", venue: "Jadavpur Campus" },
    coordinators: [
      { name: "Brohman", phone: "+91 7501609409" },
      { name: "Anish Ray", phone: "+91 6297569664" },
    ],
    deadline: "25th March, 2025",
  },
  {
    slug: "abhinay",
    title: "Abhinay",
    subtitle: "Mono Acting",
    img: gallery8,
    type: "ON-STAGE",
    guidelines: [
      "This is a mono acting competition.",
      "This is an **ON-STAGE** event.",
      "Individual participation only.",
      "Performances can be in Hindi, Bengali, or English.",
      "Minimal props are allowed (must be carried by participant).",
      "Time limit during **prelims** is 5+1 minutes.",
      "Time limit during **finals** is 8+1 minutes.",
      "Vulgarity or offensive content will lead to disqualification.",
      "Marks will be **deducted** for exceeding the time limit.",
    ],
    prelims: { date: "2nd April, 2025", time: "1:00PM", venue: "Jadavpur Campus" },
    finals: { date: "5th April, 2025", time: "2:00PM", venue: "Jadavpur Campus" },
    coordinators: [
      { name: "Sayan Bhatt", phone: "+91 9890123456" },
      { name: "Riya Chatterjee", phone: "+91 9901234567" },
    ],
    deadline: "25th March, 2025",
  },
];
