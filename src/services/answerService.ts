import { Answer } from "@prisma/client";
import answerRepository from "../repositories/answerRepository.js";

export type CreateAnswerData = Omit<Answer, "id">;
async function insert(id: number, createAnswerData: CreateAnswerData) {
  await answerRepository.insert(id, createAnswerData);
}
const answerService = { insert };
export default answerService;
