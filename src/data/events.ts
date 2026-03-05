import raagnjosh from "@/assets/Sanskriti'26 Event Posters/Raag ‘n’ josh.png";
import jamit from "@/assets/Sanskriti'26 Event Posters/Jam it.png";
import tarana from "@/assets/Sanskriti'26 Event Posters/Tarana.png";
import rendition from "@/assets/Sanskriti'26 Event Posters/Rendition.png";
import graffitiwars from "@/assets/Sanskriti'26 Event Posters/Graffiti Wars.png";
import origami from "@/assets/Sanskriti'26 Event Posters/Origami.png";
import sketchophile from "@/assets/Sanskriti'26 Event Posters/Sketchophile.png";
import rangoli from "@/assets/Sanskriti'26 Event Posters/Rangoli.png";
import tshirtfaceposter from "@/assets/Sanskriti'26 Event Posters/Face, Tshirt & Poster.png";
import natyalay from "@/assets/Sanskriti'26 Event Posters/Natyalaya.png";
import shootatsight from "@/assets/Sanskriti'26 Event Posters/Shoot at Sight.png";
import inquizzitive from "@/assets/Sanskriti'26 Event Posters/Inquizzitive.png";
import thinktwice from "@/assets/Sanskriti'26 Event Posters/Think Twice.png";
import beatbox from "@/assets/Sanskriti'26 Event Posters/Beat Box.png";
import rapbattle from "@/assets/Sanskriti'26 Event Posters/Rap battle.png";
import creativewriting from "@/assets/Sanskriti'26 Event Posters/Creative writing.png";
import guitarwars from "@/assets/Sanskriti'26 Event Posters/Guiter wars.png";
import instrumental from "@/assets/Sanskriti'26 Event Posters/Instrumentals.png";
import dancebout from "@/assets/Sanskriti'26 Event Posters/Dance bout.png";
import studentperformance from "@/assets/Sanskriti'26 Event Posters/Students’ Performance.png";
import moonwalk from "@/assets/Sanskriti'26 Event Posters/Moonwalk.png";
import ghungrooz from "@/assets/Sanskriti'26 Event Posters/Ghoongrooz.png";

import gallery1 from "@/assets/gallery-1.webp";
import gallery3 from "@/assets/gallery-3.webp";
import gallery4 from "@/assets/gallery-4.webp";
import gallery6 from "@/assets/gallery-6.webp";
import gallery7 from "@/assets/gallery-7.webp";

export interface EventData {
  slug: string;
  title: string;
  subtitle: string;
  img: string;
  type: string;
  guidelines: string[];
  prelims?: { date: string; time: string; venue: string };
  finals?: { date: string; time: string; venue: string };
  dates?: { date: string; time: string; venue: string };
  coordinators: { name: string; phone: string }[];
  deadline: string;
  reglink: string;
}

export const events: EventData[] = [
  {
    slug: "raag-n-josh",
    title: "Raag N' Josh",
    subtitle: "Eastern Band Competition",
    img: raagnjosh,
    type: "Eastern, Band",
    guidelines: [
      "This is a Eastern Band Competition",
      "This is an ON STAGE competition",
      "Open to any eastern band, college or otherwise",
      "Time limit during prelims is 8+2 minutes, inclusive of sound check",
      "8 bands will qualify to the finals",
      "Time limit during finals is 12+3 minutes, inclusive of sound check",
      "Marks will be deducted for exceeding the time limit",
      "Equipment provided will be: Drums, Adequate Microphones, Plug-ins and sufficient sound requirements",
      "Bands will have to bring their own musical instruments. However, programmed music is not allowed",
      "In the finals, extra credit will be there for original compositions",
      "Each participant has to perform a minimum of two songs during the finals"
    ],
    prelims: { date: "29 March 2026", time: "11:00 a.m.", venue: "OAT" },
    finals: { date: "2 April 2026", time: "12:00 p.m.", venue: "OAT" },
    coordinators: [
      { name: "Dhruba", phone: "+91 86176 15996" },
      { name: "Satyam", phone: "+91 87973 49109" },
      { name: "Arghya", phone: "+91 97480 95612" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLScipbqcS67Uj4v0jJjPa6y7k8I9N6cAAmnKqXdj8EURXBISag/viewform?usp=header",
  },
  {
    slug: "jam-it",
    title: "Jam It",
    subtitle: "Western Band Competetion",
    img: jamit,
    type: "Western, Band",
    guidelines: [
      "This is a Western Band Competition",
      "This is an ON STAGE competition",
      "Open to any eastern band, college or otherwise",
      "Time limit during prelims is 8+2 minutes, inclusive of sound check",
      "8 bands will qualify to the finals",
      "Time limit during finals is 12+3 minutes, inclusive of sound check",
      "Marks will be deducted for exceeding the time limit",
      "Equipment provided will be: Drums, Adequate Microphones, Plug-ins and sufficient sound requirements",
      "Bands will have to bring their own musical instruments. However, programmed music is not allowed",
      "In the finals, extra credit will be there for original compositions",
      "Each participant has to perform a minimum of two songs during the finals"
    ],
    prelims: { date: "29 March 2026", time: "4:30 p.m.", venue: "OAT" },
    finals: { date: "3 April 2026", time: "12:00 p.m.", venue: "OAT" },
    coordinators: [
      { name: "Shreshta", phone: "+91 83899 45831" },
      { name: "Soumyabrata", phone: "+91 96411 69044" },
      { name: "Anish", phone: "+91 93305 83597" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLScN02fQMls8stYP8BVLzn1osmv9cmjJkhafsS5tmrZpwdoR3A/viewform?usp=header",
  },
  {
    slug: "tarana",
    title: "Tarana",
    subtitle: "Solo Classical Vocal Competition",
    img: tarana,
    type: "Solo Classical Vocal",
    guidelines: [
      "This is a Solo Classical Vocal Competition",
      "This is an ON STAGE competition",
      "Open to any individual/team, college or otherwise",
      "One singer and one instrument (might be played by another person is allowed)",
      "Competitors are expected to bring their own instruments. Backing tracks will not be allowed",
      "Time limit during prelims is 5+1 minutes, inclusive of sound check, or 2 songs, whichever is less",
      "8 individuals/teams will qualify to the finals",
      "Time limit during finals is 7+1 minutes, inclusive of sound check. It is compulsory to sing two songs during the finals",
      "Marks will be deducted for exceeding the time limit",
    ],
    prelims: { date: "30 March 2026", time: "10:00 a.m.", venue: "OAT" },
    finals: { date: "2 April 2026", time: "10:00 a.m.", venue: "OAT" },
    coordinators: [
      { name: "Agniva", phone: "+91 97481 82727" },
      { name: "Imran", phone: "+91 73194 11841" },
      { name: "Abhash", phone: "+91 94313 21040" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLSfl5hYhaxWm1ll62qDbmIJJQ5AzdmPEWT1Q7eiMHyssfX74ng/viewform?usp=preview",
  },
  {
    slug: "rendition",
    title: "Rendition",
    subtitle: "Western Solo Vocals",
    img: rendition,
    type: "Western Solo Vocals",
    guidelines: [
      "This is a Western Solo Vocals Competition",
      "This is an ON STAGE competition",
      "Open to any individual/team, college or otherwise",
      "One singer and one instrument (might be played by another person is allowed)",
      "Competitors are expected to bring their own instruments. Backing tracks will not be allowed",
      "Time limit during prelims is 5+1 minutes, inclusive of sound check, or 2 songs, whichever is less",
      "8 individuals/teams will qualify to the finals",
      "Time limit during finals is 7+1 minutes, inclusive of sound check. It is compulsory to sing two songs during the finals",
      "Marks will be deducted for exceeding the time limit",
    ],
    prelims: { date: "1 April 2026", time: "10:00 a.m.", venue: "OAT" },
    finals: { date: "3 April 2026", time: "10:00 a.m.", venue: "OAT" },
    coordinators: [
      { name: "Rohit", phone: "+91 99073 16214" },
      { name: "Rajdeep", phone: "+91 87777 94921" },
      { name: "Adrija", phone: "+91 74398 49303" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLSfXQqP486kNYRfOnxa_8nxUmZuo8LvALGTlBWAn6MbxtawmmA/viewform?usp=header",
  },
  {
    slug: "moonwalk",
    title: "Moonwalk",
    subtitle: "Western Dance Competition",
    img: moonwalk,
    type: "TBA",
    guidelines: [
      "This is an ON-STAGE competition",
      "This is a WESTERN dance competition in three categories:Solo/Duet/Group",
      "Registration for MOONWALK is open to any individual or group, college or otherwise",
      "Time limit for solo category is 4+1 minutes, from empty stage to empty stage",
      "Time limit for duet category is 4+1 minutes, from empty stage to empty stage",
      "Time limit for group category is 6+2 minutes, from empty stage to empty stage",
      "Marks will be deducted for exceeding the time limit",
      "There is no limit on the maximum number of participants in a group",
      "Accessories, costumes have to be arranged by participants",
      "The performance music has to be brought by the participants in a PenDrive",
      "The choice of song/rap should be age appropriate and should not contain vulgar lyrics"
    ],
    dates: { date: "31 March 2026", time: "2:20 p.m.", venue: "OAT" },
    coordinators: [
      { name: "Sabyasachi", phone: "+91 93397 44580" },
      { name: "Digonto", phone: "+91 93304 07585" },
      { name: "Adrija", phone: "+91 98317 87232" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLSdES2KYqbG35a3hlpBHalDxzKAEX8fKRdag2gCWCJf4JpphuA/viewform?usp=header",
  },
  {
    slug: "ghungrooz",
    title: "Ghungrooz",
    subtitle: "Eastern Dance Competition",
    img: ghungrooz,
    type: "TBA",
    guidelines: [
      "This is an ON-STAGE competition",
      "This is an EASTERN dance competition in two categories-(Solo/ Duet) or Group",
      "Open to any individual or group, college or otherwise",
      "Time limit for solo/duet category is 4+1 minutes, from empty stage to empty stage",
      "Time limit for group category is 6+2 minutes, from empty stage to empty stage",
      "Marks will be deducted for exceeding the time limit",
      "There is no limit on the maximum number of participants in a group",
      "Accessories, costumes have to be arranged by participants",
      "The performance music has to be brought by the participants in a CD/ PenDrive",
      "The choice of song/rap should be age appropriate and should not contain vulgar lyrics"
    ],
    dates: { date: "31 March 2026", time: "10:00 a.m.", venue: "OAT" },
    coordinators: [
      { name: "Imran", phone: "+91 73194 11841" },
      { name: "Bhumika", phone: "+91 90073 43083" },
      { name: "Adrita", phone: "+91 77973 10990" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLScAMMY7r4gMztWAE_hjaQTEYOwojP2U00M-iZbTUj9XNxzB1A/viewform?usp=header",
  },
  {
    slug: "graffiti-wars",
    title: "Graffiti Wars",
    subtitle: "Graffiti/Wall-art Competition",
    img: graffitiwars,
    type: "Graffiti/Wall-art Competition",
    guidelines: [
      "This is a graffiti/wall-art competition",
      "Each team can have a maximum of 5 members",
      "An area of a wall will be designated and the participants will be given a time of 7 days (30/03/2026 to 05/04/2026) to complete their graffiti",
      "Wall reservations will be on a first-come, first-served basis",
      "Teams are expected to carry their own paints, brushes and other necessary materials"
    ],
    //prelims: { date: "TBA", time: "TBA", venue: "TBA" },
    dates: { date: "30 March 2026", time: "12:00 p.m.", venue: "OAT" },
    coordinators: [
      { name: "Akansha", phone: "+91 74394 40355" },
      { name: "Shubhamita", phone: "+91 90730 62840" },
      { name: "Krish", phone: "+91 78660 10143" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLSeRpxEaiGsZ1trLG-wmUZdqAr5JHgEcZvGoJGS0NQM3R7wFDA/viewform?usp=header",
  },
  {
    slug: "origami",
    title: "Origami",
    subtitle: "Origami/Paper folding craft Competition",
    img: origami,
    type: "TBA",
    guidelines: [
      "This is an OFF STAGE event",
      "Participants have to make a minimum of 4 figures",
      "Participants have to complete the task within the whole day",
      "The basic chart paper colour will be provided - Red, Green, Blue, Yellow, Pink",
      "Theme will be given on day of the event"
    ],
    //prelims: { date: "TBA", time: "TBA", venue: "TBA" },
    dates: { date: "31 March 2026", time: "1:00 p.m.", venue: "OAT" },
    coordinators: [
      { name: "Habibul", phone: "+91 86098 36953" },
      { name: "Arka", phone: "+91 75012 39609" },
      { name: "Agniva", phone: "+91 97481 82727" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLSdg4YU4wgg6OdW50QSfkcBljzX-AFKLJoMfQNmOJ1oCPV38RQ/viewform?usp=header",
  },
  {
    slug: "sketchophile",
    title: "Sketchophile",
    subtitle: "Drawing Competition",
    img: sketchophile,
    type: "Drawing Competition",
    guidelines: [
      "Drawing competition open for all college students or otherwise",
      "Theme or topic to be revealed prior to the event",
      "Each participant to be allotted a time of 2 hours",
      "Participants are expected to bring their own equipments , paints, paint brushes pencil etc.",
      "Participants are allowed to use any artform or genre of painting according to their convenience as long it stays relevant to the mentioned theme",
      "Judge’s choices to be exhibited inside Jadavpur Campus",
      "Winner to be decided by the judge and his/her choice stands undisputed"
    ],
    //prelims: { date: "TBA", time: "TBA", venue: "TBA" },
    dates: { date: "31 March 2026", time: "12:00 p.m.", venue: "Teqip 101" },
    coordinators: [
      { name: "Sougata", phone: "+91 90512 98879" },
      { name: "Adarsha", phone: "+91 90625 56145" },
      { name: "Agniva", phone: "+91 97481 82727" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLSe6lR2GV--Yybc1Kiq_U38TFVMA5bG0QyuTWoWrQxIZJdalUA/viewform?usp=preview",
  },
  {
    slug: "rangoli",
    title: "Rangoli",
    subtitle: "Rangoli Making Competition",
    img: rangoli,
    type: "TBA",
    guidelines: [
      "This is an OFF-STAGE competition",
      "Rangoli Event Teams should comprise of 2 members",
      "The contestants are expected to bring their own colors and brushes",
      "The contestants are expected to bring any material that they may need",
      "No material will be supplied at the venue",
      "The topic will be given an hour before the competition"
    ],
    //prelims: { date: "TBA", time: "TBA", venue: "TBA" },
    dates: { date: "31 March 2026", time: "12:00 p.m", venue: "OAT" },
    coordinators: [
      { name: "Rohit", phone: "+91 99073 16214" },
      { name: "Devjit", phone: "+91 73843 26257" },
      { name: "Dipesh", phone: "+91 70290 14262" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLSed5WEB8nDFK7V4w6lzAKVR51eWDu2hUC4KsHUBrwpgYt86Cg/viewform?usp=header",
  },
  {
    slug: "t-shirt-face-poster-painting",
    title: "T-shirt, face, Poster Painting",
    subtitle: "T-shirt, Face & Poster Painting Competition (Separate Events)",
    img: tshirtfaceposter,
    type: "TBA",
    guidelines: [
      "These are three different OFF-STAGE competition",
      "Registration for this event is open only to college students",
      "The colleges may send any number of contestants",
      "The team must comprise of an artist and a model (For Face painting.) The paper/T-shirt will be supplied at the venue",
      "The topic will be announced an hour before the competition",
      "The contestants will not be allowed to refer to any material for any sort of help",
      "The decision of the judges is final and binding"
    ],
    //prelims: { date: "TBA", time: "TBA", venue: "TBA" },
    dates: { date: "31 March 2026", time: "12:00 p.m", venue: "OAT" },
    coordinators: [
      { name: "Akansha", phone: "+91 74394 40355" },
      { name: "Farhan", phone: "+91 89811 66626" },
      { name: "Adarsh", phone: "+91 90625 56145" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLSf1lUbNqwk7Fe-CnXseQyZiMBUMzqoIbz8jt23xBQe7VJQlTA/viewform?usp=header",
  },

  {
    slug: "natyalay",
    title: "Natyalay",
    subtitle: "Drama Competition",
    img: natyalay,
    type: "Drama Competition",
    guidelines: [
      "Open to any group/team, college or otherwise",
      "This is an ON-STAGE competition",
      "Languages allowed for dramas are Bengali, Hindi and English",
      "The competition will be of 2 rounds",
      "In the 1st round, the team has to put up a drama on any topic as per as the team wish",
      "The number of members in each team is not limited to any particular number",
      "The time limit for each team is 15(+5 or -5) minutes, including stage setup",
      "In the 2nd round, the teams will be given a common topic by the judges on which they have to put up a short play",
      "The time duration for the 2nd round is 5-7 minutes"
    ],
    dates: { date: "30 March 2026", time: "4:00 p.m.", venue: "OAT" },
    coordinators: [
      { name: "Sreejoy", phone: "+91 62918 77411" },
      { name: "Nilimesh", phone: "+91 93399 35383" },
      { name: "Tanmay", phone: "+91 85094 00180" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLScQGtvJqbyw2IPzpuAuPYsrfvvJbCgU41DfkNdR3r8CMnsatw/viewform?usp=header",
  },
  {
    slug: "shoot-at-sight",
    title: "Shoot At Sight",
    subtitle: "Photography Competition",
    img: shootatsight,
    type: "Photography Competition",
    guidelines: [
      "This is a spot photography contest. Participants must bring their own equipments (mobile photography allowed)",
      "Theme of the contest will be informed 1 day prior to the event. Each participant can submit a maximum of 3 entries",
      "File Format: JPEG / JPG ONLY | Aspect ratio: 3:2, 4:3",
      "File Size: 300 DPI, not less than 2 MB and not more than 5 MB each",
      "At least 2000 pixels at the longest edge, no upper pixel limit",
      "Name, signature, water marks, border, company name etc are not to be affixed on the pictures or the captions. Such entries will be disqualified",
      "Post-processing is limited to adjustments in brightness, contrast, highlights, shadows, color correction, conversion to grayscale",
      "Participants may be asked to supply the RAW images (or original images in case of photographs clicked using phones), and failing to do so will lead to immediate disqualification from the contest"
    ],
    dates: { date: "29 March 2026", time: "12:00 p.m.", venue: "OAT" },
    coordinators: [
      //{ name: "Anindya Raj", phone: "" },
      { name: "Priyanshu", phone: "+91 90517 76956" },
      { name: "Srijan", phone: "+91 89189 92739" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLSe10xOqMUCRCVigC6Bakzt5NWCl7ZjtRJPwbGPpZRe1a1hMzw/viewform?usp=header",
  },
  {
    slug: "inquizzitive",
    title: "Inquizzitive",
    subtitle: "Quiz Competition",
    img: inquizzitive,
    type: "Quiz Competition",
    guidelines: [
      "General quiz open to all College students",
      "Maximum of three members per team",
      "Cross-college teams allowed",
      "Highest scoring 8 teams from prelims to qualify for the finals",
      "Bounce-pounce/other modalities to be announced during the quiz",
      "The Quiz Master's decisions are final and binding"
    ],
    dates: { date: "1 April 2026", time: "12:00 p.m.", venue: "Teqip 101" },
    coordinators: [
      { name: "Arijit", phone: "+91 70037 93158" },
      { name: "Soumydeep", phone: "+91 91637 46705" },
      { name: "Tanmay", phone: "+91 85094 00180" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLSc72-3voe2bCmUlX00ZAxrHtTP9EtNcuM5e1KMtN6r8L4Ui5w/viewform?usp=header",
  },
  {
    slug: "think-twice",
    title: "Think Twice",
    subtitle: "Debate Competition",
    img: thinktwice,
    type: "Debate Competition",
    guidelines: [
      "There will be only 10 teams for the event, registration is on a first-come, first-served basis",
      "The team size is 2, one member speaking for the topic and another member against it",
      "The time allotted per speaker is 4 + 1 minutes",
      "Exceeding the time limit will result in penalty",
      "The speaker who sets the motion first will be allowed to wrap up at the end of the debate",
      "The participants will not be allowed to read out from any material but will be allowed to carry plain papers to jot down any points if required."
    ],
    dates: { date: "29 March 2026", time: "12:00 p.m.", venue: "Teqip 101" },
    coordinators: [
      { name: "Souvik", phone: "+91 70292 73580" },
      { name: "Saswata", phone: "+91 92395 25957" },
      { name: "Pritam", phone: "+91 98327 79410" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLSdFwmj-3DMICnLVBfaiqmYthtWqAuxeozS8O2-0ocApgGmY5w/viewform?usp=preview",
  },
  {
    slug: "beat-box",
    title: "Beat-box",
    subtitle: "Beatboxing Competition",
    img: beatbox,
    type: "Beatboxing Competition",
    guidelines: [
      "This is a beat-boxing competition",
      "Registration is open to any individual, college or otherwise",
      "This is an ON-STAGE competition",
      "Backing tracks will not be allowed",
      "1 min showcase round for all registered participants",
      "Battles will be among the top 8 participants",
      "1 min : 2 rounds except finals",
      "1.5 mins : 2 rounds in the finals",
      "The judging panel's decision will be final and irrevocable"
    ],
    dates: { date: "1 April 2026", time: "2:00 p.m.", venue: "OAT" },
    coordinators: [
      { name: "Farhan", phone: "+91 89811 66626" },
      { name: "Habibul", phone: "+91 86098 36953" },
      { name: "Tanishq", phone: "+91 76019 80812" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLSfhnxXWfNzK9FCFa-ugLuSTj1P5G6QxTvtv2IvhPlWVFTUNjw/viewform?usp=header",
  },
  {
    slug: "rap-battle",
    title: "Rap Battle",
    subtitle: "Rap Competition",
    img: rapbattle,
    type: "Rap Competition",
    guidelines: [
      "Registration for Rap-Battle is open to any individual, college or otherwise",
      "This is an ON-STAGE competition. Backing tracks will be allowed",
      "Raps should be written by the emcee. Immediate disqualification incase of ghostwriting",
      "The organizers will appoint a timekeeper, who will be provided with a stopwatch. He/She will be responsible for indicating the end of each round",
      "The clock starts from the beginning of the first line spoken by the competitor",
      "For the preliminary round of competition each emcee will be given one round each for one (1) minute, for the semi-final round each emcee rhymes twice for one (1) minute per round, and for the final round each emcee rhymes twice for one (1) minute",
      "In case of a tie, another round will be provided to break the tie",
      "Marks will be deducted for exceeding the time limit",
      "The lyrics have to be submitted before the performance. The choice of song/rap should be age appropriate and should not contain vulgar lyrics"
    ],
    dates: { date: "1 April 2026", time: "3:30 p.m.", venue: "OAT" },
    coordinators: [
      { name: "Dipesh", phone: "+91 70290 14262" },
      { name: "Dipranil", phone: "+91 82500 98684" },
      { name: "Tanishq", phone: "+91 76019 80812" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLSc6YNJtKtoEKj_zXsujsYtYxnVm2cTzkDzBYMOPRv17ehsySQ/viewform?usp=header",
  },
  {
    slug: "creative-writing",
    title: "Creative Writing",
    subtitle: "Creative Writing Competition",
    img: creativewriting,
    type: "Creative Writing",
    guidelines: [
      "This is an OFF-STAGE competition",
      "This event has 2 categories, namely: Prose and Poetry.",
      "Contestants may choose to write in English, Bengali or Hindi",
      "Open only to college students. The colleges may send any number of contestants",
      "Contestants are expected to bring their own pen, pencils etc.",
      "The paper will be supplied at the venue",
      "The topic will be announced on spot before the competition",
      "The contestants will not be allowed to refer to any material for any sort of help"
    ],
    dates: { date: "30 March 2026", time: "12:00 p.m.", venue: "Teqip 101" },
    coordinators: [
      { name: "Shubhamita", phone: "+91 90730 62840" },
      { name: "Adarsha", phone: "+91 90625 56145" },
      { name: "Habibul", phone: "+91 86098 36953" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLSd7eiJowSGjrSa8Wk9pqlLvu-KVIQpzmHrkpdCmgsQ2CFyj0A/viewform?usp=header",
  },
  {
    slug: "guitar-wars",
    title: "Guitar Wars",
    subtitle: "Solo Guitar Playing Competition",
    img: guitarwars,
    type: "Solo Guitar Playing Competition",
    guidelines: [
      "This is an ON-STAGE competition",
      "This is a WESTERN GUITAR SOLO PLAYING Competition",
      "Time Limit is 2 and half minutes(excluding sound check)",
      "Open registration for all participants",
      "A live backing track (genre dependent upon the judge) will be provided Participants will have to do an impromptu performance",
      "The Participants have to bring their own Guitar"
    ],
    dates: { date: "4 April 2026", time: "10:00 a.m.", venue: "OAT" },
    coordinators: [
      { name: "Ayush", phone: "+91 93393 15184" },
      { name: "Sahil", phone: "+91 62972 48847" },
      { name: "Puja", phone: "+91 79800 91693" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLSeIQkEYuvGveh2zJYLeBvaF45PW5oDhEgeeySRBkjvG_ddukg/viewform?usp=header",
  },
  {
    slug: "instrumental",
    title: "Instrumental",
    subtitle: "Solo Music Instrument Competition",
    img: instrumental,
    type: "TBA",
    guidelines: [
      "This is an instrumental solo competition",
      "Open to any individual college or otherwise",
      "This is an ON-STAGE competition",
      "One participant with one set of instrument is allowed",
      "Competitors are expected to bring their own instrument",
      "Time limit is 5 minutes, inclusive of sound check",
      "Marks will be deducted for exceeding the time limit"
    ],
    dates: { date: "4 April 2026", time: "1:00 p.m.", venue: "OAT" },
    coordinators: [
      { name: "Agniva", phone: "+91 97481 82727" },
      { name: "Roni", phone: "+91 90021 58533" },
      { name: "Krish", phone: "+91 78660 10143" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLSeQ8FPdEZ20zGh5kld-EibLjPe1tadMDBDBO7yqXr2LPZ5IJw/viewform?usp=header",
  },
  {
    slug: "dance-bout",
    title: "Dance Bout",
    subtitle: "Street Dance Competition",
    img: dancebout,
    type: "TBA",
    guidelines: [
      "ONE ON ONE ALL STYLE BATTLE",
      "Music to be provided by crew members and varies between different genres (for example hip hop, house, funk, dubstep)",
      "Dance moves should be age appropriate and that moves should not be distasteful or crude",
      "Dancers are not restricted from performing any move or style but they must be aware that it is their own responsibility to ensure that they do not perform dangerous moves that could injure themselves or others",
      "Street dance should be a mix of styles like Popping, Bboying, House Dance, Wacking/Punking, Hip Hop Dance, Krumping, Stepping/Gumboots etc.",
      "Round 1:- Qualification is done by CYPHER(8 people will be selected after this round), The decision of the judge is final and no one can object to it",
      " Round 2:- We will have one on one battle till we get our final winner. Organizing committee reserves the right to make changes to these rules"
    ],
    dates: { date: "1 April 2026", time: "5:00 p.m.", venue: "OAT" },
    coordinators: [
      { name: "Manav", phone: "+91 90647 92800" },
      { name: "Sirshendu", phone: "+91 74397 36206" },
      { name: "Neha", phone: "+91 74500 88680" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLScp6njXFwYccm7wQpAmjRClqvvcLIk3GX-ahWUSHNL81Lwgrw/viewform?usp=header",
  },
  {
    slug: "student-performance",
    title: "Student Performance",
    subtitle: "Jadavpur Students Talent Show Competition",
    img: studentperformance,
    type: "TBA",
    guidelines: [
      "Only open to Jadavpur University Students",
      "Choice of song/rap must be age-appropriate and should not be offensive or vulgar",
      "Dance Performance time should be 4 minutes",
      "Solo Vocal Performance time should be 4 minutes",
      "Band Performance time should be 7 minutes(performance) + 1 minute(setup)"
    ],
    dates: { date: "30 March 2026", time: "6:30 p.m.", venue: "OAT" },
    coordinators: [
      { name: "Dipesh", phone: "+91 70290 14262" },
      { name: "Shreshta", phone: "+91 83899 45831" },
      { name: "Agniva", phone: "+91 97481 82727" }
    ],
    deadline: "TBA",
    reglink: "https://docs.google.com/forms/d/e/1FAIpQLSesMRzFgOVjPolTvDcO1Eja5yKcln3gojAPg-HcrVbvEcD-UQ/viewform?usp=preview",
  }
];
