import { CreateAnswerData } from "./../services/answerService";
import { Request, Response } from "express";
import answerService from "../services/answerService.js";
import questionService, {
  CreateQuestionData,
} from "../services/questionService.js";

export async function create(req: Request, res: Response) {
  const question: CreateQuestionData = req.body;

  await questionService.insert(question);

  res.sendStatus(201);
}

export async function answer(req: Request, res: Response) {
  const { id } = req.params;
  const answer: CreateAnswerData = req.body;

  const answers = await answerService.insert(Number(id), answer);

  res.send(answers);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.findAll();

  res.send(questions);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;

  const questions = await questionService.findById(Number(id));

  res.send(questions);
}
