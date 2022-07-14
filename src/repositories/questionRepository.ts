import { prisma } from "./../config/database";
import { CreateQuestionData } from "../services/questionService.js";

// async function findAll() {
//   const questions = await prisma.question.findMany();
//   return questions;
// }

async function insert(createQuestionData: CreateQuestionData) {
  await prisma.question.create({
    data: {
      question: createQuestionData.question,
    },
  });
}

export default {
  // findAll,
  insert,
};
