import PropTypes from 'prop-types'
function ResultCard ({ answers, score, home, questions }) {
  console.log(answers)
  return (
    <div>
      <h3>You scored {score} out of {questions.length}</h3>
      <h3>{score >= 5 ? 'You passed' : 'You failed'}</h3>

      {answers.map((item, index) => {
        return (
          <div className='display' key={index + 1}>
            <p>{index + 1}. {item.question}</p>
            <p>Correct Answer: {item.correct_answer}</p>
            <p>Your Answer: {item.userAnswer} </p>
          </div>
        )
      })}
      <button onClick={() => home()} className='btn-restart'>
        Restart
      </button>
    </div>

  )
}

ResultCard.propTypes = {
  answers: PropTypes.array,
  score: PropTypes.number,
  home: PropTypes.func,
  questions: PropTypes.array
}

export default ResultCard
