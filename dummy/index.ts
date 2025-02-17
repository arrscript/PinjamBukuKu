import { Book } from "@/types/book.types";

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

export const sampleBooks: Book[] = [
  {
    id: 1,
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Self-Help / Productivity",
    rating: 4.7,
    total_copies: 25,
    available_copies: 20,
    description:
      "A powerful guide that teaches how to harness deep focus to maximize productivity in a distracted world.",
    color: "#ffffff",
    cover: "https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A powerful guide emphasizing deep concentration to achieve peak productivity in today’s challenging environment.",
    // isLoanedBook: true,
  },
  {
    id: 2,
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fantasy / Fiction",
    rating: 4.6,
    total_copies: 22,
    available_copies: 12,
    description:
      "An intriguing novel following Nora Seed as she navigates the realm between life and death, uncovering endless paths of possibility.",
    color: "#1c1f40",
    cover: "https://m.media-amazon.com/images/I/81J6APjwxlL.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A captivating narrative of choices and alternate lives as Nora Seed journeys between existence and the beyond.",
    // isLoanedBook: true,
  },
  {
    id: 3,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    genre: "Finance / Self-Help",
    rating: 4.8,
    total_copies: 12,
    available_copies: 6,
    description:
      "A deep dive into the behaviors and mindsets that shape our financial decisions, offering fresh insights on wealth.",
    color: "#ffffff",
    cover:
      "https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A compelling exploration of the psychological factors behind financial success and decision-making, presented with fresh perspectives.",
  },
  {
    id: 4,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Computer Science / Programming",
    rating: 4.8,
    total_copies: 60,
    available_copies: 55,
    description:
      "A practical handbook for developers, outlining essential principles for writing efficient and maintainable code.",
    color: "#080c0d",
    cover:
      "https://m.media-amazon.com/images/I/71T7aD3EOTL._UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A practical guide that highlights core principles and best practices for crafting clean, efficient software.",
  },
  {
    id: 5,
    title: "You Don't Know JS: Scope & Closures",
    author: "Kyle Simpson",
    genre: "Computer Science / JavaScript",
    rating: 4.7,
    total_copies: 11,
    available_copies: 7,
    description:
      "A vital resource that demystifies the intricacies of JavaScript, with a special focus on scope and closures.",
    color: "#f8e036",
    cover:
      "https://m.media-amazon.com/images/I/7186YfjgHHL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "An essential guide for understanding JavaScript's core mechanisms, particularly its scope and closures, explained in an accessible way.",
  },
  {
    id: 6,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help / Productivity",
    rating: 4.9,
    total_copies: 102,
    available_copies: 55,
    description:
      "An innovative guide that shows how to build good habits, break bad ones, and improve incrementally every day.",
    color: "#fffdf6",
    cover: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A transformative approach to habit formation, demonstrating practical strategies for achieving daily improvements.",
  },
  {
    id: 7,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    genre: "Computer Science / Programming",
    rating: 4.8,
    total_copies: 28,
    available_copies: 4,
    description:
      "A timeless manual offering insights and practices for developers to sharpen their craft.",
    color: "#100f15",
    cover:
      "https://m.media-amazon.com/images/I/71VStSjZmpL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A classic guide filled with practical tips and insights for developers striving for excellence in programming.",
  },
  {
    id: 8,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Philosophy / Adventure",
    rating: 4.5,
    total_copies: 82,
    available_copies: 45,
    description:
      "A mystical journey of a young shepherd, Santiago, who embarks on an adventure to fulfill his destiny.",
    color: "#ed6322",
    cover:
      "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "An enchanting tale of adventure and destiny as Santiago sets out on a transformative quest in search of treasure.",
  },
];
