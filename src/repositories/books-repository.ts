import { CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

import connection from "../database";
import { Books } from "@prisma/client";
import prisma from "../database";

export type CreatePost = Omit<Books, "id">;

export async function getBooks() {
  return await prisma.books.findMany();
}

export async function getBook(id: number) {
  return await prisma.books.findFirst({ where: { id } });
}

export async function createBook(book: CreateBook) {
  book.purchaseDate = new Date (book.purchaseDate)

  await prisma.books.create({
    data: book
  })
}

export async function reviewBook(book: Books,review:CreateReview) {
  const { id } = book;
  book.grade = review.grade
  book.review = review.review

  await prisma.books.update({
    data: book,
    where: { id }
  })
}