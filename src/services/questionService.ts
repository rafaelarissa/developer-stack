import { Question } from "@prisma/client";
import questionRepository from "../repositories/questionRepository";

async function findAll() {
  const questions = await questionRepository.findAll();
  return questions;
}

export type CreateQuestionData = Omit<Question, "id">;
async function insert(createQuestionData: CreateQuestionData) {
  await questionRepository.insert(createQuestionData);
}

const questionService = { findAll, insert };
export default questionService;
