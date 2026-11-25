import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizzesPage from "./pages/quizzesPage/QuizzesPage";
import Nav from "./components/nav/Nav";
import styles from "./App.module.css";
import Footer from "./components/footer/Footer";
import { createContext, useReducer } from "react";
import StartQuizPage from "./pages/startQuizPage/StartQuizPage";
import QuizQuestionPage from "./pages/quizQuestionPage/QuizQuestionPage";
import ResultsPage from "./pages/resultPage/ResultsPage";

// Import all JSON files from the data folder
const quizFiles = import.meta.glob("../data/*.json", {
  eager: true,
  import: "default",
});

const QuizContext = createContext("");

const initialState = {
  quizzes: Object.values(quizFiles),
  quiz: null,
  status: "ready",
  answerIndex: -1,
  quizIndex: 0,
  questionIndex: 0,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reduce(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, quizzes: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "chooseQuiz":
      return {
        ...state,
        quizIndex: action.payload,
        quiz: state.quizzes[action.payload],
        status: "selectQuiz",
      };
    case "resetQuestions":
      return {
        ...state,
        quizzes: Object.values(quizFiles),
        quiz: null,
        status: "ready",
        answerIndex: -1,
        quizIndex: 0,
        questionIndex: 0,
        points: 0,
        highscore: 0,
        secondsRemaining: null,
      };
    case "started":
      return { ...state, status: "started" };
    case "chooseAnswer": {
      return {
        ...state,
        answerIndex: action.payload,
        status: "chooseAnswer",
      };
    }
    case "nextQuestion": {
      const updatedQuiz = {
        ...state.quiz,
        questions: state.quiz.questions.map((question, index) =>
          index === state.questionIndex
            ? { ...question, answer: action.payload }
            : question
        ),
      };
      return {
        ...state,
        quizzes: state.quizzes.map((quiz, index) =>
          index === action.payload ? updatedQuiz : quiz
        ),
        quiz: updatedQuiz,
        questionIndex: state.questionIndex + 1,
        answerIndex: -1,
      };
    }

    case "previousQuestion":
      return {
        ...state,
        questionIndex: state.questionIndex - 1,
        answerIndex: -1,
      };

    case "finishQuiz":
      const updatedQuiz = {
        ...state.quiz,
        questions: state.quiz.questions.map((question, index) =>
          index === state.questionIndex
            ? { ...question, answer: action.payload }
            : question
        ),
      };
      return {
        ...state,
        quizzes: state.quizzes.map((quiz, index) =>
          index === action.payload ? updatedQuiz : quiz
        ),
        quiz: updatedQuiz,
        questionIndex: 0,
        answerIndex: -1,
      };
    default:
      throw new Error("Action Unknown");
  }
}

function App() {
  const [state, dispatch] = useReducer(reduce, initialState);
  return (
    <BrowserRouter>
      <div className={styles.mainContainer}>
        <QuizContext.Provider value={{ state, dispatch }}>
          <Nav />
          <div className={styles.pages}>
            <Routes>
              <Route path="/" element={<QuizzesPage />} />
              <Route path="/start" element={<StartQuizPage />} />
              <Route path="/play" element={<QuizQuestionPage />} />
              <Route path="/result" element={<ResultsPage />} />
            </Routes>
          </div>
          <Footer />
        </QuizContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export { App, QuizContext };
