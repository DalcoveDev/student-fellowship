export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  sections: ArticleSection[];
  scripture?: { text: string; reference: string };
};

export const articles: Article[] = [
  {
    slug: "three-ways-we-make-disciples",
    title: "Three ways we make disciples",
    category: "Discipleship",
    excerpt:
      "Our mission is simple, but it takes shape in ordinary, weekly faithfulness. Here is how we pursue it.",
    image: "/images/training-workshop.webp",
    imageAlt: "Students working together during a ministry training session",
    sections: [
      {
        paragraphs: [
          "Christian Students Network exists to make disciples of Jesus Christ and strengthen believers in the gospel. That mission is not carried by one event or one program. It is carried by a rhythm of teaching, training, and reaching — three ministry expressions that shape our life together.",
        ],
      },
      {
        heading: "1. Weekly discipleship classes",
        paragraphs: [
          "We equip students in high schools and universities across Rwanda by establishing weekly discipleship groups that foster spiritual growth, deeper biblical understanding, and Christ-centred living. These groups are where the Bible is opened, questions are asked, and students learn to follow Jesus in the ordinary places of campus life.",
        ],
      },
      {
        heading: "2. Strengthen Conferences",
        paragraphs: [
          "We organise national, regional, and targeted conferences to present the gospel clearly, train students, and call them to deeper commitment to Christ. Conferences give us a wider room to teach, to worship together, and to send students back to their campuses with fresh conviction.",
        ],
      },
      {
        heading: "3. Digital resources",
        paragraphs: [
          "We expand gospel reach through weekly online sessions, long-form teaching on YouTube, short video content, and the translation and distribution of gospel materials in Kinyarwanda. For students who are far away, or who are exploring the faith for the first time, these resources make the Word accessible.",
        ],
      },
      {
        heading: "Faithfulness over novelty",
        paragraphs: [
          "None of these expressions is complicated. They are simply ways of being faithful with the gospel: teach the Word, train believers, and reach the next student. We pray that this rhythm continues to produce disciples who love Christ, love His church, and proclaim His supremacy to the ends of the earth.",
        ],
      },
    ],
  },
  {
    slug: "the-bible-our-final-authority",
    title: "The Bible: our supreme and final authority",
    category: "Doctrine",
    excerpt:
      "Everything we do as a fellowship is measured by the Scriptures. Here is what we believe about the Word of God.",
    image: "/images/bible-study-smallgroup.webp",
    imageAlt: "Open Bibles on a table during a Bible study",
    sections: [
      {
        paragraphs: [
          "As a network of students, we want to be shaped by the Scriptures rather than by the mood of the moment. Our statement of faith begins with the Bible because everything else we believe flows from it.",
        ],
      },
      {
        heading: "Fully inspired, without error",
        paragraphs: [
          "We believe that the Scriptures of the Old and New Testaments, consisting of all 66 books, are the fully inspired, inerrant, infallible, and sufficient Word of God. In their original writings, they are without error and reveal God's complete truth for faith, life, and godliness.",
        ],
      },
      {
        heading: "Our final authority",
        paragraphs: [
          "The Bible stands as the supreme and final authority on all matters of truth, morality, and the proper conduct of mankind. That means we do not sit in judgment over the text. We come to it ready to be taught, corrected, and shaped.",
        ],
      },
      {
        heading: "A Word to live by",
        paragraphs: [
          "Because the Scriptures are sufficient, we do not need to look elsewhere for a word about how to live as followers of Jesus. In our classes and conferences, in our online teaching, and in our friendships, the aim is the same: to know what God has said and to obey it.",
        ],
      },
    ],
    scripture: {
      text: "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness.",
      reference: "2 Timothy 3:16",
    },
  },
  {
    slug: "why-we-gather-on-thursday",
    title: "Why we gather on Thursday",
    category: "Community",
    excerpt:
      "Every Thursday in Kicukiro, students open the Scriptures together. Here is what happens — and why you are invited.",
    image: "/images/gallery-08.webp",
    imageAlt: "Students worshipping together in a conference hall",
    sections: [
      {
        paragraphs: [
          "Thursday is not a random day on our calendar. It is the day we set aside to gather, open the Word, and encourage one another in the middle of a busy week. Students come from different campuses, different backgrounds, and different places in their walk with Christ — and we study together.",
        ],
      },
      {
        heading: "A midweek anchor",
        paragraphs: [
          "University and high school life moves quickly. Assignments, exams, work, and family responsibilities can crowd out the things that matter most. A weekly gathering gives us a fixed point: a time to be reminded of the gospel, to pray, and to sit under the Bible with other believers.",
        ],
      },
      {
        heading: "Three sessions, one aim",
        paragraphs: [
          "We meet at Kicukiro – Mu Banyamakuru with three sessions across the day: 11:00 AM – 1:00 PM, 2:00 PM – 3:30 PM, and 4:00 PM – 5:00 PM. The sessions make room for different schedules, but the aim is the same: that every student who comes would leave with a clearer sight of Christ.",
        ],
      },
      {
        heading: "Come as you are",
        paragraphs: [
          "You do not need to have it all together to join us. Bring your Bible, bring your questions, and bring a friend. If you are not sure where to start, call +250 784 857 707 and we will help you find the right session.",
        ],
      },
    ],
    scripture: {
      text: "And let us consider how to stir up one another to love and good works, not neglecting to meet together.",
      reference: "Hebrews 10:24–25",
    },
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function readingTime(article: Article) {
  const words = article.sections
    .flatMap((section) => section.paragraphs)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(2, Math.ceil(words / 200));
}
