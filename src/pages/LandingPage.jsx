import { useEffect, useContext, useState } from 'react'
import { QuizContext } from '../context/QuizContext'
import { useNavigate } from 'react-router'
import { fetchQuestions } from '../services/quizApi'
import HomeCard from '../components/HomeCard'

function LandingPage () {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const handleQuizPageNavigation = () => {
    navigate('/quizpage/1')
  }

  const { setQuestions } = useContext(QuizContext)

  useEffect(() => {
    getQuestions()
  }, [])

  const getQuestions = () => {
    fetchQuestions().then(data => {
      if (data) {
        console.log(data)
        setQuestions(data)
        setLoading(false)
      }
    })
  }

  return (
    <HomeCard isLoading={loading} handleQuizPage={handleQuizPageNavigation} />
  )
}

export default LandingPage
