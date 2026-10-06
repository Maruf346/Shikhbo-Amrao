export type Course = {
  id: number
  image: string
  category: string
  tab: string[]
  stars: number
  title: string
  lessons: string
  students: number
  instructorImg: string
  instructor: string
  price: string
}

export const courses: Course[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1621111848501-8d3634f82336?q=80&w=1565&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'UI/UX Design',
    tab: ['all', 'design'],
    stars: 5,
    title: 'The Complete Figma Blueprint for UI/UX Designers',
    lessons: '1+ Lessons',
    students: 1,
    instructorImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=48&h=48&fit=crop&crop=face',
    instructor: 'Jane Cooper',
    price: 'Free',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1692976000169-a43bc598d573?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Web Design',
    tab: ['all', 'design', 'marketing'],
    stars: 5,
    title: 'Mastering Webflow: Design Pro-Level Websites Easily',
    lessons: '4+ Lessons',
    students: 2,
    instructorImg: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=48&h=48&fit=crop&crop=face',
    instructor: 'Jane Cooper',
    price: 'Free',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1594199690258-c5d8abe06c0b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Video Editing',
    tab: ['all', 'design', 'business', 'marketing'],
    stars: 5,
    title: 'Premiere Pro Mastery: The Complete Video Editing Guide',
    lessons: '5+ Lessons',
    students: 2,
    instructorImg: 'https://images.unsplash.com/photo-1590650213165-c1fef80648c4?w=48&h=48&fit=crop&crop=face',
    instructor: 'Jane Cooper',
    price: '৳4,500',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1627896181038-a0cf83c86008?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'WordPress Development',
    tab: ['all', 'business', 'marketing'],
    stars: 5,
    title: 'Complete WordPress Theme Development Masterclass',
    lessons: '7+ Lessons',
    students: 6,
    instructorImg: 'https://images.unsplash.com/photo-1664382953518-4a664ab8a8c9?w=48&h=48&fit=crop&crop=face',
    instructor: 'Jane Cooper',
    price: '৳5,500',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'UI/UX Design',
    tab: ['all', 'design'],
    stars: 5,
    title: 'The Complete Figma Blueprint for UI/UX Designers',
    lessons: '3+ Lessons',
    students: 6,
    instructorImg: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=48&h=48&fit=crop&crop=face',
    instructor: 'Jane Cooper',
    price: '৳6,500',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Data Analytics',
    tab: ['all', 'business'],
    stars: 5,
    title: 'Biostatistics & Data Analysis: A Practical Exploration',
    lessons: '8+ Lessons',
    students: 7,
    instructorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face',
    instructor: 'Jane Cooper',
    price: '৳3,500',
  },
]
