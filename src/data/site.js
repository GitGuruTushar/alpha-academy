// ===================================================================
//  Alpha Academy — central site configuration
//  Edit anything here and it updates everywhere on the website.
// ===================================================================

export const site = {
  name: 'Alpha Academy',
  tagline: 'Converting Potential Energy into Kinetic Success',
  pillars: ['Learn.', 'Prepare.', 'Succeed.'],
  motto: 'Your Success, Our Mission.',
  promise: 'Your destination for a brighter tomorrow.',

  // --- Contact ---
  phone: '9724680244',
  phoneIntl: '919724680244', // with India country code, for WhatsApp / tel links
  email: 'alphaacademy2506@gmail.com',

  address: {
    line1: 'F-114, Swastik Shoppers',
    line2: 'Behind Apple Plaza, Kapodra',
    city: 'Ankleshwar',
    pin: '393002',
    state: 'Gujarat, India',
  },

  // Used for the Google Maps embed + "Get Directions" link.
  mapsQuery: 'Swastik Shoppers, Kapodra, Ankleshwar, Gujarat 393002',

  // --- Timings ---
  timings: {
    office: '9:00 AM – 9:00 PM',
    classes: '2:00 PM – 9:00 PM',
    days: 'Monday – Saturday',
  },

  // --- Social ---
  // NOTE: Instagram page is being created. Paste the link here when ready,
  // e.g. 'https://instagram.com/alphaacademy'. Until then the icon shows
  // but is disabled.
  instagram: '',
}

// --- Limited-time offer (July) ---
export const offer = {
  active: true,
  badge: 'Limited Time Offer',
  title: '1 Month FREE Coaching',
  period: '1 July – 31 July',
  forWho: 'For classes 8th, 9th, 10th and 11th & 12th Science',
  note: 'Get a strong start. Reserve your free seat before the batch fills up.',
}

// --- Courses / Programs ---
export const courses = [
  {
    id: 'school-7-10',
    icon: 'book',
    color: 'navy',
    classes: 'Classes 7th – 10th',
    title: 'School Foundation (7th–10th)',
    boards: ['GSEB', 'CBSE'],
    medium: 'English Medium',
    short: 'A rock-solid base in every subject, built one concept at a time.',
    points: [
      'Complete GSEB & CBSE syllabus coverage, English medium',
      'Concept-first teaching with regular doubt-solving',
      'Periodic tests, worksheets and personal progress tracking',
      'Early foundation for IIT-JEE / NEET aspirants',
    ],
  },
  {
    id: 'science-11-12',
    icon: 'flask',
    color: 'green',
    classes: 'Classes 11th & 12th',
    title: 'Science Stream (11th–12th)',
    boards: ['GSEB', 'CBSE'],
    medium: 'Physics · Chemistry · Maths / Biology',
    short: 'Board excellence and entrance-exam readiness, side by side.',
    points: [
      'In-depth Physics, Chemistry, Maths & Biology',
      'Board + entrance preparation taught together',
      'Structured notes, derivations and numerical practice',
      'Designed for GUJCET, JEE and NEET alongside boards',
    ],
  },
  {
    id: 'entrance',
    icon: 'target',
    color: 'orange',
    classes: 'Entrance Exams',
    title: 'IIT-JEE · NEET · GUJCET',
    boards: ['JEE', 'NEET', 'GUJCET'],
    medium: 'Targeted exam coaching',
    short: 'Exam-focused strategy, practice and test series for top ranks.',
    points: [
      'Syllabus-aligned coaching for IIT-JEE, NEET & GUJCET',
      'Topic-wise question banks and timed mock tests',
      'Shortcut techniques, accuracy and time management',
      'Regular performance analysis and mentoring',
    ],
  },
  {
    id: 'foundation',
    icon: 'sparkles',
    color: 'gold',
    classes: 'Foundation',
    title: 'Foundation Program',
    boards: ['Strong Base'],
    medium: 'Bright Future',
    short: 'Early preparation that turns potential into real momentum.',
    points: [
      '"Strong Base, Bright Future" approach',
      'Builds reasoning, aptitude and study habits early',
      'Smooth transition into competitive exam preparation',
      'Confidence-building from a young age',
    ],
  },
]

// --- Why choose us (real USPs from the academy) ---
export const usps = [
  {
    icon: 'graduation',
    title: 'Experienced Faculty',
    text: 'Learn from teachers who know the syllabus, the exams and how to explain it clearly.',
  },
  {
    icon: 'users',
    title: 'Personalized Attention',
    text: 'Small, focused batches so every single student is seen, heard and guided.',
  },
  {
    icon: 'trending',
    title: 'Result Driven',
    text: 'Regular tests, feedback and tracking — steady progress you can actually measure.',
  },
  {
    icon: 'shield',
    title: 'Discipline & Dedication',
    text: 'A serious, encouraging environment that keeps students consistent and motivated.',
  },
]

// --- "Learn. Prepare. Succeed." journey ---
export const journey = [
  {
    step: '01',
    icon: 'bulb',
    title: 'Learn',
    text: 'Strong concepts taught from the ground up, in clear English medium, until the idea truly clicks.',
  },
  {
    step: '02',
    icon: 'target',
    title: 'Prepare',
    text: 'Practice, revision, tests and exam strategy that turn understanding into confident performance.',
  },
  {
    step: '03',
    icon: 'trophy',
    title: 'Succeed',
    text: 'Boards, GUJCET, JEE and NEET — students walk in prepared and walk out with results.',
  },
]

// --- At a glance (factual, no invented numbers) ---
export const facts = [
  { value: '7th–12th', label: 'Classes we teach' },
  { value: 'GSEB · CBSE', label: 'Boards covered' },
  { value: 'JEE · NEET · GUJCET', label: 'Entrance exams' },
  { value: 'Ankleshwar', label: 'Right in Kapodra' },
]

// Helper: build a prefilled WhatsApp link
export function whatsappLink(message) {
  const base = `https://wa.me/${site.phoneIntl}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
