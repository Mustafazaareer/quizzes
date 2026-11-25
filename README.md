# React Quiz Application

A simple and interactive quiz application built with React. This project was created as a learning and practice project to improve my understanding of React fundamentals, state management, component architecture, and routing.

## Live Demo

[Try the Quiz Application]()

## Features

The application consists of four main pages:

1. **Quizzes Page:** Displays all available quizzes, allowing users to browse and choose a quiz.
2. **Quiz Starter Page:** Displays information about the selected quiz, including its name, topic, description, and duration.
3. **Quiz Questions Page:** Displays questions and their available answer options, allowing users to select their answers and progress through the quiz.
4. **Quiz Results Page:** Displays the results after completing a quiz, including the user's score and performance.

## Technologies & Concepts

This project was built using the following technologies and React concepts:

- **React:** Building reusable components and managing the application UI.
- **React Context API:** Sharing application state across different components.
- **useReducer:** Managing complex application state and handling different actions.
- **React Router DOM:** Implementing client-side navigation between application pages.
- **CSS Modules:** Styling components with scoped CSS to avoid style conflicts.

## Project Structure

The project follows a component-based architecture. Each component has its own folder containing its JSX and CSS Module files.

```text
src/
├── components/
│   ├── componentName/
│   │   ├── ComponentName.jsx
│   │   └── ComponentName.module.css
│
├── context/
│   └── ...
│
├── data/
│   ├── general-knowledge.json
│   ├── javascript.json
│   ├── react.json
│   ├── sql.json
│   ├── html_css.json
│   ├── networking.json
│   └── csharp.json
│
├── pages/
│   ├── quizzesPage/
│   ├── startQuizPage/
│   ├── quizQuestionPage/
│   └── quizResultPage/
│
├── App.jsx
└── main.jsx
```

## Future Improvements

There are several features I plan to implement to improve the application:

- **User Authentication:** Add user registration and login functionality.
- **User Management:** Introduce user accounts and role-based access control.
- **Quiz Creation:** Build a page that allows users to create their own quizzes.
- **Quiz Sharing:** Allow quiz creators to control which users can access and participate in their quizzes.

## Purpose

The main purpose of this project is to practice and strengthen my React development skills by building a practical application, applying React concepts, organizing components, and managing application state.
