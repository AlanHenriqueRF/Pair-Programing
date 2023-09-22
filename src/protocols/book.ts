import { Books } from "@prisma/client";

export type Book = {
  id: number;
  title: string;
  author: string;
  publisher: string;
  purchaseDate: Date;
  read: boolean;
  review: string;
  grade: number;
};

export type CreateBook = Omit<Books, "id" >; //| "read" | "review" | "grade" 