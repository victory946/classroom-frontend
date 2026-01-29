import {Subject} from "../types"

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "CS",
    description: "Fundamentals of computer science including algorithms, data structures, and programming paradigms.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: "MATH",
    description: "Advanced calculus covering integration techniques, series, and applications to real-world problems.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "ENG150",
    name: "English Literature",
    department: "English",
    description: "Comprehensive study of classic and contemporary English literature with critical analysis.",
    createdAt: new Date().toISOString(),
  },
];

