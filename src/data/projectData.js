const projects = [
  {
    id: 1,
    title: "🍽️ RecipeBook",
    images: [
      "https://i.ibb.co/7J192mbT/1.png",
      "https://i.ibb.co/rKV9yb5z/2.png",
      "https://i.ibb.co/HfPnR3SK/3.png"
    ],
    techStack: [
      "React", "Tailwind CSS", "DaisyUI", "Firebase", "React Router",
      "React Toastify", "SweetAlert2", "Swiper", "Lottie React", "React Icons", "React Awesome Reveal"
    ],
    tools: ["Netlify", "Vite", "VS Code"],
    role: "Frontend Developer",
    duration: "2 weeks",
    teamSize: "Solo Project",
    liveLink: "https://recipe-book-sitee.netlify.app/",
    clientRepo: "https://github.com/Diya-Purkayastha/recipe-book-client",
    overview:
      "RecipeBook is a full-stack recipe-sharing platform where users can explore, like, and manage recipes. Features include authentication, private dashboards, and a responsive UI for all devices.",
    features: [
      "🔐 Firebase Authentication (Email/Password & Google)",
      "🌗 Light/Dark Mode toggle using DaisyUI",
      "📦 Add, Update, Delete Recipes with real-time feedback",
      "❤️ Like System for public recipes",
      "🧭 Protected Routes with React Router",
      "📄 Recipe Detail View with dynamic routing",
      "📊 Dashboard Table View with personal recipes",
      "📱 Fully Responsive Layout"
    ],
    pagesRoutes: [
      "/ – Home",
      "/recipes/:id – Dynamic Recipe Details",
      "/add-recipe 🔒",
      "/my-recipes 🔒",
      "/login, /register",
      "* – 404 Page"
    ],
    challenges:
      "Protected routes setup, form validation and toast-based feedback, and preventing users from liking their own recipes.",
    futurePlans:
      "Add image uploads, category-based recipe discovery, and admin dashboard for moderation.",
  },

  {
    id: 2,
    title: "📚 Virtual Bookshelf",
    images: [
      "https://i.ibb.co/yBFmLFw0/4.png",
      "https://i.ibb.co/GfBMxQjL/5.png",
      "https://i.ibb.co/9mB4PCvP/6.png",
      "https://i.ibb.co/Lz1HQVXw/7.png",
    ],
    techStack: [
      "React", "Tailwind CSS", "DaisyUI", "Firebase", "MongoDB",
      "Axios", "React Router", "Framer Motion", "SweetAlert2", "Swiper.js",
      "Recharts", "Lottie-react", "React Icons", "React Toastify"
    ],
    tools: ["Vite", "Netlify", "MongoDB Atlas", "Firebase Console"],
    role: "Full Stack Developer",
    duration: "3 weeks",
    teamSize: "Solo Project",
    liveLink: "https://vrbookshelf.netlify.app/",
    clientRepo: "https://github.com/Diya-Purkayastha/virtual-bookshelf-client",
    overview:
      "Virtual Bookshelf lets users track, review, and organize their personal book collection. Includes charts, filtering, and reading progress—all synced with authentication.",
    features: [
      "🔐 Firebase Auth (Google & Email)",
      "📚 Add, update, delete books with status tracker",
      "✨ Framer Motion and Lottie-enhanced UI",
      "📊 Dashboard stats using Recharts",
      "🔍 Filter by title, author, and status",
      "💬 Reviews and upvotes system",
      "📱 Fully responsive modern design"
    ],
    pagesRoutes: [
      "/ – Home",
      "/bookshelf – Public listing",
      "/books/:id – Book details",
      "/add-book 🔒",
      "/my-books 🔒",
      "/update-book/:id 🔒",
      "/profile 🔒",
      "/login, /register",
      "* – 404 Page"
    ],
    challenges:
      "Syncing book ownership and reading status per user, integrating charts and animation libraries cleanly, and ensuring responsive table layout.",
    futurePlans:
      "Implement Google Books API integration, add reading goals, enable public bookshelf sharing, and real-time notification system.",
  },
  
  {
    id: 3,
    title: "📦 SubS.boX – Subscription Service Platform",
    images: [
      "https://i.ibb.co/0RbZhjDV/9.png",
      "https://i.ibb.co/mFvm4S13/10.png",
      "https://i.ibb.co/Q362vnRp/11.png"
    ],
    techStack: [
      "React", "Tailwind CSS", "DaisyUI", "Firebase", "React Router",
      "Swiper.js", "React Icons", "AOS", "Netlify"
    ],
    tools: ["Vite", "Firebase Console", "AOS", "Netlify", "VS Code"],
    role: "Frontend Developer",
    duration: "1.5 weeks",
    teamSize: "Solo Project",
    liveLink: "https://subscriptionbox.com", 
    clientRepo: "https://github.com/Diya-Purkayastha/subscription-box",
    overview:
      "SubS.boX is a user-focused subscription box platform. It supports review submissions, protected profiles, and a visually dynamic user experience.",
    features: [
      "✅ Firebase Authentication (Login / Register)",
      "👤 Editable user profile page",
      "📝 Add reviews with rating system",
      "🧭 Protected client-side routing",
      "🎥 Swiper-based product gallery",
      "🌍 Mobile-first responsive layout",
      "❌ Custom 404 and loading states"
    ],
    pagesRoutes: [
      "/ – Home with hero slider",
      "/products – Explore subscription boxes",
      "/profile 🔒 – User details and settings",
      "/login, /register",
      "* – 404 Not Found"
    ],
    challenges:
      "Dynamic routing with auth guards, designing review system with ratings, and building a rich homepage with animations.",
    futurePlans:
      "Add Stripe payment, shipment tracking, admin dashboard, email verification, and FAQ/support center.",
  }
];

export default projects;
