import PropTypes from 'prop-types'

function HomeCard ({ isLoading, handleQuizPage }) {
  return (
    <div className='container'>

      {isLoading
        ? (
          <div className='load-screen'>
            Loading...
          </div>
          )
        : (
          <div className='intro'>
            <h1>Welcome to the Trivia Challenge!</h1>
            <p>You will be presented with 10 True or False questions.</p>
            <p>Can you score 5/10 or higher?</p>
            <button onClick={handleQuizPage} className='btn-first'>
              Start Quiz
            </button>
          </div>
          )}
    </div>

  )
}

export default HomeCard

HomeCard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  handleQuizPage: PropTypes.func.isRequired
}
