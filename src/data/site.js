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

  // The academy itself isn't listed on Google yet, so the map + directions
  // point to "Apple Plaza" — a Google-listed landmark the academy sits right
  // behind. Coordinates are Apple Plaza's exact pin (reliable routing).
  mapsLandmark: 'Apple Plaza, Ankleshwar',
  mapsCoords: '21.600648,73.0181455',
  mapsQuery: 'Apple Plaza, Ankleshwar GIDC, Gujarat 393002',

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
// `active` is computed from the date: the offer automatically disappears
// everywhere on the site after 31 July (IST). No code change needed —
// after that date the announcement bar, the offer card and the hero badge
// all stop showing on their own.
const OFFER_END = new Date('2026-07-31T23:59:59+05:30')

export const offer = {
  active: new Date() <= OFFER_END,
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
    title: 'School Coaching (7th–10th)',
    boards: ['GSEB', 'CBSE'],
    medium: 'English Medium',
    short: 'A rock-solid base in every subject, built one concept at a time.',
    points: [
      'Complete GSEB & CBSE syllabus coverage, English medium',
      'Concept-first teaching with regular doubt-solving',
      'Periodic tests, worksheets and personal progress tracking',
      'An early, strong base for IIT-JEE / NEET aspirants',
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
    short: 'Exam-focused strategy, practice and test series for competitive exams.',
    points: [
      'Syllabus-aligned coaching for IIT-JEE, NEET & GUJCET',
      'Topic-wise question banks and timed mock tests',
      'Shortcut techniques, accuracy and time management',
      'Regular performance analysis and mentoring',
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
    text: 'Boards, GUJCET, JEE and NEET — students walk in prepared, confident and ready to give their best.',
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
