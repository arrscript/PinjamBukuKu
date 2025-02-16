export const navigationLinks = [
  {
    href: "/library",
    label: "Library",
  },

  {
    img: "/icons/user.svg",
    selectedImg: "/icons/user-fill.svg",
    href: "/my-profile",
    label: "My Profile",
  },
];

export const adminSideBarLinks = [
  {
    img: "/icons/admin/home.svg",
    route: "/admin",
    text: "Home",
  },
  {
    img: "/icons/admin/users.svg",
    route: "/admin/users",
    text: "All Users",
  },
  {
    img: "/icons/admin/book.svg",
    route: "/admin/books",
    text: "All Books",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/book-requests",
    text: "Borrow Requests",
  },
  {
    img: "/icons/admin/user.svg",
    route: "/admin/account-requests",
    text: "Account Requests",
  },
];

export const FIELD_NAMES = {
  fullName: "Full name",
  email: "Email",
  universityId: "University ID Number",
  password: "Password",
  universityCard: "Upload University ID Card",
};

export const FIELD_TYPES = {
  fullName: "text",
  email: "email",
  universityId: "number",
  password: "password",
};

export const sampleBooks = [
  {
    id: 1,
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Self-Help / Productivity",
    rating: 4.7,
    total_copies: 50,
    available_copies: 30,
    description:
      "A guide to mastering deep concentration in an era of distractions, helping you maximize productivity and creativity.",
    color: "#ffffff",
    cover: "https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg",
    video:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    summary:
      "Learn how to eliminate distractions and develop intense focus to achieve remarkable professional and personal success.",
  },
  {
    id: 2,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction / Adventure",
    rating: 4.5,
    total_copies: 70,
    available_copies: 40,
    description:
      "A young shepherd sets out on a quest to find hidden treasure, only to discover the true wealth lies within the journey itself.",
    color: "#ed6322",
    cover:
      "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg",
    video:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    summary:
      "An enchanting fable that teaches us to follow our dreams and embrace life's journey as the ultimate treasure.",
  },
  {
    id: 3,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    genre: "Self-Help / Spirituality",
    rating: 4.7,
    total_copies: 60,
    available_copies: 35,
    description:
      "A transformative book that explores the importance of living fully in the present moment and letting go of past regrets and future worries.",
    color: "#e0f7fa",
    cover: "https://m.media-amazon.com/images/I/41IXvZ8JwdL.jpg",
    video:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    summary:
      "Discover how embracing the present can lead to greater peace, happiness, and fulfillment in life.",
  },
  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help / Productivity",
    rating: 4.9,
    total_copies: 99,
    available_copies: 65,
    description:
      "A practical guide to forming positive habits, breaking bad ones, and making small changes that create remarkable results.",
    color: "#fffdf6",
    cover: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
    video:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    summary:
      "Learn how tiny adjustments in your daily routine can lead to significant personal and professional growth.",
  },
  {
    id: 5,
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    genre: "Memoir / Psychology",
    rating: 4.8,
    total_copies: 40,
    available_copies: 25,
    description:
      "Viktor Frankl’s memoir chronicles his survival in Nazi concentration camps and explores how meaning can be found even in suffering.",
    color: "#fafafa",
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/41eZuBzkxUL._SX324_BO1,204,203,200_.jpg",
    video:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    summary:
      "A profound reflection on how finding purpose can help individuals endure even the most difficult circumstances.",
  },
  {
    id: 6,
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fantasy / Fiction",
    rating: 4.6,
    total_copies: 20,
    available_copies: 12,
    description:
      "A mystical library that holds infinite books, each presenting a different version of life based on the choices one could have made.",
    color: "#1c1f40",
    cover: "https://m.media-amazon.com/images/I/81J6APjwxlL.jpg",
    video:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    summary:
      "Join Nora Seed on an extraordinary journey through alternate versions of her life, exploring endless possibilities beyond time and space.",
  },
  {
    id: 7,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    genre: "Self-Help / Motivational",
    rating: 4.3,
    total_copies: 35,
    available_copies: 15,
    description:
      "A bold and humorous take on prioritizing what truly matters in life while letting go of unnecessary worries.",
    color: "#f0f0f0",
    cover: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
    video:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    summary:
      "Discover how shifting your focus to what genuinely matters can bring greater happiness and freedom.",
  },
  {
    id: 8,
    title: "The Art of Happiness",
    author: "Dalai Lama",
    genre: "Self-Help / Philosophy",
    rating: 4.4,
    total_copies: 45,
    available_copies: 20,
    description:
      "A powerful discussion on finding true happiness, featuring conversations and reflections with the Dalai Lama.",
    color: "#fff8e1",
    cover: "https://m.media-amazon.com/images/I/51mDjVrcyUL.jpg",
    video:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    summary:
      "Gain insights into how inner peace, compassion, and wisdom can lead to a more meaningful and joyful life.",
  },
];
