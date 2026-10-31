export type BlogSection = {
  heading: string
  paragraphs?: string[]
  points?: string[]
}

export type BlogPost = {
  slug: string
  title: string
  shortTitle: string
  description: string
  keywords: string[]
  category: string
  published: string
  readingTime: string
  image: string
  imageAlt: string
  intro: string[]
  sections: BlogSection[]
  faq: { question: string; answer: string }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-coaching-centre-mirpur-dhaka",
    title: "Best Coaching Centre in Mirpur, Dhaka: A Parent & Student Checklist",
    shortTitle: "How to Choose the Best Coaching Centre in Mirpur",
    description:
      "Looking for the best coaching centre in Mirpur, Dhaka? Compare teachers, class size, exams, feedback and location before choosing a coaching center.",
    keywords: [
      "best coaching centre in Mirpur",
      "coaching center in Mirpur",
      "coaching centre in Dhaka",
      "academic coaching Mirpur 1",
      "school coaching in Mirpur",
    ],
    category: "Mirpur Coaching Guide",
    published: "2026-10-31",
    readingTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=700&fit=crop",
    imageAlt: "Students learning together at an academic coaching centre",
    intro: [
      "Searching for the best coaching centre in Mirpur can feel confusing because every institute describes itself as the right choice. A useful decision should be based on the learning system, not only an advertisement or a familiar name.",
      "For a student in Mirpur-1 or nearby areas, the best option is usually the coaching center that matches the student's class, subjects, current learning gaps and daily schedule. Use this practical checklist before admission.",
    ],
    sections: [
      {
        heading: "1. Start with the student's exact academic need",
        paragraphs: [
          "A Class 6 learner who needs help in Mathematics and English does not need the same plan as an SSC Science student preparing Physics, Chemistry and Higher Mathematics. Write down the subjects, weak chapters and target exam before comparing coaching centres in Dhaka.",
        ],
        points: [
          "Class 6-8: concept building, homework support and regular study habits",
          "Class 9-10 Science: board syllabus coverage, CQ/MCQ practice and revision",
          "HSC: subject-focused teaching, ICT practice and exam preparation",
        ],
      },
      {
        heading: "2. Ask how teachers explain and check progress",
        paragraphs: [
          "A good teacher should make difficult topics understandable, invite questions and check whether students can solve problems independently. Ask whether the institute provides chapter tests, written feedback and a way for guardians to understand progress.",
          "A demo class is more useful than a brochure. During the class, notice whether the teacher explains the reason behind an answer or only asks students to memorize it.",
        ],
      },
      {
        heading: "3. Compare class size, routine and travel time",
        paragraphs: [
          "Smaller or well-managed batches make it easier for a teacher to notice confusion. The class routine should also leave enough time for school, rest and revision. For families around Mirpur-1, a nearby academic coaching centre can reduce travel stress and help students attend consistently.",
        ],
      },
      {
        heading: "4. Look for a complete learning cycle",
        points: [
          "Clear lesson plan aligned with the current syllabus",
          "Classwork followed by guided practice",
          "Homework that is reviewed, not merely assigned",
          "Regular chapter and model tests",
          "Revision before school or board examinations",
          "Specific feedback for the student and guardian",
        ],
        paragraphs: [
          "The strongest coaching system connects teaching, practice, testing and feedback. Missing any one of these steps can leave a student busy without producing steady improvement.",
        ],
      },
      {
        heading: "Why consider Shikhbo Amrao in Mirpur-1?",
        paragraphs: [
          "Shikhbo Amrao offers academic batches for Classes 6-8, Class 9-10 Science and HSC Bangla, English and ICT in Mirpur-1, Dhaka. Students can ask about available all-subject or individual-subject batches and choose a routine suited to their level.",
          "Before enrolling, contact the team for the current batch schedule, seat availability, fees and a discussion about the learner's needs. That conversation is the fairest way to decide whether the program is a good fit.",
        ],
      },
    ],
    faq: [
      {
        question: "Which is the best coaching centre in Mirpur?",
        answer:
          "There is no single best centre for every student. Compare teacher quality, batch size, testing, feedback, location and subject coverage against the student's needs.",
      },
      {
        question: "Where is Shikhbo Amrao located?",
        answer:
          "Shikhbo Amrao is in Mirpur-1, Dhaka, Bangladesh. Contact the team before visiting for the current class schedule and directions.",
      },
      {
        question: "Does Shikhbo Amrao have school and HSC batches?",
        answer:
          "Yes. Current offerings include Classes 6-8, Class 9-10 Science, and HSC Bangla, English and ICT. Availability can vary by batch.",
      },
    ],
  },
  {
    slug: "hsc-coaching-mirpur-dhaka",
    title: "HSC Coaching in Mirpur, Dhaka: How to Build a Strong Study Plan",
    shortTitle: "HSC Coaching in Mirpur: A Practical Study Plan",
    description:
      "A practical guide to choosing HSC coaching in Mirpur, Dhaka, planning Bangla, English and ICT study, and preparing with regular tests and revision.",
    keywords: [
      "HSC coaching in Mirpur",
      "HSC coaching center in Dhaka",
      "HSC ICT coaching Mirpur",
      "HSC English coaching Mirpur",
      "HSC Bangla coaching Dhaka",
    ],
    category: "HSC Preparation",
    published: "2026-10-31",
    readingTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=700&fit=crop",
    imageAlt: "HSC student preparing notes for an examination",
    intro: [
      "HSC preparation becomes manageable when students follow a repeatable weekly system. Coaching can support that system, but the student still needs planned revision, written practice and honest progress checks.",
      "If you are comparing HSC coaching in Mirpur, look beyond class hours. Ask how each batch supports syllabus completion, ICT problem solving, language skills and exam practice.",
    ],
    sections: [
      {
        heading: "Build the plan around the board syllabus",
        paragraphs: [
          "List every chapter in the current syllabus and mark it as not started, learning, needs practice or revised. This simple tracker prevents students from repeatedly studying comfortable topics while avoiding difficult ones.",
        ],
      },
      {
        heading: "Balance Bangla, English and ICT",
        paragraphs: [
          "Bangla and English improve through regular reading and written correction. ICT requires both clear theory and repeated problem solving. A useful HSC coaching routine gives each subject scheduled attention instead of leaving common subjects until the final months.",
        ],
        points: [
          "Bangla: text understanding, grammar and structured writing",
          "English: grammar, reading comprehension and writing practice",
          "ICT: concepts, number systems, logic, HTML and question practice",
        ],
      },
      {
        heading: "Use a weekly learn-practice-test-review cycle",
        paragraphs: [
          "Learn a topic in class, practise it without looking at the solution, sit a short timed test, and then review every mistake. The final review step matters: an uncorrected test only records a weakness, while correction helps remove it.",
        ],
      },
      {
        heading: "Questions to ask an HSC coaching center",
        points: [
          "Which HSC subjects and versions are currently available?",
          "How often are chapter tests and model tests held?",
          "Are written answers checked with individual feedback?",
          "How is a missed class or weak chapter handled?",
          "Does the routine fit the student's college schedule?",
        ],
      },
      {
        heading: "HSC support at Shikhbo Amrao",
        paragraphs: [
          "Shikhbo Amrao runs HSC batches for Bangla, English and ICT from Mirpur-1, Dhaka. Contact the team to confirm the current routine, admission availability and whether an all-subject or individual-subject option matches your plan.",
        ],
      },
    ],
    faq: [
      {
        question: "What should I look for in HSC coaching in Mirpur?",
        answer:
          "Look for syllabus-aligned teaching, written practice, regular tests, clear feedback, manageable batch size and a routine that works with college hours.",
      },
      {
        question: "Is ICT coaching useful for HSC students?",
        answer:
          "It can be useful when it combines concept explanation with frequent problem solving and correction, especially for topics students find difficult to practise alone.",
      },
    ],
  },
  {
    slug: "ssc-science-coaching-mirpur",
    title: "SSC Science Coaching in Mirpur: Class 9-10 Board Exam Preparation",
    shortTitle: "SSC Science Coaching in Mirpur for Class 9-10",
    description:
      "Plan SSC Science coaching in Mirpur for Class 9-10 Physics, Chemistry, Biology, Mathematics, English, Bangla and ICT with board-focused practice.",
    keywords: [
      "SSC coaching center in Mirpur",
      "SSC Science coaching Mirpur",
      "Class 9 coaching in Mirpur",
      "Class 10 coaching in Mirpur",
      "SSC board exam preparation Dhaka",
    ],
    category: "SSC Science",
    published: "2026-10-31",
    readingTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=700&fit=crop",
    imageAlt: "Class 9 and 10 students studying science together",
    intro: [
      "Class 9 and 10 Science students manage several connected subjects at once. A gap in algebra can affect Physics, while weak chemical concepts can make later chapters harder. The right SSC Science coaching plan should build concepts and board-exam skills together.",
      "Students searching for an SSC coaching center in Mirpur should check whether the batch covers their required subjects and gives enough time for both CQ and MCQ practice.",
    ],
    sections: [
      {
        heading: "Create strong foundations in every Science subject",
        points: [
          "Physics: understand formulas, units, diagrams and numerical problems",
          "Chemistry: connect concepts, equations and calculation practice",
          "Biology: learn processes with labelled diagrams and precise terms",
          "General and Higher Mathematics: solve varied problems without copying steps",
          "Bangla, English and ICT: keep common subjects in the weekly routine",
        ],
      },
      {
        heading: "Prepare for CQ and MCQ differently",
        paragraphs: [
          "Creative questions test explanation and application, so students should practise organizing complete written answers. MCQs demand accurate concepts and time control. A balanced test should reveal both types of weakness.",
        ],
      },
      {
        heading: "Use tests as a diagnostic tool",
        paragraphs: [
          "After each test, sort errors into concept mistakes, calculation mistakes, incomplete answers and time-management problems. Then assign the right correction. Simply taking more tests without analysing mistakes often repeats the same result.",
        ],
      },
      {
        heading: "How guardians can support without adding pressure",
        paragraphs: [
          "Guardians can help by checking routine consistency, sleep and attendance rather than comparing marks with other students. Ask the teacher which specific skill needs work and agree on a short improvement plan.",
        ],
      },
      {
        heading: "Class 9-10 Science batches in Mirpur-1",
        paragraphs: [
          "Shikhbo Amrao's Class 9 and Class 10 Science offerings include Bangla, English, General Mathematics, Higher Mathematics, Physics, Chemistry, Biology and ICT. Contact the Mirpur-1 team for the latest batch routine, subject options and enrollment information.",
        ],
      },
    ],
    faq: [
      {
        question: "Which subjects are important for SSC Science coaching?",
        answer:
          "A complete plan should cover Physics, Chemistry, Biology, General Mathematics and Higher Mathematics while maintaining Bangla, English and ICT preparation.",
      },
      {
        question: "When should Class 9-10 students begin board preparation?",
        answer:
          "Preparation should begin with the first chapters. Regular learning, practice and revision is more reliable than waiting for a short final revision period.",
      },
    ],
  },
  {
    slug: "academic-coaching-classes-6-8-mirpur",
    title: "Academic Coaching for Classes 6-8 in Mirpur: Build Better Study Habits",
    shortTitle: "Academic Coaching in Mirpur for Classes 6-8",
    description:
      "A guide to academic coaching for Classes 6-8 in Mirpur, covering Mathematics, English, Science, Bangla, BGS, ICT and healthy study habits.",
    keywords: [
      "academic coaching in Mirpur",
      "Class 6 coaching Mirpur",
      "Class 7 coaching Mirpur",
      "Class 8 coaching Mirpur",
      "school coaching center Dhaka",
    ],
    category: "Classes 6-8",
    published: "2026-10-31",
    readingTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=700&fit=crop",
    imageAlt: "School students in a guided academic class",
    intro: [
      "Classes 6-8 are foundation years. Students meet more detailed Mathematics, Science, English and ICT content while also learning how to manage several subjects independently. Good academic coaching should develop those habits instead of creating dependence on a teacher.",
      "For parents considering school coaching in Mirpur, the goal is steady understanding, confident questions and a realistic home-study routine.",
    ],
    sections: [
      {
        heading: "Focus on understanding before memorizing",
        paragraphs: [
          "Students remember information longer when they can explain it in their own words and apply it to a new question. Teachers can check understanding through short questions, examples and practice rather than asking only for repeated reading.",
        ],
      },
      {
        heading: "Build a simple weekly routine",
        points: [
          "Review the day's class notes for 15-20 minutes",
          "Complete practice before checking an answer",
          "Keep a small list of questions for the next class",
          "Revise older chapters once every week",
          "Use a short test to check recall and application",
        ],
      },
      {
        heading: "Give each core subject the right kind of practice",
        paragraphs: [
          "Mathematics needs problem solving, languages need reading and writing, and Science needs both explanation and application. BGS and ICT also benefit from regular recall and structured answers. One study method does not fit every subject.",
        ],
      },
      {
        heading: "What parents should ask a coaching centre",
        points: [
          "Will homework be checked and corrected?",
          "How are absent or quiet students supported?",
          "How often will progress be assessed?",
          "Can the teacher identify the student's specific learning gaps?",
          "Is the batch routine sustainable alongside school?",
        ],
      },
      {
        heading: "Classes 6-8 at Shikhbo Amrao",
        paragraphs: [
          "Shikhbo Amrao offers all-subject support for Classes 6, 7 and 8, including Bangla, English, Mathematics, Science, Bangladesh & Global Studies and ICT. Families near Mirpur-1 can contact the team for current schedules and available seats.",
        ],
      },
    ],
    faq: [
      {
        question: "What subjects are included for Classes 6-8?",
        answer:
          "Shikhbo Amrao's listed Classes 6-8 subjects are Bangla, English, Mathematics, Science, Bangladesh & Global Studies and ICT.",
      },
      {
        question: "How can coaching improve study habits?",
        answer:
          "A structured class can teach students to review, practise, ask questions, take short tests and correct mistakes on a consistent schedule.",
      },
    ],
  },
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
