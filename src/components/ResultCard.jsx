import PropTypes from 'prop-types'
function ResultCard ({ answers, score, home }){
  

  return (
    <div>
        <h3>You scored {score} out of 10</h3>
        <h3>{score>=5? "You passed" : "You failed" }</h3>

        {answers.map((item, index) => {
                return (
                  <div className='display' key={index + 1}>
                    <p>{index + 1}. {item.question}</p>
                    <p>{item.correct_answer}</p>
                    <p> {item.yours} </p>
                  </div>
                )
              })}
        <button onClick={() => home()} className="btn">
          Restart
        </button>
    </div>

     
  )
}

ResultCard.propTypes = {
  answers: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  home: PropTypes.func
}

export default ResultCard