import { Question } from "@prisma/client";
import questionRepository from "../repositories/questionRepository";

export type CreateQuestionData = Omit<Question, "id">;
async function insert(createQuestionData: CreateQuestionData) {
  await questionRepository.insert(createQuestionData);
}

const questionService = { insert };
export default questionService;
