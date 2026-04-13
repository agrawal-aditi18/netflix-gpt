import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_AI_KEY } from "./constants";

const genAI = new GoogleGenerativeAI(GEMINI_AI_KEY);
const model = genAI.getGenerativeModel({model : "gemini-3-flash-preview"});

export default model;