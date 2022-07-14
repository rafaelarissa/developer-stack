import { CreateAnswerData } from "./../services/answerService";
import { prisma } from "./../config/database";

async function insert(createAnswerData: CreateAnswerData) {
  await prisma.answer.create({
    data: {
      answer: createAnswerData.answer,
      questionId: createAnswerData.questionId,
    },
  });
}

export default { insert };
