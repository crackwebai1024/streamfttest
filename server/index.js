import express from "express";
import { v4 as uuidv4 } from "uuid";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const PORT = process.env.PORT || 8080;

let anonymousQuestions = [];

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

app.get("/", () => {
  console.log("Ping Pong");
});

app.get("/questions", (req, res) => {
  res.status(200).jsonp(anonymousQuestions);
});

const buildQuestion = (question) => ({
  createdAt: new Date(),
  id: uuidv4(),
  question,
});

app.post("/questions", (req, res) => {
  const { question } = req.body;

  if (!question) {
    res.status(400).jsonp({
      message: "The question is required",
    });
    return;
  }

  anonymousQuestions.push(buildQuestion(question));

  res.status(200).jsonp({ message: "success" });
});

app.delete("/questions", (req, res) => {
  anonymousQuestions = [];

  res.status(200).jsonp({
    message: "success",
  });
});

app.use((req, res, next) => {
  res.status(404).jsonp({
    message: "Not Found",
  });
});

app.use((error, req, res, next) => {
  if (error) {
    res.status(err.status || 500).jsonp({
      message: "Internal Server Error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
