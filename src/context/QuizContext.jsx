import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const QuizContext = createContext()

export const QuestionData = ({ children }) => {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])

  return (
    <QuizContext.Provider value={{ questions, setQuestions, answers, setAnswers }}>
      {children}
    </QuizContext.Provider>
  )
}

QuestionData.propTypes = {
  children: PropTypes.node.isRequired
}
