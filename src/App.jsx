import { BrowserRouter, Routes, Route } from "react-router"
import LandingPage from './pages/LandingPage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'
import { QuestionData } from "./context/QuizContext"

function App() {
  return (
  <QuestionData>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/quizpage/:number" element={<QuizPage />}/>
          <Route path="/results" element={<ResultPage />}/>
       </Routes>
    </BrowserRouter>
  </QuestionData>

  )
}

export default App
