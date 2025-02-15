import PropTypes from 'prop-types'

function QuestionCard ({ nextQuestion, question, totalQuestion, number, time }) {
  return (
    <div className='qcontainer'>
      <div className='top'>
        <span className='time'>{time}</span>
        <p>{number} out of {totalQuestion}</p>
      </div>

      <div className='question-info'>
        <h3>{question?.category}</h3>
        <h4>{question?.difficulty}</h4>
        <p>{question?.question}</p>
        <div className='btn'>
          <button onClick={() => nextQuestion(question, 'True')} className='correct'>True</button>
          <button onClick={() => nextQuestion(question, 'False')} className='wrong'>False</button>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard

QuestionCard.propTypes = {
  nextQuestion: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  totalQuestion: PropTypes.number,
  time: PropTypes.number,
  number: PropTypes.number
}
