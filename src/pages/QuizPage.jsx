import { QuizContext } from '../context/QuizContext'
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import QuestionCard from '../components/QuestionCard'

function QuizPage () {
  const navigate = useNavigate()
  const { number: num } = useParams()
  const number = parseInt(num, 10)
  const { questions, answers, setAnswers } = useContext(QuizContext)
  const [duration, setDuration] = useState(30)

  const handleNextQuestion = (question, answer) => {
    const newQuestionA = { ...question, userAnswer: answer }
    console.log(answer)
    console.log(newQuestionA)
    setAnswers([...answers, newQuestionA])

    if (number === questions.length - 1) {
      setDuration(30)
      return navigate('/results')
    }
    navigate(`/quizpage/${number + 1}`)
    console.log(number)
  }

  useEffect(() => {
    if (duration > 0) {
      const time = setInterval(() => {
        setDuration((prevTime) => prevTime - 1)
      }, 1000)

      return () => clearInterval(time)
    }

    if (duration === 0) {
      handleNextQuestion(questions[number], '')
      setDuration(30)
    }
  }, [])

  return (
    <QuestionCard
      nextQuestion={handleNextQuestion}
      question={questions[number - 1]}
      totalQuestion={questions.length}
      number={number}
      time={duration}
    />
  )
}

export default QuizPage
