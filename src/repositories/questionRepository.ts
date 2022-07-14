import { prisma } from "./../config/database";
import { CreateQuestionData } from "../services/questionService.js";

async function findAll() {
  const questions = await prisma.question.findMany();
  return questions;
}

async function findById(id: number) {
  const questions = await prisma.question.findMany({ where: { id: id } });
  return questions;
}

async function insert(createQuestionData: CreateQuestionData) {
  await prisma.question.create({
    data: {
      question: createQuestionData.question,
    },
  });
}

export default {
  findAll,
  findById,
  insert,
};
