import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_AI_KEY } from "./constants";

const genAI = new GoogleGenerativeAI(GEMINI_AI_KEY);
const model = genAI.getGenerativeModel({model : "gemini-1.0-pro"});

export default model;