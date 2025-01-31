import { QuizContext } from "../context/QuizContext"
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router"
import QuestionCard from '../components/QuestionCard'

function QuizPage() {
    const navigate = useNavigate()
    const {number: num} = useParams()
    const number = parseInt(num, 10)
    const { questions, answers, setAnswers } = useContext(QuizContext)
    const [duration,setDuration] = useState(30)
    
   const handleNextQuestion = (question, answer) => {
    const newQuestionA = {...question, userAnswer: answer}
    setAnswers([answers, newQuestionA])

    if(number === 10) {
        setDuration(30)
        return navigate('/results')
    }
    navigate(`/quizpage/${number}`)
   }

   useEffect(()=>{
    if (duration > 0){
        const time = setInterval(()=>{
            setDuration((prevTime)=>prevTime-1)
          },1000);
          return ()=> clearInterval(time)
    }
    else if(duration == 0) {
        handleNextQuestion(questions[number],'')
    }
   },[duration])

   return (
    <QuestionCard
      nextQuestion={handleNextQuestion}
      question={questions[number-1]}
      totalQuestion={questions.length}
      number={number}
      time = {duration}
    />
  )
}

export default QuizPage