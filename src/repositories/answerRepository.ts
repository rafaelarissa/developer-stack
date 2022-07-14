import { CreateAnswerData } from "./../services/answerService.js";
import { prisma } from "./../config/database.js";

async function insert(questionId: number, createAnswerData: CreateAnswerData) {
  await prisma.answer.create({
    data: {
      answer: createAnswerData.answer,
      questionId: questionId,
    },
  });
}

export default { insert };
