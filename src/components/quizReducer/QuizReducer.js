const SECONDS_PER_QUESTION = 30;

const initialState = {
  quizzes: [],
  selectedQuiz: -1,
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, quizzes: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECONDS_PER_QUESTION,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining - 1 === 0 ? "finished" : state.status,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      const isCorrect = question.correctOption === action.payload;
      return {
        ...state,
        answer: action.payload,
        points: isCorrect ? state.points + question.points : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index++, answer: null };
    case "RESET_QUIZ":
      return initialState;

    default:
      throw new Error("Action Unknown");
  }
}

export { initialState, quizReducer };
