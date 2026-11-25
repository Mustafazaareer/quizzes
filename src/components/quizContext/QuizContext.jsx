import { createContext, useContext, useReducer } from "react";
import { initialState, quizReducer } from "../quizReducer/QuizReducer";

const QuizContext = createContext(null);

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error("useQuiz must be used within QuizProvider");
  }

  return context;
}

export { useQuiz, QuizProvider };
