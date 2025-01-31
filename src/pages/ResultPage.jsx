import ResultCard from '../components/ResultCard'
import { QuizContext } from '../context/QuizContext'
import { useContext, useMemo } from 'react'
import { useNavigate } from 'react-router'

function ResultPage () {
  const { answers, setAnswers, questions } = useContext(QuizContext)
  const navigate = useNavigate()

  console.log(answers)
  const score = useMemo(() => answers.filter(q => q.correct_answer === q.userAnswer).length
    , [answers])

  const handleReturnToHome = () => {
    setAnswers([])
    navigate('/')
  }

  return (
    <>
      <ResultCard answers={answers} score={score} home={handleReturnToHome} questions={questions} />
    </>
  )
}

export default ResultPage
