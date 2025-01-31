import { BrowserRouter, Routes, Route } from "react-router"
import LandingPage from './pages/LandingPage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'
import { QuizContext } from "./context/QuizContext"

function App() {
  return (
    <>
  <QuizContext>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/quizpage/:number" element={<QuizPage />}/>
          <Route path="/results" element={<ResultPage />}/>
       </Routes>
    </BrowserRouter>
  </QuizContext>
    </>
  )
}

export default App
