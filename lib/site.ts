export const site = {
  name: "Christian Students Network",
  shortName: "CSN",
  tagline: "Making disciples of Jesus Christ among students in Rwanda.",
  mission:
    "To make disciples of Jesus Christ and strengthen believers in the gospel.",
  vision:
    "To see every student — high school and university — come to the knowledge of the Savior Jesus Christ, grow in His love, and proclaim His supremacy to the ends of the earth.",
  email: "theupsidedown1517@gmail.com",
  phones: [
    { label: "0784 857 707", href: "tel:+250784857707" },
    { label: "0781 460 490", href: "tel:+250781460490" },
  ],
  joinPhone: { label: "+250 784 857 707", href: "tel:+250784857707" },
  location: "Kigali, Rwanda",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://christianstudentsnetwork.org",
  socials: {
    youtube:
      "https://www.youtube.com/results?search_query=The+Upside+Down+Show+Christian+Students+Network",
    whatsapp: "https://wa.me/250784857707",
  },
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const nav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      {
        label: "About Us",
        href: "/about",
        description: "Our mission, vision and strategy.",
      },
      {
        label: "Leadership",
        href: "/about/leadership",
        description: "The teams serving the ministry.",
      },
      {
        label: "Statement of Faith",
        href: "/about/statement-of-faith",
        description: "What we believe, from the Scriptures.",
      },
    ],
  },
  { label: "Campuses", href: "/campuses" },
  { label: "Visit", href: "/visit" },
  {
    label: "Ministries",
    href: "/bible-study",
    children: [
      {
        label: "Bible Study & Training",
        href: "/bible-study",
        description: "Weekly discipleship and Strengthen conferences.",
      },
      {
        label: "Online Ministry",
        href: "/online-ministry",
        description: "The Upside Down Show and digital resources.",
      },
      {
        label: "Charity",
        href: "/charity",
        description: "Serving one another and our communities.",
      },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Articles", href: "/articles" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const ministryExpressions = [
  {
    number: "01",
    title: "Weekly discipleship classes",
    description:
      "We equip students in high schools and universities across Rwanda by establishing weekly discipleship groups that foster spiritual growth, deeper biblical understanding, and Christ-centered living.",
    href: "/bible-study",
    image: "/images/bible-study-smallgroup.webp",
    imageAlt: "Students gathered around open Bibles in a small group",
  },
  {
    number: "02",
    title: "Strengthen Conferences",
    description:
      "We organize national, regional, and targeted conferences to present the gospel clearly, train students, and call them to deeper commitment to Christ.",
    href: "/events",
    image: "/images/training-conference.webp",
    imageAlt: "Students seated in a conference hall during a teaching session",
  },
  {
    number: "03",
    title: "Digital resources",
    description:
      "We expand gospel reach through weekly online sessions, long-form teaching on YouTube, short video content, and the translation and distribution of gospel materials in Kinyarwanda.",
    href: "/online-ministry",
    image: "/images/online-ministry.webp",
    imageAlt: "A large gathering of students at an online ministry recording",
  },
];

export const campuses = [
  {
    slug: "ur-cst",
    name: "UR-CST Reformed Bible Study",
    shortName: "UR-CST",
    type: "University",
    description:
      "A Reformed Bible study for students at the University of Rwanda's College of Science and Technology. Together we open the Scriptures, grow in biblical understanding, and learn to live for Christ on campus and beyond.",
    detail:
      "Students from across UR-CST gather weekly to study the Word, pray, and encourage one another in the gospel.",
    image: "/images/campus-urcst.webp",
    imageAlt: "Students seated together during a UR-CST Reformed Bible study session",
  },
  {
    slug: "mount-kigali",
    name: "Mount Kigali Discipleship Class",
    shortName: "Mount Kigali",
    type: "Discipleship class",
    description:
      "A discipleship class for students around Mount Kigali, walking through the Word together and learning what it means to follow Jesus in everyday life.",
    detail:
      "This class is built for students who want to go deeper: studying Scripture, asking honest questions, and growing in Christ-centred living.",
    image: "/images/campus-mount-kigali.webp",
    imageAlt: "Students studying the Bible together around a table with laptops",
  },
  {
    slug: "eto-nyamata",
    name: "ETO Nyamata High School",
    shortName: "ETO Nyamata",
    type: "High school",
    description:
      "A discipleship group reaching high school students at ETO Nyamata with the gospel and grounding them in God's Word during their formative years.",
    detail:
      "We meet students where they are, teaching the Bible clearly and helping them build a faith that lasts beyond school.",
    image: "/images/campus-eto.webp",
    imageAlt: "A large group of students standing together outside their school",
  },
];

export const events = [
  {
    day: "01",
    month: "Aug",
    dateLabel: "1 August",
    title: "The Mission of the Church Conference",
    kind: "Conference",
    description:
      "A gathering to consider God's mission for His church and to call students to a deeper commitment to Christ.",
    image: "/images/event-conference.webp",
    imageAlt: "Students gathered in a hall for a conference",
  },
  {
    day: "01",
    month: "Jul",
    dateLabel: "1 July",
    title: "APEBU Conference",
    kind: "Conference",
    description:
      "A conference for students and ministry partners, centred on the gospel and the strengthening of believers.",
    image: "/images/event-gathering.webp",
    imageAlt: "Students standing together outdoors after a conference",
  },
  {
    day: "Thu",
    month: "Weekly",
    dateLabel: "Every Thursday",
    title: "Thursday Bible Study",
    kind: "Weekly gathering",
    description:
      "Three sessions in Kicukiro – Mu Banyamakuru, with teaching, discussion and fellowship around the Word.",
    image: "/images/bible-study-smallgroup.webp",
    imageAlt: "Students gathered around Bibles for Thursday Bible study",
  },
];

export const thursdaySessions = [
  { session: "Session 1", time: "11:00 AM – 1:00 PM" },
  { session: "Session 2", time: "2:00 PM – 3:30 PM" },
  { session: "Session 3", time: "4:00 PM – 5:00 PM" },
];

export const gallery = [
  {
    src: "/images/gallery-01.webp",
    alt: "Students standing together in front of a church building",
    title: "After the gathering",
    category: "Fellowship",
  },
  {
    src: "/images/gallery-02.webp",
    alt: "Students grouped together after a fellowship gathering",
    title: "Fellowship family",
    category: "Fellowship",
  },
  {
    src: "/images/gallery-03.webp",
    alt: "Students standing together outside after a meeting",
    title: "Outside the meeting",
    category: "Fellowship",
  },
  {
    src: "/images/gallery-04.webp",
    alt: "Students in a courtyard during a fellowship gathering",
    title: "Courtyard conversations",
    category: "Fellowship",
  },
  {
    src: "/images/gallery-05.webp",
    alt: "Students gathered for a group photo",
    title: "Group photo",
    category: "Fellowship",
  },
  {
    src: "/images/gallery-06.webp",
    alt: "Students smiling together at a fellowship event",
    title: "Joy in the fellowship",
    category: "Fellowship",
  },
  {
    src: "/images/gallery-07.webp",
    alt: "Students sharing a meal together",
    title: "A shared meal",
    category: "Community",
  },
  {
    src: "/images/gallery-08.webp",
    alt: "Students worshipping together in a conference hall",
    title: "Worship at conference",
    category: "Conferences",
  },
  {
    src: "/images/gallery-09.webp",
    alt: "A fellowship group outdoors in Rwanda",
    title: "Outdoors in Rwanda",
    category: "Community",
  },
  {
    src: "/images/gallery-10.webp",
    alt: "Students standing together after a ministry gathering",
    title: "After the ministry gathering",
    category: "Fellowship",
  },
  {
    src: "/images/about-community.webp",
    alt: "Students serving the community together",
    title: "Serving together",
    category: "Community",
  },
  {
    src: "/images/about-group.webp",
    alt: "A large group of students gathered after a fellowship meeting",
    title: "The wider fellowship",
    category: "Fellowship",
  },
  {
    src: "/images/bible-study-smallgroup.webp",
    alt: "Students gathered around open Bibles in a small group",
    title: "Around the Word",
    category: "Bible study",
  },
  {
    src: "/images/campus-eto.webp",
    alt: "A large group of students standing together outside their school",
    title: "ETO Nyamata",
    category: "Fellowship",
  },
  {
    src: "/images/campus-mount-kigali.webp",
    alt: "Students studying the Bible together around a table with laptops",
    title: "Mount Kigali class",
    category: "Bible study",
  },
  {
    src: "/images/campus-urcst.webp",
    alt: "Students seated together during a UR-CST Reformed Bible study session",
    title: "UR-CST Bible study",
    category: "Bible study",
  },
  {
    src: "/images/charity-community.webp",
    alt: "Students serving the community together",
    title: "Community outreach",
    category: "Community",
  },
  {
    src: "/images/charity-harvest.webp",
    alt: "Students gathered for a community outreach",
    title: "Harvest outreach",
    category: "Community",
  },
  {
    src: "/images/charity-outreach.webp",
    alt: "A community outreach gathering",
    title: "Outreach gathering",
    category: "Community",
  },
  {
    src: "/images/charity-speaker.webp",
    alt: "A speaker addressing students at a charity event",
    title: "A word at the outreach",
    category: "Community",
  },
  {
    src: "/images/charity-teaching.webp",
    alt: "Students listening during a teaching session",
    title: "Teaching session",
    category: "Bible study",
  },
  {
    src: "/images/charity-team.webp",
    alt: "The charity team standing together after an outreach",
    title: "The charity team",
    category: "Community",
  },
  {
    src: "/images/event-conference.webp",
    alt: "Students gathered in a hall for a conference",
    title: "Conference gathering",
    category: "Conferences",
  },
  {
    src: "/images/event-gathering.webp",
    alt: "Students standing together outdoors after a conference",
    title: "After the conference",
    category: "Conferences",
  },
  {
    src: "/images/online-community.webp",
    alt: "Students connecting with one another through the online ministry",
    title: "Online community",
    category: "Online",
  },
  {
    src: "/images/online-gathering.webp",
    alt: "Students worshipping together during an online ministry gathering",
    title: "Online gathering",
    category: "Online",
  },
  {
    src: "/images/online-ministry.webp",
    alt: "A large gathering of students at an online ministry recording",
    title: "Recording together",
    category: "Online",
  },
  {
    src: "/images/training-conference.webp",
    alt: "Students seated in a conference hall during a teaching session",
    title: "Strengthen conference",
    category: "Conferences",
  },
  {
    src: "/images/training-workshop.webp",
    alt: "Students working together during a ministry training session",
    title: "Training workshop",
    category: "Bible study",
  },
  {
    src: "/images/hero-classroom.webp",
    alt: "A teacher opening the Bible to a room full of students",
    title: "The Word taught",
    category: "Bible study",
  },
];

export const testimonials = [
  {
    quote:
      "I came to the fellowship with a lot of questions. What I found was a room full of students who took the Bible seriously and welcomed me anyway. I have grown more in one year here than I expected.",
    name: "A student at UR-CST",
    role: "University fellowship",
  },
  {
    quote:
      "The Thursday study gave my week a centre. I used to drift through campus life. Now I have a place to open the Word, pray, and be honest with people who point me back to Christ.",
    name: "A student at Mount Kigali",
    role: "Discipleship class",
  },
  {
    quote:
      "Before I joined, I thought following Jesus was mostly about being good. The teaching here helped me see the gospel clearly — and gave me a community to grow in.",
    name: "A student at ETO Nyamata",
    role: "High school fellowship",
  },
  {
    quote:
      "I started watching online because I could not get to a fellowship. The conversations were honest, and they eventually connected me to a group where I could grow in person.",
    name: "An online viewer",
    role: "The Upside Down Show",
  },
];

export const leadershipTeams = [
  {
    slug: "oversight",
    title: "Ministry oversight",
    summary:
      "The oversight team guards the vision, doctrine, and long-term health of the ministry. They pray for the work, teach the Word, and keep the fellowship anchored to its mission.",
    responsibilities: [
      "Vision and direction",
      "Teaching and doctrine",
      "Partnerships and accountability",
    ],
  },
  {
    slug: "discipleship",
    title: "Teaching & discipleship",
    summary:
      "This team plans the weekly studies, prepares teaching, and walks with students as they grow in Christ. They are responsible for the content and care of our discipleship classes.",
    responsibilities: [
      "Weekly Bible study",
      "Curriculum and training",
      "Student follow-up",
    ],
  },
  {
    slug: "campus-leaders",
    title: "Campus leadership",
    summary:
      "Campus leaders are the face of the fellowship on each campus. They welcome new students, host gatherings, and connect their campus to the wider network.",
    responsibilities: [
      "UR-CST fellowship",
      "Mount Kigali class",
      "ETO Nyamata group",
    ],
  },
  {
    slug: "online",
    title: "Online ministry",
    summary:
      "The online team produces The Upside Down Show, weekly sessions, short videos, and Kinyarwanda resources so that students can encounter the gospel wherever they are.",
    responsibilities: [
      "Show and video production",
      "Online sessions",
      "Kinyarwanda resources",
    ],
  },
  {
    slug: "charity",
    title: "Charity & community",
    summary:
      "This team coordinates practical service, community outreach, and care for students and families. They help the fellowship put love into action.",
    responsibilities: [
      "Community outreach",
      "Practical care",
      "Volunteer coordination",
    ],
  },
];
